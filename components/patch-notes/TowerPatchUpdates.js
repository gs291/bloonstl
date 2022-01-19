import styled from "@emotion/styled";
import {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import useVisible from "../../lib/utils/hooks";

import PatchItems from "./PatchItems";
import TowerText from "../tower/TowerText";
import FetchErrors from "../api/FetchErrors";
import FetchLoading from "../api/FetchLoading";
import {updatePage} from "../../lib/redux/actions";
import DefaultButton from "../button/DefaultButton";
import siteColors from "../../lib/utils/siteColors";
import {globalOptions} from "../../lib/utils/emotionStyled";
import {fetchAPI, getTowerLink} from "../../lib/utils/utils";
import patchQueries from "../../lib/graphql/queries/patchQueries";
import {getDarkMode, getMobile, getPageData} from "../../lib/redux/selectors";
import {BUTTON_PREFIX, ga4SendSelectContent, SELECT_CONTENT_BUTTON} from "../../lib/utils/ga4";


const PatchContainer = styled("div", globalOptions)`
  margin-top: 10px;
  margin-bottom: 10px;
  
  min-height: 100px;
  width: ${props => props["data-m"] ? 100 : 90}%;
`;

const PatchItemsContainer = styled("div", globalOptions)`
  padding:  ${props => props["data-m"] ? 0.5 : 1}em;
  
  border-radius: 20px;
  border: 2px solid ${props => 
          props["data-bc"] 
                  ? props["data-bc"]
                  : props["data-dm"] ? siteColors.accent.dark : siteColors.accent.light
  };
`;

const PatchItemsWrapper = styled("div", globalOptions)`
  padding:  ${props => props["data-m"] ? 0.3 : 1}em;
`;

const PatchUpdateItem = styled("div")`
  width: 100%;
`;

const PatchFlex = styled("div")`
  margin-top: 20px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px 0;
`;

const FooterContainer = styled("div")`
  margin-top: 10px;
  margin-bottom: 50px;
`;


const GA4_LOAD_MORE_BUTTON_ID = "PATCH_LOAD_MORE";
export default function TowerPatchUpdates({name, tier, borderColor, ...rest}){
    const elemRef = useRef();
    const isVisible = useVisible(elemRef);

    const dispatch = useDispatch();
    const reduxPageName = `tower-patch-${getTowerLink(name)}`;
    const pageData = useSelector(state => getPageData(state, reduxPageName));

    const mobile = useSelector(getMobile);
    const darkMode = useSelector(getDarkMode);

    const [fetch, setFetch] = useState(false);
    const [patchData, setPatchData] = useState((Object.keys(pageData).length > 0) ? pageData :  {start: 0, items: []});
    const [progress, setProgress] = useState({
        isLoading: false,
        isError: false,
        errorMessages: []
    });

    useEffect(() => {
        if (isVisible) {
            setFetch(true);
        }
    }, [isVisible])

    useEffect( () => {
        let ignore = {"ignore": false};
        const controller = new AbortController();
        const query = patchQueries.queryLatestThreePatchUpdatesByTowerName;
        const variables = { name: name, start: patchData.start };

        const fetchData = async () => {
            const responseBody = await fetchAPI(query, variables, controller, ignore, setProgress);
            setFetch(false);

            if (responseBody) {
                if (!responseBody.errors && responseBody.data && responseBody.data.latestThreePatchUpdatesByTowerName) {
                    setPatchData(prevState => ({
                        "start": responseBody.data.latestThreePatchUpdatesByTowerName.start,
                        "items": [ ...prevState.items, ...responseBody.data.latestThreePatchUpdatesByTowerName.items ]
                    }));
                }
            }
        }

        if (fetch && patchData.start !== -1) {
            fetchData();
        }

        return () => {
            controller.abort();
            ignore.ignore = true;
        };
    }, [fetch]);

    useEffect(() => {
        dispatch(updatePage(reduxPageName, patchData));
    }, [patchData]);

    const handleFetch = () => {
        setFetch(prevFetch => !prevFetch);
        ga4SendSelectContent(SELECT_CONTENT_BUTTON, {item_id: `${BUTTON_PREFIX}${GA4_LOAD_MORE_BUTTON_ID}`});
    }

    return (
        <>
            <PatchContainer data-m={mobile} ref={elemRef} {...rest}>
                {patchData.items.length > 0 && (
                    <PatchItemsContainer data-bc={borderColor} data-m={mobile} data-dm={darkMode}>
                        <PatchFlex>
                            {patchData.items.map(patchUpdate => (
                                <PatchUpdateItem key={patchUpdate.release}>
                                    <TowerText variant={mobile ? "h5" : "h4"}>
                                        Patch Version {patchUpdate.release}
                                    </TowerText>
                                    <PatchItemsWrapper data-m={mobile}>
                                        <PatchItems items={patchUpdate.items} />
                                    </PatchItemsWrapper>
                                </PatchUpdateItem>
                            ))}
                            <FooterContainer>
                                {patchData.start !== -1 ? (<>{!progress.isLoading && (
                                        <DefaultButton onClick={handleFetch} data-bc={borderColor} data-dm={darkMode} variant={darkMode ? "outlined" : "contained"}>
                                            <TowerText variant={mobile ? "subtitle1" : "h6"}>
                                                Load More
                                            </TowerText>
                                        </DefaultButton>
                                )}</>) : (
                                    <TowerText variant={mobile ? "subtitle2" : "subtitle1"} font={true}>
                                        No more data can be fetched
                                    </TowerText>
                                )}
                                {progress.isLoading && (
                                    <FetchLoading />
                                )}
                            </FooterContainer>
                        </PatchFlex>
                    </PatchItemsContainer>
                )}
                {progress.isLoading && !patchData.items.length && (
                    <FetchLoading />
                )}
                {(progress.isError || progress.errorMessages.length > 0) && (
                    <FetchErrors errorMessages={progress.errorMessages} />
                )}
            </PatchContainer>
        </>
    );
}
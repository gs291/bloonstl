import styled from "@emotion/styled";
import {Button} from "@mui/material";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

import PatchItems from "./PatchItems";
import TowerText from "../tower/TowerText";
import FetchErrors from "../api/FetchErrors";
import FetchLoading from "../api/FetchLoading";
import siteColors from "../../lib/utils/siteColors";
import {globalOptions} from "../../lib/utils/emotionStyled";
import {getDarkMode, getMobile} from "../../lib/redux/selectors";
import patchQueries from "../../lib/graphql/queries/patchQueries";
import {fetchAPI, getTierColor, rgbaHex} from "../../lib/utils/utils";


const PatchContainer = styled("div", globalOptions)`
  margin-top: 10px;
  margin-bottom: 10px;
  
  width: ${props => props["data-m"] ? 100 : 80}%;
`;

const PatchItemsContainer = styled("div", globalOptions)`
  padding:  ${props => props["data-m"] ? 0.3 : 1}em;
  
  border-radius: 20px;
  border: 2px solid ${props => 
          props["data-bc"] 
                  ? props["data-bc"]
                  : props["data-dm"] ? siteColors.accent.dark : siteColors.accent.light
  };
`;

const PatchScrollContainer = styled("div", globalOptions)`
  max-height: ${props => props["data-m"] ? "none" : "750px"};
  overflow-y: auto;
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

const LoadButton = styled(Button, globalOptions)`
    color: ${props => props["data-t"]
    ? getTierColor(props["data-t"])
    : props["data-dm"] ? siteColors.accent.dark : siteColors.accent.light};

  background-color: ${props =>
    rgbaHex(props["data-t"]
            ? getTierColor(props["data-t"])
            : props["data-dm"] ? siteColors.accent.dark : siteColors.accent.light
        , props["data-dm"] ? 0 : 0.75)};
  
  border-color: ${props =>
    rgbaHex(props["data-t"]
            ? getTierColor(props["data-t"])
            : props["data-dm"] ? siteColors.accent.dark : siteColors.accent.light
        , 0.5)};
  
  &:hover {
    background-color: ${props =>
    rgbaHex(props["data-t"]
            ? getTierColor(props["data-t"])
            : props["data-dm"] ? siteColors.accent.dark : siteColors.accent.light
        , props["data-dm"] ? 0.05 : 1)};
    
    border-color: ${props => props["data-t"]
    ? getTierColor(props["data-t"])
    : props["data-dm"] ? siteColors.accent.dark : siteColors.accent.light};
  }
`;

const FooterContainer = styled("div")`
  margin-top: 10px;
  margin-bottom: 50px;
`;


export default function TowerPatchUpdates({name, tier, borderColor, ...rest}){
    const mobile = useSelector(getMobile);
    const darkMode = useSelector(getDarkMode);

    const [fetch, setFetch] = useState(true);
    const [patchData, setPatchData] = useState({start: 0, patchData: []});
    const [progress, setProgress] = useState({
        isLoading: false,
        isError: false,
        errorMessages: []
    });

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
                        "patchData": [ ...prevState.patchData, ...responseBody.data.latestThreePatchUpdatesByTowerName.items ]
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

    const handleFetch = () => {
        setFetch(prevFetch => !prevFetch);
    }

    return (
        <>
            <PatchContainer {...rest}>
                {patchData.patchData.length > 0 && (
                    <PatchItemsContainer data-bc={borderColor} data-m={mobile} data-dm={darkMode}>
                        <PatchScrollContainer data-m={mobile}>
                            <PatchFlex>
                                {patchData.patchData.map(patchUpdate => (
                                    <PatchUpdateItem key={patchUpdate.release}>
                                        <TowerText variant="h4">
                                            Patch Version {patchUpdate.release}
                                        </TowerText>
                                        <PatchItemsWrapper data-m={mobile}>
                                            <PatchItems items={patchUpdate.items} />
                                        </PatchItemsWrapper>
                                    </PatchUpdateItem>
                                ))}
                                <FooterContainer>
                                    {patchData.start !== -1 ? (<>{!progress.isLoading && (
                                            <LoadButton onClick={handleFetch} data-t={tier} data-dm={darkMode} variant={darkMode ? "outlined" : "contained"}>
                                                <TowerText variant={"h6"}>
                                                    Load More
                                                </TowerText>
                                            </LoadButton>
                                    )}</>) : (
                                        <TowerText variant={"h6"}>
                                            No more data to be fetched.
                                        </TowerText>
                                    )}
                                    {progress.isLoading && (
                                        <FetchLoading />
                                    )}
                                </FooterContainer>
                            </PatchFlex>
                        </PatchScrollContainer>
                    </PatchItemsContainer>
                )}
                {progress.isLoading && (
                    <FetchLoading />
                )}
                {(progress.isError || progress.errorMessages.length > 0) && (
                    <FetchErrors errorMessages={progress.errorMessages} />
                )}
            </PatchContainer>
        </>
    );
}
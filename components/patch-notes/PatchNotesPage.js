import styled from "@emotion/styled";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import Patch from "./Patch";
import PatchDate from "./PatchDate";
import PatchSelect from "./PatchSelect";
import TowerText from "../tower/TowerText";
import FetchErrors from "../api/FetchErrors";
import FetchLoading from "../api/FetchLoading";
import {updatePage} from "../../lib/redux/actions";
import DefaultButton from "../button/DefaultButton";
import siteColors from "../../lib/utils/siteColors";
import {globalOptions} from "../../lib/utils/emotionStyled";
import {latest, latestMajor} from "../../lib/utils/patches";
import {fetchAPI, getTowerLink} from "../../lib/utils/utils";
import patchQueries from "../../lib/graphql/queries/patchQueries";
import TableOfContents from "../table-of-contents/TableOfContents";
import {getDarkMode, getMobile, getPageData} from "../../lib/redux/selectors";
import {BUTTON_PREFIX, SELECT_CONTENT_BUTTON, ga4SendSelectContent} from "../../lib/utils/ga4";


const PageContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const DefaultContainer = styled("div", globalOptions)`
  display: flex;
  flex-direction: ${props => props["data-m"] ? "column" : "row"};
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 50px;
`;

const Select = styled(PatchSelect)`
  margin-bottom: 15px;
`;

const Date = styled(PatchDate)`
  margin-top: 15px;
  margin-bottom: 40px;
  text-align: center;
`;

const Title = styled(TowerText)`
  margin-top: 10px;
  text-align: center;
`;


const GA4_PATCH_BUTTON_ID = "PATCH_BUTTON";

/**
 * Patch notes page
 *
 * @param {Object} props Component props
 * @param {Object} props.patch Object containing data on the initially fetched patch
 */
export default function PatchNotesPage({ patch }) {
    const dispatch = useDispatch();
    const mobile = useSelector(getMobile);
    const darkMode = useSelector(getDarkMode);

    const reduxPageName = `patches`;

    const [toc, setToc] = useState([]);
    const [patchVersion, setPatchVersion] = useState(latestMajor);
    const pageData = useSelector(state => getPageData(state, reduxPageName));

    const [patchData, setPatchData] = useState((Object.keys(pageData).length > 0 && pageData[patchVersion] !== undefined) ? pageData : {[patchVersion]: patch});

    const [progress, setProgress] = useState({
        isLoading: false,
        isError: false,
        errorMessages: []
    });

    const handlePatchSelect = (e) => {
        if (!patchData[e.target.value]) {
            setPatchData(prevState => ({...prevState, [e.target.value]: {"release": "", "items": []}}));
        }
        setPatchVersion(e.target.value);
    };

    const handleButtonClick = (e) => {
        handlePatchSelect(e);
        ga4SendSelectContent(SELECT_CONTENT_BUTTON, {
            item_id: `${BUTTON_PREFIX}${GA4_PATCH_BUTTON_ID}`,
            version: e.target.type
        })
    }

    useEffect( () => {
        let ignore = {"ignore": false};
        const controller = new AbortController();
        const query = patchQueries.queryPatchByVersion;
        const variables = { version: patchVersion };

        const fetchData = async () => {
            const responseBody = await fetchAPI(query, variables, controller, ignore, setProgress);

            if (responseBody) {
                if (!responseBody.errors && responseBody.data && responseBody.data.patchByVersion) {
                    setPatchData(prevState => { return { ...prevState, [patchVersion]: responseBody.data.patchByVersion }});
                }
            }
        }

        if (patchData[patchVersion] && patchData[patchVersion].release === "") {
            fetchData();
        }

        if (patchData[patchVersion]) {
            const tags = patchData[patchVersion].items.map(item => {
                return {
                    "href": getTowerLink(item.title),
                    "title": item.title
                }
            });
            setToc(tags);
        }

        return () => {
            controller.abort();
            ignore.ignore = true;
        };
    }, [patchVersion])

    useEffect(() => {
        if (patchData[patchVersion] && patchData[patchVersion].release !== "") {
            const tags = patchData[patchVersion].items.map(item => {
                return {
                    "href": getTowerLink(item.title),
                    "title": item.title
                }
            });
            setToc(tags);
            dispatch(updatePage(reduxPageName, patchData));
            if (progress.isError) {
                setProgress(prg => ({
                    ...prg,
                    isError: false,
                    errorMessages: []
                }));
            }
        }
    }, [patchData]);


    return (
        <>
            <PageContainer>
                <Select patch={patchVersion} handlePatchSelect={handlePatchSelect} />
                <DefaultContainer data-m={mobile}>
                    <DefaultButton
                        onClick={() => handleButtonClick({target: {value: latest, type: "latest"}})}
                        variant={darkMode ? "outlined" : "contained"}
                        data-bc={darkMode ? siteColors.patch.button.dark : siteColors.patch.button.light}
                    >
                        <TowerText variant="subtitle1">
                            Most Recent Update (v {latest})
                        </TowerText>
                    </DefaultButton>
                    <DefaultButton
                        onClick={() => handleButtonClick({target: {value: latestMajor, type: "latestMajor"}})}
                        variant={darkMode ? "outlined" : "contained"}
                        data-bc={darkMode ? siteColors.patch.button.dark : siteColors.patch.button.light}
                    >
                        <TowerText variant="subtitle1">
                            Last Major Update (v {latestMajor})
                        </TowerText>
                    </DefaultButton>
                </DefaultContainer>

                {!progress.isLoading && !progress.isError && (
                    <>
                        <Title variant={mobile ? "h4" : "h3"}>
                            Patch Version:&nbsp;&nbsp;{patchVersion}
                        </Title>
                        <Date date={patchData[patchVersion].release} />
                    </>
                )}

                {progress.isLoading && (
                    <FetchLoading />
                )}
                {(progress.isError || progress.errorMessages.length > 0) && (
                    <FetchErrors errorMessages={progress.errorMessages} />
                )}
                {!progress.isLoading && !progress.isError && (
                    <>
                        <TableOfContents tags={toc} />
                        <Patch patch={patchData[patchVersion]} tags={toc}/>
                    </>
                )}
            </PageContainer>
        </>
    );
}

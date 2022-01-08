import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

import Patch from "./Patch";
import PatchDate from "./PatchDate";
import PatchSelect from "./PatchSelect";
import FetchErrors from "../api/FetchErrors";
import FetchLoading from "../api/FetchLoading";
import {getDarkMode} from "../../lib/redux/selectors";
import {patchVersions} from "../../lib/utils/patches";
import {fetchAPI, getTowerLink} from "../../lib/utils/utils";
import patchQueries from "../../lib/graphql/queries/patchQueries";
import TableOfContents from "../table-of-contents/TableOfContents";

const PageContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Select = styled(PatchSelect)`
  margin-bottom: 50px;
`;

const Date = styled(PatchDate)`
  margin-top: 50px;
`;


export default function PatchNotesPage({ patch }) {
    const darkMode = useSelector(getDarkMode);

    const [toc, setToc] = useState([]);
    const [patchVersion, setPatchVersion] = useState(patchVersions[0]);
    const [patchData, setPatchData] = useState({[patchVersions[0]]: patch});

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
        }
    }, [patchData])


    return (
        <>
            <PageContainer>
                <Select patch={patchVersion} handlePatchSelect={handlePatchSelect} />

                {progress.isLoading && (
                    <FetchLoading />
                )}
                {(progress.isError || progress.errorMessages.length > 0) && (
                    <FetchErrors errorMessages={progress.errorMessages} />
                )}
                {!progress.isLoading && !progress.isError && (
                    <>
                        <TableOfContents tags={toc} />
                        <Date date={patchData[patchVersion].release} />
                        <Patch patch={patchData[patchVersion]} tags={toc}/>
                    </>
                )}
            </PageContainer>
        </>
    );
}

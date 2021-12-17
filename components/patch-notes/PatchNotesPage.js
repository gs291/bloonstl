import styled from "@emotion/styled";
import {useEffect, useState} from "react";

import Patch from "./Patch";
import PatchDate from "./PatchDate";
import PatchSelect from "./PatchSelect";
import {getTowerLink} from "../../lib/utils/utils";
import {patchVersions} from "../../lib/utils/patches";
import TableOfContents from "../table-of-contents/TableOfContents";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Select = styled(PatchSelect)`
  margin-bottom: 50px;
`;

const Date = styled(PatchDate)`
  margin-top: 50px;
`;

export default function PatchNotesPage({ patch }) {
    const [patchVersion, setPatchVersion] = useState(patchVersions[0]);
    const [patchData, setPatchData] = useState(patch);
    const [toc, setToc] = useState([]);

    const handlePatchSelect = (e) => {
        setPatchVersion(e.target.value); //TODO: FETCH DATA INSTEAD OF USING HUGE JSON VARIABLE
    }

    useEffect(() => {
        const tags = patchData.items.map(item => {
            return {
                "href": getTowerLink(item.title),
                "title": item.title
            }
        });

        setToc(tags);
    }, [patchData])

    return (
        <>
            <PageContainer>
                <Select patch={patchVersion} handlePatchSelect={handlePatchSelect} />
                <TableOfContents tags={toc} />
                <Date date={patchData.release} />
                <Patch patch={patchData} tags={toc}/>
            </PageContainer>
        </>
    );
}

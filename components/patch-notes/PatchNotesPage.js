import styled from "@emotion/styled";
import {useEffect, useState} from "react";

import Patch from "./Patch";
import PatchDate from "./PatchDate";
import PatchSelect from "./PatchSelect";
import {getTowerLink} from "../../lib/utils/utils";
import TableOfContents from "../table-of-contents/TableOfContents";

const PageContainer = styled.div`
  width: 100%;
`;


export default function PatchNotesPage({ patches }) {
    const [patch, setPatch] = useState("27.0");
    const [toc, setToc] = useState([]);

    const handlePatchSelect = (e) => {
        setPatch(e.target.value);
    }

    useEffect(() => {
        const currPatch = patches[patch];
        const tags = currPatch.items.map(item => {
            return {
                "href": getTowerLink(item.title),
                "title": item.title
            }
        });

        setToc(tags);
    }, [patch])

    return (
        <>
            <PageContainer>
                <PatchSelect patch={patch} handlePatchSelect={handlePatchSelect} />
                <TableOfContents tags={toc} />
                <PatchDate date={patches[patch].release} />
                <Patch patch={patches[patch]} tags={toc}/>
            </PageContainer>
        </>
    );
}

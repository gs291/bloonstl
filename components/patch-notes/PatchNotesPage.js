import {useEffect, useState} from "react";

import Patch from "./Patch";
import PatchSelect from "./PatchSelect";
import {getTowerLink} from "../../lib/utils/utils";
import TableOfContents from "./TableOfContents";


export default function PatchNotesPage({ patches }) {
    const [patch, setPatch] = useState("27.0");
    const [toc, setToc] = useState([]);

    const handlePatchSelect = (e) => {
        setPatch(e.target.value);
    }

    useEffect(() => {
        const currPatch = patches[patch];
        const tags = currPatch.map(item => {
            return {
                "href": getTowerLink(item.title),
                "title": item.title
            }
        });

        setToc(tags);
    }, [patch])

    return (
        <>
            <PatchSelect patch={patch} handlePatchSelect={handlePatchSelect} />
            <TableOfContents tags={toc} />
            <Patch patch={patches[patch]} tags={toc}/>
        </>
    );
}

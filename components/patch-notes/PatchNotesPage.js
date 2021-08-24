import {useState} from "react";
import PatchSelect from "./PatchSelect";
import Patch from "./Patch";


export default function PatchNotesPage({ patches }) {
    const [patch, setPatch] = useState("27.0");

    const handlePatchSelect = (e) => {
        setPatch(e.target.value);
    }

    return (
        <>
            <PatchSelect patch={patch} handlePatchSelect={handlePatchSelect} />
            <Patch patch={patches[patch]} />
        </>
    );
}

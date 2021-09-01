import {useState} from "react";
import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";


export default function PatchSelect({ patch, handlePatchSelect }) {


    return (
        <>
            <FormControl>
                <InputLabel id="patch-select-label">Patch Version</InputLabel>
                <Select
                    labelId="patch-select-label"
                    value={patch}
                    onChange={handlePatchSelect}
                >
                    <MenuItem value={"27.2"}>v 27.2</MenuItem>
                    <MenuItem value={"27.1"}>v 27.1</MenuItem>
                    <MenuItem value={"27.0"}>v 27.0</MenuItem>
                    <MenuItem value={"26.1"}>v 26.1</MenuItem>
                    <MenuItem value={"26.0"}>v 26.0</MenuItem>
                    <MenuItem value={"25.1"}>v 25.1</MenuItem>
                    <MenuItem value={"25.0"}>v 25.0</MenuItem>
                    <MenuItem value={"24.2"}>v 24.2</MenuItem>
                    <MenuItem value={"24.1"}>v 24.1</MenuItem>
                    <MenuItem value={"24.0"}>v 24.0</MenuItem>
                    <MenuItem value={"23.0"}>v 23.0</MenuItem>
                    <MenuItem value={"21.1"}>v 21.1</MenuItem>
                    <MenuItem value={"21.0"}>v 21.0</MenuItem>
                </Select>
            </FormControl>
        </>
    );
}

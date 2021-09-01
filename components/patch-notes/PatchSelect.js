import styled from "@emotion/styled";
import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";

const SelectLabel = styled(InputLabel)`
  width: 115px;
`;

const VersionSelect = styled(Select)`
  width: 115px;
`;

export default function PatchSelect({ patch, handlePatchSelect }) {

    return (
        <>
            <FormControl>
                <SelectLabel id="patch-select-label">Patch Version</SelectLabel>
                <VersionSelect
                    labelId="patch-select-label"
                    value={patch}
                    onChange={handlePatchSelect}
                    MenuProps={{
                        anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "center"
                        },
                        transformOrigin: {
                            vertical: "top",
                            horizontal: "center"
                        },
                        getContentAnchorEl: null
                    }}
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
                </VersionSelect>
            </FormControl>
        </>
    );
}

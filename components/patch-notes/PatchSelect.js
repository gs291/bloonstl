import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";

import {rgbaHex} from "../../lib/utils/utils";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";

const SelectContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SelectLabel = styled(InputLabel)`
  width: 115px;
  
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
  
  &.Mui-focused {
    color: ${props => props["data-dm"] ? siteColors.accent.dark : siteColors.accent.light};
  }
`;

const VersionSelect = styled(Select)`
  width: 115px;
  transition: 0.3s;
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};

  &:before {
    border-bottom: 1px solid ${props => rgbaHex(props["data-dm"] ? siteColors.text.dark : siteColors.text.light, 0.42)};
  }

  &:hover:not(.Mui-disabled):before {
    border-bottom: 2px solid ${props => rgbaHex(props["data-dm"] ? siteColors.text.dark : siteColors.text.light, 0.87)};
  }
  
  &:after {
    border-bottom: 1px solid ${props => props["data-dm"] ? siteColors.accent.dark : siteColors.accent.light};
  }
  
  .MuiSelect-icon {
    transition: 0.3s;
    color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
  }
`;

export default function PatchSelect({ className, patch, handlePatchSelect }) {
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <SelectContainer className={className}>
                <FormControl>
                    <SelectLabel id="patch-select-label" data-dm={darkMode}>Patch Version</SelectLabel>
                    <VersionSelect
                        labelId="patch-select-label"
                        value={patch}
                        onChange={handlePatchSelect}
                        data-dm={darkMode}
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
            </SelectContainer>
        </>
    );
}

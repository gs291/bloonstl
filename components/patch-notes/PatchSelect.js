import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

import {rgbaHex} from "../../lib/utils/utils";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";
import {patchVersions} from "../../lib/utils/patches";

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
                <FormControl variant="standard">
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
                            }
                        }}
                    >
                        {patchVersions.map(patch => (
                            <MenuItem value={patch} key={patch}>v {patch}</MenuItem>
                        ))}
                    </VersionSelect>
                </FormControl>
            </SelectContainer>
        </>
    );
}

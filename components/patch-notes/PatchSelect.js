import styled from "@emotion/styled";
import {makeStyles} from "@mui/styles";
import {useSelector} from "react-redux";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

import TowerText from "../tower/TowerText";
import {rgbaHex} from "../../lib/utils/utils";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";
import {patchVersions} from "../../lib/utils/patches";


const useStyles = makeStyles({
    menuPaper: {
        maxHeight: "400px",
        backgroundColor: (props) => props.darkMode ? siteColors.select.dark : siteColors.select.light,
    }
});

const SelectContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SelectLabel = styled(InputLabel)`
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

const Item = styled(MenuItem)`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const SelectItemText = styled(TowerText)`
  &:hover {
    color: ${props => props["data-dm"] ? siteColors.text.navLink.dark : siteColors.text.navLink.light};
  }
`;

export default function PatchSelect({ className, patch, handlePatchSelect }) {
    const darkMode = useSelector(getDarkMode);
    const classes = useStyles({darkMode});

    return (
        <>
            <SelectContainer className={className}>
                <FormControl variant="standard">
                    <SelectLabel id="patch-select-label" data-dm={darkMode} sx={{ fontSize: "1.3em" }}>Patch Version</SelectLabel>
                    <VersionSelect
                        labelId="patch-select-label"
                        value={patch}
                        onChange={handlePatchSelect}
                        data-dm={darkMode}
                        MenuProps={{
                            classes: { paper: classes.menuPaper },
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
                            <Item value={patch} key={patch}>
                                <SelectItemText variant="h4" data-dm={darkMode}>
                                    v {patch}
                                </SelectItemText>
                            </Item>
                        ))}
                    </VersionSelect>
                </FormControl>
            </SelectContainer>
        </>
    );
}

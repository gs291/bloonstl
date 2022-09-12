import {makeStyles} from "@mui/styles";
import {styled} from "@mui/material/styles";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

import TowerText from "../tower/TowerText";
import {rgbaHex} from "../../lib/utils/utils";
import {patchVersions} from "../../lib/utils/patches";
import {BUTTON_PREFIX, SELECT_CONTENT_BUTTON, ga4SendSelectContent} from "../../lib/utils/ga4";


const useStyles = makeStyles({
    menuPaper: {
        maxHeight: "400px",
        backgroundColor: (props) => props.theme.palette.button.select,
    }
});

const SelectContainer = styled("div")`
  display: flex;
  justify-content: center;
`;

const SelectLabel = styled(InputLabel)`
  color: ${props => props.theme.palette.text.primary};
  
  &.Mui-focused {
    color: ${props => props.theme.palette.primary.main};
  }
`;

const VersionSelect = styled(Select)`
  width: 115px;
  color: ${props => props.theme.palette.text.primary};

  &:before {
    border-bottom: 1px solid ${props => rgbaHex(props.theme.palette.text.primary, 0.42)};
  }

  &:hover:not(.Mui-disabled):before {
    border-bottom: 2px solid ${props => rgbaHex(props.theme.palette.text.primary, 0.87)};
  }
  
  &:after {
    border-bottom: 1px solid ${props => props.theme.palette.primary.main};
  }
  
  .MuiSelect-icon {
    transition: 0.3s;
    color: ${props => props.theme.palette.text.primary};
  }
`;

const Item = styled(MenuItem)`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const SelectItemText = styled(TowerText)`
  transition: 0.3s;
  &:hover {
    color: ${props => props.theme.palette.text.navLink};
  }
`;


const GA4_PATCH_SELECT_ID = "PATCH_SELECT";

/**
 * Release date for a patch
 *
 * @param {Object} props Component props
 * @param {string} [props.className] class to apply to the component
 * @param {string} props.patch The patch version
 * @param {function} props.handlePatchSelect Function to handle which patch was selected
 */
export default function PatchSelect({ className, patch, handlePatchSelect }) {
    const classes = useStyles();

    const handleOpen = () => ga4SendSelectContent(SELECT_CONTENT_BUTTON, {
        item_id: `${BUTTON_PREFIX}${GA4_PATCH_SELECT_ID}`,
        version: "open"
    });

    const handleChange = (e) => {
        handlePatchSelect(e);
        ga4SendSelectContent(SELECT_CONTENT_BUTTON, {
            item_id: `${BUTTON_PREFIX}${GA4_PATCH_SELECT_ID}`,
            version: e.target.value
        });
    };

    return (
        <>
            <SelectContainer className={className}>
                <FormControl variant="standard">
                    <SelectLabel id="patch-select-label" sx={{ fontSize: "1.3em" }}>Patch Version</SelectLabel>
                    <VersionSelect
                        labelId="patch-select-label"
                        value={patch}
                        onOpen={handleOpen}
                        onChange={handleChange}
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
                                <SelectItemText variant="h4">
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

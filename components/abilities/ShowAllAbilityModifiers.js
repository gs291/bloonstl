import {styled} from "@mui/material/styles";
import {useDispatch, useSelector} from "react-redux";
import {Checkbox, FormControlLabel, FormGroup} from "@mui/material";

import TowerText from "../tower/TowerText";
import {rgbaHex} from "../../lib/utils/utils";
import {globalOptions} from "../../lib/utils/emotionStyled";
import {getMobile, getShowTooltipModifiers} from "../../lib/redux/selectors";
import {TOGGLE_TOOLTIP_MODIFIERS, updateFilter} from "../../lib/redux/actions";
import {CHECKBOX_PREFIX, SELECT_CONTENT_CHECKBOX, ga4SendSelectContent} from "../../lib/utils/ga4";


const Group = styled(FormGroup, globalOptions)`
  align-self: end;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: ${props => 
          props["data-m"] 
                  ? 15 
                  : props["data-w"] ? 25 : 20}px;
`;

const Label = styled(FormControlLabel)`
  margin-left: 0;

  padding: 5px 15px;
  border-radius: 10px;
  border: 1px solid transparent;
  transition: 0.3s;
  
  &:hover {
    border: 1px solid ${props => props["data-c"] ? props["data-c"] : props.theme.palette.primary.main};
  }
`;

const StyledCheckbox = styled(Checkbox, globalOptions)`
  color: ${props => props["data-c"] ? props["data-c"] : props.theme.palette.primary.main};

  &:hover {
    background-color: ${props =>
            rgbaHex(props["data-c"] ? props["data-c"] : props.theme.palette.primary.main
                    , props.theme.palette.mode === "dark" ? 0.075 : 0.3)};
  }
  
  &.Mui-checked {
    color: ${props => props["data-c"] ? props["data-c"] : props.theme.palette.primary.main
    };
  }
`;

const GA4_SHOW_ALL_ABILITY_MODIFIERS_ID = "MODIFIERS";

/**
 * Checkbox for showing/hiding ability tooltip modifiers
 *
 * @param {Object} props Component props
 * @param {string} props.color The color of the tower
 * @param {boolean} [props.paragon=false] Shows if the Tower contains a paragon
 */
export default function ShowAllAbilityModifiers({color, paragon = false, ...rest}) {
    const dispatch = useDispatch();

    const mobile = useSelector(getMobile);
    const showAllModifiers = useSelector(getShowTooltipModifiers);

    const handleShowAllModifiers = (event) => {
        dispatch(updateFilter(TOGGLE_TOOLTIP_MODIFIERS, event.target.checked));
        ga4SendSelectContent(SELECT_CONTENT_CHECKBOX, {
            item_id: `${CHECKBOX_PREFIX}${GA4_SHOW_ALL_ABILITY_MODIFIERS_ID}`,
            item_checked: event.target.checked
        });
    }

    return (
        <>
            <Group data-m={mobile} data-w={paragon} {...rest}>
                <Label
                    labelPlacement="start"
                    data-c={color}
                    control={(
                        <StyledCheckbox
                            checked={showAllModifiers}
                            onChange={handleShowAllModifiers}
                            data-c={color}
                        />
                    )}
                    label={(
                        <TowerText variant={mobile ? "caption" : "subtitle2"} font={true}>
                            {`${showAllModifiers ? "Hide" : "Show"} all hover tooltip modifiers`}
                        </TowerText>
                    )}
                />
            </Group>
        </>
    );
}
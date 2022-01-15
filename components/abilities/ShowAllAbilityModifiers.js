import styled from "@emotion/styled";
import {useDispatch, useSelector} from "react-redux";
import {Checkbox, FormControlLabel, FormGroup} from "@mui/material";

import TowerText from "../tower/TowerText";
import siteColors from "../../lib/utils/siteColors";
import {globalOptions} from "../../lib/utils/emotionStyled";
import {getTierColor, rgbaHex} from "../../lib/utils/utils";
import {TOGGLE_TOOLTIP_MODIFIERS, updateFilter} from "../../lib/redux/actions";
import {getDarkMode, getMobile, getShowTooltipModifiers} from "../../lib/redux/selectors";


const Group = styled(FormGroup, globalOptions)`
  align-self: end;
  margin-top: 5px;
  margin-right: ${props => 
          props["data-m"] 
                  ? 15 
                  : props["data-w"] ? 25 : 20}px;
`;

const Label = styled(FormControlLabel)`

`;

const StyledCheckbox = styled(Checkbox, globalOptions)`
  color: ${props => props["data-t"] 
          ? getTierColor(props["data-t"]) 
          : props["data-dm"] ? siteColors.accent.dark : siteColors.accent.light
  };

  &:hover {
    background-color: ${props =>
            rgbaHex(props["data-t"]
                            ? getTierColor(props["data-t"])
                            : props["data-dm"] ? siteColors.accent.dark : siteColors.accent.light
                    , props["data-dm"] ? 0.075 : 0.3)};
  }
  
  &.Mui-checked {
    color: ${props => props["data-t"] 
            ? getTierColor(props["data-t"]) 
            : props["data-dm"] ? siteColors.accent.dark : siteColors.accent.light
    };
  }
`;

export default function ShowAllAbilityModifiers({tier, paragon = false, ...rest}) {
    const dispatch = useDispatch();

    const mobile = useSelector(getMobile);
    const darkMode = useSelector(getDarkMode);
    const showAllModifiers = useSelector(getShowTooltipModifiers);

    const handleShowAllModifiers = (event) => dispatch(updateFilter(TOGGLE_TOOLTIP_MODIFIERS, event.target.checked));

    return (
        <>
            <Group data-m={mobile} data-w={paragon} {...rest}>
                <Label
                    labelPlacement="start"
                    control={(
                        <StyledCheckbox
                            checked={showAllModifiers}
                            onChange={handleShowAllModifiers}
                            data-dm={darkMode}
                            data-t={tier}
                        />
                    )}
                    label={(
                        <TowerText variant={mobile ? "caption" : "subtitle2"} font={true}>
                            {showAllModifiers ? (
                                <>
                                    Hide all tooltip modifiers
                                </>
                            ) : (
                                <>
                                    Show all tooltip modifiers
                                </>
                            )}

                        </TowerText>
                    )}
                />
            </Group>
        </>
    );
}
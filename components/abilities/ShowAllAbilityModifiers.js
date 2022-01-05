import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Checkbox, FormControlLabel, FormGroup} from "@mui/material";

import TowerText from "../tower/TowerText";
import siteColors from "../../lib/utils/siteColors";
import {getTierColor, rgbaHex} from "../../lib/utils/utils";
import {getDarkMode, getMobile} from "../../lib/redux/selectors";


const Group = styled(FormGroup)`
  align-items: center;
`;

const Label = styled(FormControlLabel)`

`;

const StyledCheckbox = styled(Checkbox)`
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

export default function ShowAllAbilityModifiers({tier, checked, handleCheckboxChange, ...rest}) {
    const mobile = useSelector(getMobile);
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <Group {...rest}>
            <Label
                control={(
                    <StyledCheckbox
                        checked={checked}
                        onChange={handleCheckboxChange}
                        data-dm={darkMode}
                        data-t={tier}
                    />
                )}
                label={(
                    <TowerText variant={mobile ? "subtitle2" : "subtitle1"} font={true}>
                        {checked ? (
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
import styled from "@emotion/styled";
import {FormControlLabel, FormGroup, Switch} from "@mui/material";
import TowerText from "../tower/TowerText";
import {useSelector} from "react-redux";
import {getDarkMode, getMobile} from "../../lib/redux/selectors";
import {getHeroColor, getMonkeyColor, getTierColor, rgbaHex} from "../../lib/utils/utils";
import siteColors from "../../lib/utils/siteColors";

const Group = styled(FormGroup)`
  align-items: center;
`;

const Label = styled(FormControlLabel)`

`;

const StyledSwitch = styled(Switch)`
  color: ${props => props["data-t"] 
          ? getTierColor(props["data-t"])
          : props["data-dm"] ? siteColors.accent.dark : siteColors.accent.light
  };
  
  & .MuiSwitch-switchBase.Mui-checked {
    
    color: ${props => props["data-t"]
            ? getTierColor(props["data-t"])
            : props["data-dm"] ? siteColors.accent.dark : siteColors.accent.light
    };;
    &:hover {
      background-color: ${props => 
              rgbaHex(props["data-t"]
                      ? getTierColor(props["data-t"])
                      : props["data-dm"] ? siteColors.accent.dark : siteColors.accent.light
                      , 0.075)};
    }
  }
  
  & .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track {
    background-color: ${props => 
            rgbaHex(props["data-t"]
                            ? getTierColor(props["data-t"])
                            : props["data-dm"] ? siteColors.accent.dark : siteColors.accent.light
                    , 0.5)
    };;
  }
`;

export default function SandboxSwitch({sandbox, setSandbox, tier, ...rest}) {
    const mobile = useSelector(getMobile);
    const darkMode = useSelector(getDarkMode);

    const handleChange = (event) => {
        setSandbox(event.target.checked);
    };

    return (
        <>
            <Group {...rest}>
                <Label
                    control={(
                        <StyledSwitch
                            checked={sandbox}
                            onChange={handleChange}
                            data-dm={darkMode}
                            data-t={tier}
                        />
                    )}
                    label={(
                        <TowerText variant={mobile ? "subtitle1" : "h6"} font={true}>
                            Enter sandbox mode to set your own path!
                        </TowerText>
                    )}
                />
            </Group>
        </>
    )

}
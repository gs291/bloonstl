import styled from "@emotion/styled";
import {FormControlLabel, FormGroup, Switch} from "@mui/material";
import TowerText from "../tower/TowerText";
import {useSelector} from "react-redux";
import {getDarkMode, getMobile} from "../../lib/redux/selectors";
import {rgbaHex} from "../../lib/utils/utils";

const Label = styled(FormControlLabel)`

`;

const StyledSwitch = styled(Switch)`
  color: red;
  
  & .MuiSwitch-switchBase.Mui-checked {
    
    color: red;
    &:hover {
      background-color: ${rgbaHex("FF0000", 0.075)};
    }
  }
  
  & .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track {
    background-color: darkred;
  }
`;

export default function SandboxSwitch({sandbox, setSandbox, type, towerType}) {
    const mobile = useSelector(getMobile);
    const darkMode = useSelector(getDarkMode);

    const handleChange = (event) => {
        setSandbox(event.target.checked);
    }
    return (
        <>
            <FormGroup>
                <Label
                    control={(
                        <StyledSwitch
                            data-dm={darkMode}
                            checked={sandbox}
                            onChange={handleChange}
                        />
                    )}
                    label={(
                        <TowerText variant={mobile ? "subtitle1" : "h6"} font={true}>
                            Enter sandbox mode to set your own path!
                        </TowerText>
                    )}
                />
            </FormGroup>

        </>
    )

}
import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Button, FormControlLabel, FormGroup, Switch} from "@mui/material";

import TowerText from "../tower/TowerText";
import siteColors from "../../lib/utils/siteColors";
import {getTierColor, rgbaHex} from "../../lib/utils/utils";
import {getDarkMode, getMobile} from "../../lib/redux/selectors";
import ColorChangingDivider from "../divider/ColorChangingDivider";

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
                      , props["data-dm"] ? 0.075 : 0.3)};
    }
  }

  & .MuiSwitch-switchBase {
    color: ${props => props["data-dm"] ? "#FFFFFF" : "#CCCCCC"};
    
    &:hover {
      background-color: ${props =>
              rgbaHex(props["data-t"]
                              ? getTierColor(props["data-t"])
                              : props["data-dm"] ? siteColors.accent.dark : siteColors.accent.light
                      , 0.25)};
    }
  }

  & .MuiSwitch-switchBase + .MuiSwitch-track {
    opacity: ${props => props["data-dm"] ? 0.5 : 0.7};
  }
  
  & .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track {
    background-color: ${props => 
            rgbaHex(props["data-t"]
                            ? getTierColor(props["data-t"])
                            : props["data-dm"] ? siteColors.accent.dark : siteColors.accent.light
                    , props["data-dm"] ? 0.5 : 1)
    };;
  }
`;

const ResetButton = styled(Button)`
  color: ${props => props["data-t"]
          ? getTierColor(props["data-t"])
          : props["data-dm"] ? siteColors.accent.dark : siteColors.accent.light};

  background-color: ${props =>
          rgbaHex(props["data-t"]
                          ? getTierColor(props["data-t"])
                          : props["data-dm"] ? siteColors.accent.dark : siteColors.accent.light
                  , props["data-dm"] ? 0 : 0.75)};
  
  border-color: ${props => 
          rgbaHex(props["data-t"] 
                          ? getTierColor(props["data-t"]) 
                          : props["data-dm"] ? siteColors.accent.dark : siteColors.accent.light
                  , 0.5)};
  
  &:hover {
    background-color: ${props =>
            rgbaHex(props["data-t"]
                            ? getTierColor(props["data-t"])
                            : props["data-dm"] ? siteColors.accent.dark : siteColors.accent.light
                    , props["data-dm"] ? 0.05 : 1)};
    
    border-color: ${props => props["data-t"]
            ? getTierColor(props["data-t"])
            : props["data-dm"] ? siteColors.accent.dark : siteColors.accent.light};
  }
`;

const TopReset = styled(ResetButton)`
  margin-top: ${props => props["data-tow"] === "hero" ? 0 : 20}px;
`;

const SmallTitle = styled(TowerText)`
  margin-top: 20px;
  text-align: center;
  cursor: default;
`;

const TempContainer = styled.div`
  height: 20px;
`;

const HelperText = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CaptionText = styled(HelperText)`
  margin-top: 0;
  margin-bottom: 20px;
`;

export default function SandboxSwitch({sandbox, setSandbox, handleReset, tier, pauseSandbox, setPauseSandbox, towerType, ...rest}) {
    const mobile = useSelector(getMobile);
    const darkMode = useSelector(getDarkMode);

    const handleSandboxChange = (event) => {
        setSandbox(event.target.checked);
        setPauseSandbox(false);
    };

    const handlePauseChange = (event) => {
        setPauseSandbox(event.target.checked);
    };

    return (
        <>
            <Group {...rest}>
                {sandbox && (
                    <>
                        <TopReset
                            onClick={handleReset}
                            data-dm={darkMode}
                            data-tow={towerType}
                            data-t={tier}
                            variant={darkMode ? "outlined" : "contained"}
                        >
                            <TowerText variant="subtitle2" font={true}>
                                Reset Path
                            </TowerText>
                        </TopReset>
                    </>
                )}
                <div>
                    <SmallTitle variant={mobile ? "h6" : "h5"} data-s={sandbox}>
                        Sandbox Mode
                    </SmallTitle>
                    {sandbox ? (<ColorChangingDivider />) : (<TempContainer />)}
                </div>
                <Label
                    control={(
                        <StyledSwitch
                            checked={sandbox}
                            onChange={handleSandboxChange}
                            data-dm={darkMode}
                            data-t={tier}
                        />
                    )}
                    label={(
                        <TowerText variant={mobile ? "subtitle2" : "subtitle1"} font={true}>
                            {sandbox ? (
                                <>
                                    Sandbox mode is currently active{pauseSandbox && " and paused"}!
                                </>
                            ) : (
                                <>
                                    Enter sandbox mode to set your own path!
                                </>
                            )}

                        </TowerText>
                    )}
                />

                {sandbox && (
                    <>
                        <Label
                            control={(
                                <StyledSwitch
                                    checked={pauseSandbox}
                                    onChange={handlePauseChange}
                                    data-dm={darkMode}
                                    data-t={tier}
                                />
                            )}
                            label={(
                                <TowerText variant={mobile ? "subtitle2" : "subtitle1"} font={true}>
                                    {pauseSandbox ? (
                                        <>
                                            Sandbox selection mode is currently paused!
                                        </>
                                    ) : (
                                        <>
                                            Pause sandbox selection mode.
                                        </>
                                    )}

                                </TowerText>
                            )}
                        />

                        <HelperText>
                            <TowerText variant={mobile ? "subtitle1" : "h6"} font={true}>
                                Click on an ability to change the path!{towerType === "monkey" && ('*')}
                            </TowerText>
                            <ColorChangingDivider height={3}/>
                        </HelperText>
                        {towerType === "monkey" && (
                            <CaptionText>
                                <TowerText variant={mobile ? "caption" : "caption"} font={true}>
                                    * Sandbox mode follows BTD 6 Path Rules!
                                </TowerText>
                                <TowerText variant={mobile ? "caption" : "caption"} font={true}>
                                    * (e.g. 2-0-5 or 2-2-0 are valid while 1-1-1 or 5-3-0 are not)
                                </TowerText>
                            </CaptionText>
                        )}
                    </>
                )}

                {sandbox && (
                    <ResetButton
                        onClick={handleReset}
                        data-dm={darkMode}
                        data-t={tier}
                        variant={darkMode ? "outlined" : "contained"}
                    >
                        <TowerText variant="subtitle2" font={true}>
                            Reset Path
                        </TowerText>
                    </ResetButton>
                )}
            </Group>
        </>
    )

}
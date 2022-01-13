import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {FormGroup} from "@mui/material";

import TowerText from "../tower/TowerText";
import {getTierColor} from "../../lib/utils/utils";
import DefaultButton from "../button/DefaultButton";
import {getDarkMode, getMobile} from "../../lib/redux/selectors";
import ColorChangingDivider from "../divider/ColorChangingDivider";

const Group = styled(FormGroup)`
  align-items: center;
`;

const SmallTitle = styled(TowerText)`
  margin-top: 20px;
  text-align: center;
  cursor: default;
`;

const TitleContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SandboxButton = styled(DefaultButton)`
  margin-top: ${props => props["data-s"] ? 30 : 20}px;
  margin-bottom: 20px;
`;


const HelperText = styled("div")`
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

export default function SandboxMode({sandbox, setSandbox, handleReset, tier, pauseSandbox, setPauseSandbox, towerType, ...rest}) {
    const mobile = useSelector(getMobile);
    const darkMode = useSelector(getDarkMode);

    const handleSandboxChange = () => {
        setSandbox(prevSandbox => !prevSandbox);
        setPauseSandbox(false);
    };

    const handlePauseChange = () => {
        setPauseSandbox(prevPause => !prevPause);
    };

    return (
        <>
            <Group {...rest}>
                {sandbox && (
                    <DefaultButton
                        onClick={handleReset}
                        data-bc={getTierColor(tier)}
                        variant={darkMode ? "outlined" : "contained"}
                    >
                        <TowerText variant="subtitle2" font={true}>
                            Reset Path
                        </TowerText>
                    </DefaultButton>
                )}
                <TitleContainer>
                    <SmallTitle variant={mobile ? "h6" : "h5"} data-s={sandbox}>
                        Sandbox Mode
                    </SmallTitle>
                    {sandbox ? (<ColorChangingDivider />) : (
                        <TowerText variant="subtitle2" font>
                            Set your own path!
                        </TowerText>
                    )}
                </TitleContainer>
                <SandboxButton
                    onClick={handleSandboxChange}
                    data-bc={getTierColor(tier)}
                    data-s={sandbox}
                    variant={darkMode ? "outlined" : "contained"}
                >
                    <TowerText variant="subtitle2" font={true}>
                        {sandbox ? "Disable" : "Enable"}
                    </TowerText>
                </SandboxButton>

                {sandbox && (
                    <>
                        <DefaultButton
                            onClick={handlePauseChange}
                            data-bc={getTierColor(tier)}
                            variant={darkMode ? "outlined" : "contained"}
                        >
                            <TowerText variant="subtitle2" font={true}>
                                {pauseSandbox ? "Unpause selection mode" : "Pause selection mode"}
                            </TowerText>
                        </DefaultButton>

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
                    <DefaultButton
                        onClick={handleReset}
                        data-bc={getTierColor(tier)}
                        variant={darkMode ? "outlined" : "contained"}
                    >
                        <TowerText variant="subtitle2" font={true}>
                            Reset Path
                        </TowerText>
                    </DefaultButton>
                )}
            </Group>
        </>
    )

}
import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {FormGroup} from "@mui/material";

import TowerText from "../tower/TowerText";
import {getTierColor} from "../../lib/utils/utils";
import DefaultButton from "../button/DefaultButton";
import {getDarkMode, getMobile} from "../../lib/redux/selectors";
import ColorChangingDivider from "../divider/ColorChangingDivider";
import {BUTTON_PREFIX, SELECT_CONTENT_BUTTON, ga4SendSelectContent} from "../../lib/utils/ga4";

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

const PauseClickingButton = styled(DefaultButton)`
  margin-bottom: 15px;
`;

const HelperText = styled("div")`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CaptionText = styled(HelperText)`
  margin-bottom: 20px;
`;

const GA4_SANDBOX_MODE_ID = "SANDBOX_MODE";
const GA4_SANDBOX_MODE_PAUSE_ID = `${GA4_SANDBOX_MODE_ID}_PAUSE`;
const GA4_SANDBOX_MODE_RESET_ID = `${GA4_SANDBOX_MODE_ID}_RESET`;
export default function SandboxMode({sandbox, setSandbox, handleReset, tier, pauseSandbox, setPauseSandbox, towerType, ...rest}) {
    const mobile = useSelector(getMobile);
    const darkMode = useSelector(getDarkMode);

    const handleResetButton = () => {
        handleReset();
        ga4SendSelectContent(SELECT_CONTENT_BUTTON, {item_id: `${BUTTON_PREFIX}${GA4_SANDBOX_MODE_RESET_ID}`});
    }

    const handleSandboxChange = () => {
        setSandbox(prevSandbox => {
            ga4SendSelectContent(SELECT_CONTENT_BUTTON, {
                item_id: `${BUTTON_PREFIX}${GA4_SANDBOX_MODE_ID}`,
                item_checked: !prevSandbox
            });
            return !prevSandbox;
        });
        setPauseSandbox(false);
    };

    const handlePauseChange = () => {
        setPauseSandbox(prevPause => {
            ga4SendSelectContent(SELECT_CONTENT_BUTTON, {
                item_id: `${BUTTON_PREFIX}${GA4_SANDBOX_MODE_PAUSE_ID}`,
                item_checked: !prevPause
            });
            return !prevPause;
        });
    };

    return (
        <>
            <Group {...rest}>
                {sandbox && (
                    <DefaultButton
                        onClick={handleResetButton}
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
                        {sandbox ? "Disable" : "Enable"} Sandbox
                    </TowerText>
                </SandboxButton>

                {sandbox && (
                    <>
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
                        <PauseClickingButton
                            onClick={handlePauseChange}
                            data-bc={getTierColor(tier)}
                            variant={darkMode ? "outlined" : "contained"}
                        >
                            <TowerText variant="subtitle2" font={true}>
                                {pauseSandbox ? "Unpause" : "Pause"} ability clicking
                            </TowerText>
                        </PauseClickingButton>
                    </>
                )}

                {sandbox && (
                    <DefaultButton
                        onClick={handleResetButton}
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
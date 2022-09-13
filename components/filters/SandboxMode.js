import {useSelector} from "react-redux";
import {FormGroup} from "@mui/material";
import {styled} from "@mui/material/styles";
import {useTheme} from "@mui/material/styles";

import TowerText from "../tower/TowerText";
import {getTierColor} from "../../lib/utils/utils";
import DefaultButton from "../button/DefaultButton";
import {getMobile} from "../../lib/redux/selectors";
import {globalOptions} from "../../lib/utils/emotionStyled";
import ColorChangingDivider from "../divider/ColorChangingDivider";
import {BUTTON_PREFIX, SELECT_CONTENT_BUTTON, ga4SendSelectContent} from "../../lib/utils/ga4";


const Group = styled(FormGroup, globalOptions)`
  align-items: center;
  width: ${props => props["data-m"] ? 100 : 50}%;
  margin-bottom: ${props => props["data-m"] ? 30 : 45}px;
`;

const SmallTitle = styled(TowerText)`
  text-align: center;
  cursor: default;
`;

const TitleContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SandboxUtils = styled("div")`
  width: 100%;
  
  display: flex;
  flex-direction: row;
  gap: 15px;
  
  & > button {
    flex: 1
  }
`;

const SandboxButton = styled(DefaultButton)`
  margin-top: 10px;
`;

const PauseClickingButton = styled(DefaultButton)``;

const HelperText = styled("div")`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CaptionText = styled(HelperText)`
  margin-top: 15px;
  margin-bottom: 15px;
`;


const GA4_SANDBOX_MODE_ID = "SANDBOX_MODE";
const GA4_SANDBOX_MODE_PAUSE_ID = `${GA4_SANDBOX_MODE_ID}_PAUSE`;
const GA4_SANDBOX_MODE_RESET_ID = `${GA4_SANDBOX_MODE_ID}_RESET`;

/**
 * Sandbox Mode component
 *
 * @param {Object} props Component props
 * @param {boolean} props.sandbox Shows if sandbox mode is enabled or disabled
 * @param {function} props.setSandbox Function to set the sandbox mode
 * @param {function} props.handleReset Function to reset the ability/level path
 * @param {string} props.tier The selected tier
 * @param {boolean} props.pauseSandbox Shows if the sandbox mode is paused or not
 * @param {function} props.setPauseSandbox The function set the pause sandbox mode
 * @param {function} props.setSnackPack The function to set the next consecutive snackbar
 * @param {string} props.towerType Shows if the tower is a monkey or hero
 */
export default function SandboxMode({sandbox, setSandbox, handleReset, tier, pauseSandbox, setPauseSandbox, setSnackPack, towerType, ...rest}) {
    const theme = useTheme();
    const mobile = useSelector(getMobile);

    const handleResetButton = () => {
        handleReset();
        setSnackPack((prev) => [...prev, { message: "Sandbox Path Reset", variant: "info", key: new Date().getTime() }])
        ga4SendSelectContent(SELECT_CONTENT_BUTTON, {item_id: `${BUTTON_PREFIX}${GA4_SANDBOX_MODE_RESET_ID}`});
    }

    const handleSandboxChange = () => {
        setSandbox(prevSandbox => {
            ga4SendSelectContent(SELECT_CONTENT_BUTTON, {
                item_id: `${BUTTON_PREFIX}${GA4_SANDBOX_MODE_ID}`,
                item_checked: !prevSandbox
            });
            setSnackPack((prev) => [...prev, { message: `Sandbox ${!prevSandbox ? "Enabled" : "Disabled"}`, variant: "info", key: new Date().getTime() }])
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
            setSnackPack((prev) => [...prev, { message: `Sandbox Ability Selection ${!prevPause ? "Paused" : "Unpaused"}`, variant: "info", key: new Date().getTime() }])
            return !prevPause;
        });
    };

    return (
        <>
            <Group data-m={mobile} {...rest}>
                <TitleContainer>
                    <SmallTitle variant={mobile ? "h4" : "h3"} data-s={sandbox}>
                        Sandbox Mode
                    </SmallTitle>
                    <TowerText variant="h5" font>
                        {sandbox ? `Click on an ability to change the path!${towerType === "monkey" ? '*' : ''}` : "Set your own path!"}
                    </TowerText>
                </TitleContainer>
                <ColorChangingDivider width={70}/>
                <SandboxButton
                    onClick={handleSandboxChange}
                    data-bc={getTierColor(tier, theme)}
                    variant={theme.palette.mode === "dark" ? "outlined" : "contained"}
                >
                    <TowerText variant="subtitle2" font={true}>
                        {sandbox ? "Disable" : "Enable"} Sandbox
                    </TowerText>
                </SandboxButton>

                {sandbox && (
                    <>
                        {towerType === "monkey" ? (
                            <CaptionText>
                                <TowerText variant={mobile ? "caption" : "caption"} font={true}>
                                    * Sandbox mode follows BTD 6 Path Rules!
                                </TowerText>
                                <TowerText variant={mobile ? "caption" : "caption"} font={true}>
                                    * (e.g. 2-0-5 or 2-2-0 are valid while 1-1-1 or 5-3-0 are not)
                                </TowerText>
                            </CaptionText>
                        ) : (
                            <br />
                        )}
                    </>
                )}

                {sandbox && (
                    <>
                        <SandboxUtils>
                            <PauseClickingButton
                                onClick={handlePauseChange}
                                data-bc={getTierColor(tier, theme)}
                                variant={theme.palette.mode === "dark" ? "outlined" : "contained"}
                            >
                                <TowerText variant="subtitle2" font={true}>
                                    {pauseSandbox ? "Unpause" : "Pause"} Selections
                                </TowerText>
                            </PauseClickingButton>
                            <DefaultButton
                                onClick={handleResetButton}
                                data-bc={getTierColor(tier, theme)}
                                variant={theme.palette.mode === "dark" ? "outlined" : "contained"}
                            >
                                <TowerText variant="subtitle2" font={true}>
                                    Reset Path
                                </TowerText>
                            </DefaultButton>
                        </SandboxUtils>
                    </>
                )}
            </Group>
        </>
    )

}
import {useSelector} from "react-redux";
import {CircularProgress, FormGroup} from "@mui/material";
import {styled} from "@mui/material/styles";
import {useTheme} from "@mui/material/styles";

import Tooltip from "../tooltip/Tooltip";
import TowerText from "../tower/TowerText";
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
  text-align: center;
`;

const SandboxUtils = styled("div", globalOptions)`
  width: 100%;
  margin-top: 15px;
  
  display: flex;
  flex-direction: ${props => props["data-m"] ? "column" : "row"};
  gap: 15px;
  
  & > button {
    flex: 1
  }
  
  & > div {
    width: 100%;
  }
  
  @media only screen and (min-width: 600px) and (max-width: 900px) {
    width: 70%;
  }
`;

const SandboxTooltip = styled(Tooltip)`
  width: 100%;
`;

const SandboxButtonContainer = styled("div")`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const SandboxButton = styled(DefaultButton)`
  
`;

const SandboxEnabled = styled(CircularProgress)`
  position: absolute;
  right: 0;
  color: ${props => props["data-c"] ? props["data-c"] : props.theme.palette.text.primary};
`;

const SandboxEnabledText = styled(TowerText)`
  position: absolute;
  right: 8px;
  cursor: default;
  color: ${props => props["data-s"] ? props.theme.palette.filters.on : props.theme.palette.filters.off};
`;

const PauseClickingButton = styled(DefaultButton)`
  width: 100%;
`;

const ResetClickingButton = styled(DefaultButton)`
  width: 100%;
`;

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
  text-align: center;
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
 * @param {string} props.color The color of the tower
 * @param {boolean} props.pauseSandbox Shows if the sandbox mode is paused or not
 * @param {function} props.setPauseSandbox The function set the pause sandbox mode
 * @param {function} props.setSnackPack The function to set the next consecutive snackbar
 * @param {string} props.towerType Shows if the tower is a monkey or hero
 */
export default function SandboxMode({sandbox, setSandbox, handleReset, color, pauseSandbox, setPauseSandbox, setSnackPack, towerType, ...rest}) {
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
                    <ColorChangingDivider />
                    <TowerText variant="h5" font>
                        {sandbox ? `Click on an ability to change the path!${towerType === "monkey" ? '*' : ''}` : "Set your own path!"}
                    </TowerText>
                </TitleContainer>
                <SandboxButtonContainer>
                    <SandboxButton
                        onClick={handleSandboxChange}
                        data-bc={color}
                        variant={theme.palette.mode === "dark" ? "outlined" : "contained"}
                    >
                        <TowerText variant="subtitle2" font={true}>
                            {sandbox ? "Disable" : "Enable"} Sandbox
                        </TowerText>
                    </SandboxButton>
                    {sandbox && (
                        <>
                            <SandboxEnabled data-c={color}/>
                            <SandboxEnabledText data-s={sandbox} variant="h6">
                                SB
                            </SandboxEnabledText>
                        </>
                    )}
                </SandboxButtonContainer>

                {(towerType === "monkey" && sandbox) && (
                    <CaptionText>
                        <TowerText variant={mobile ? "caption" : "caption"} font={true}>
                            * Sandbox mode follows BTD 6 Path Rules!
                        </TowerText>
                        <TowerText variant={mobile ? "caption" : "caption"} font={true}>
                            * (e.g. 2-0-5 or 2-2-0 are valid while 1-1-1 or 5-3-0 are not)
                        </TowerText>
                    </CaptionText>
                )}

                {sandbox && (
                    <>
                        <SandboxUtils data-m={mobile}>
                            <SandboxTooltip
                                title={(<TowerText variant="body2" font={true} >{`${pauseSandbox ? "Unpause" : "Pause"} sandbox ability selections to view tooltips before selecting.`}</TowerText>)}
                                forceWidth={false} ga4ID="SANDBOX_PAUSE"
                            >
                                <PauseClickingButton
                                    onClick={handlePauseChange}
                                    data-bc={color}
                                    variant={theme.palette.mode === "dark" ? "outlined" : "contained"}
                                >

                                    <TowerText variant="subtitle2" font={true}>
                                        {pauseSandbox ? "Unpause" : "Pause"} Selections
                                    </TowerText>
                                </PauseClickingButton>
                            </SandboxTooltip>
                            <SandboxTooltip
                                title={(<TowerText variant="body2" font={true} >{`Reset sandbox ability selections`}</TowerText>)}
                                forceWidth={false} ga4ID="SANDBOX_RESET"
                            >
                                <ResetClickingButton
                                    onClick={handleResetButton}
                                    data-bc={color}
                                    variant={theme.palette.mode === "dark" ? "outlined" : "contained"}
                                >
                                    <TowerText variant="subtitle2" font={true}>
                                        Reset Path
                                    </TowerText>
                                </ResetClickingButton>
                            </SandboxTooltip>
                        </SandboxUtils>
                    </>
                )}
            </Group>
        </>
    )

}
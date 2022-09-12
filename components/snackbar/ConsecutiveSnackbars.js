import {useEffect} from "react";
import {useSelector} from "react-redux";
import {styled} from "@mui/material/styles";
import {Alert, Snackbar} from "@mui/material";

import TowerText from "../tower/TowerText";
import {rgbaHex} from "../../lib/utils/utils";
import {globalOptions} from "../../lib/utils/emotionStyled";
import {getDarkMode, getMobile} from "../../lib/redux/selectors";
import {BUTTON_PREFIX, ga4SendSelectContent, SELECT_CONTENT_BUTTON} from "../../lib/utils/ga4";


const PageAlert = styled(Alert, globalOptions)`
  width: ${props => props["data-m"] ? 90 : 100}%;
  align-items: center;
  
  color: ${props => props["severity"] ? props.theme.palette.informational[props["severity"]] : props.theme.palette.text.primary};
  
  border: 2px solid ${props => props["severity"] ? props.theme.palette.informational[props["severity"]] : props.theme.palette.text.primary};
  
  background-color: ${props => props.theme.palette.informational[props["severity"]] };
  box-shadow: -5px 5px 5px 1px ${props => rgbaHex(props["severity"] ?
                  props.theme.palette.background.tooltip
                  : props.theme.palette.primary.main
          , props["data-dm"] ? 0.6 : 1)};
  
  & .MuiAlert-icon {
    font-size: ${props => props["data-m"] ? 35 : 35}px;
    
    color: ${props => props["severity"] ? props.theme.palette.informational[props["severity"]] : props.theme.palette.text.primary };
  }

  & .MuiAlert-action {
    padding-top: 0;
  }
  
  & .MuiAlert-action svg {
    font-size: ${props => props["data-m"] ? 35 : 35}px;
  }
`;


const GA4_SNACKBAR_CLOSE_ID = "SNACKBAR_CLOSE";

/**
 * Snackbar alert system to display information in a popup.
 *   - {@link https://mui.com/components/snackbars/ MUI Snackbar} Example: Transitions -> Consecutive Snackbars
 *
 * @param {Object} props Component props
 * @param {Array<Object<{message: string, variant: string, key: number}>>} props.snackPack class to apply to the component
 * @param {function} props.setSnackPack Function to set the snack pack
 * @param {boolean} props.open Shows if the snackbar is open or closed
 * @param {function} props.setOpen Function to open/close the snackbar
 * @param {Object<{message: string, variant: string, key: number}>|undefined} props.messageInfo The current message to display in the snackbar
 * @param {function} props.setMessageInfo Function to set the snackbar message
 */
export default function ConsecutiveSnackbars({snackPack, setSnackPack, open, setOpen, messageInfo, setMessageInfo}) {
    const mobile = useSelector(getMobile);
    const darkMode = useSelector(getDarkMode);

    useEffect(() => {
        if (snackPack.length && !messageInfo) {
            // Set a new snack when we don't have an active one
            setMessageInfo({ ...snackPack[0] });
            setSnackPack((prev) => prev.slice(1));
            setOpen(true);
        } else if (snackPack.length && messageInfo && open) {
            // Close an active snack when a new one is added
            setOpen(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [snackPack, messageInfo, open]);

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);

        ga4SendSelectContent(SELECT_CONTENT_BUTTON, {item_id: `${BUTTON_PREFIX}${GA4_SNACKBAR_CLOSE_ID}`})
    };

    const handleExited = () => {
        setMessageInfo(undefined);
    };

    return (
        <>
            <Snackbar
                key={messageInfo ? messageInfo.key : undefined}
                open={open}
                autoHideDuration={3000}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center"
                }}
                sx={{zIndex: 1600}}
                onClose={handleClose}
                TransitionProps={{ onExited: handleExited }}
            >
                <PageAlert
                    onClose={handleClose}
                    data-dm={darkMode}
                    data-m={mobile}
                    severity={messageInfo ? messageInfo.variant ? messageInfo.variant : "info" : "info"}
                >
                    <TowerText variant={mobile ? "subtitle1" : "h6"} textColor="inherit">
                        {messageInfo ? messageInfo.message  : ""}
                    </TowerText>
                </PageAlert>
            </Snackbar>
        </>
    );
}

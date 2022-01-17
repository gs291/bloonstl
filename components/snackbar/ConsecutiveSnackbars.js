import {useEffect} from "react";
import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Alert, Snackbar} from "@mui/material";

import TowerText from "../tower/TowerText";
import {rgbaHex} from "../../lib/utils/utils";
import siteColors from "../../lib/utils/siteColors";
import {globalOptions} from "../../lib/utils/emotionStyled";
import {getDarkMode, getMobile} from "../../lib/redux/selectors";

const PageAlert = styled(Alert, globalOptions)`
  width: ${props => props["data-m"] ? 90 : 100}%;
  align-items: center;
  
  color: ${props => props["severity"] ? 
          props["data-dm"] ? siteColors[props["severity"]].dark : siteColors[props["severity"]].light 
          : props["data-dm"] ? siteColors.text.dark : siteColors.text.light };
  
  border: 2px solid ${props => props["severity"] ?
          props["data-dm"] ? siteColors[props["severity"]].dark : siteColors[props["severity"]].light
          : props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
  
  background-color: ${props => props["data-dm"] ? siteColors.tooltip.dark : siteColors.tooltip.light};
  box-shadow: -5px 5px 5px 1px ${props => rgbaHex(props["severity"] ?
          props["data-dm"] ? siteColors[props["severity"]].dark : siteColors[props["severity"]].light
          : props["data-dm"] ? siteColors.accent.dark : siteColors.accent.light
          , props["data-dm"] ? 0.6 : 1)};
  
  & .MuiAlert-icon {
    font-size: ${props => props["data-m"] ? 35 : 35}px;
    
    color: ${props => props["severity"] ?
            props["data-dm"] ? siteColors[props["severity"]].dark : siteColors[props["severity"]].light
            : props["data-dm"] ? siteColors.text.dark : siteColors.text.light };
  }

  & .MuiAlert-action {
    padding-top: 0;
  }
  
  & .MuiAlert-action svg {
    font-size: ${props => props["data-m"] ? 35 : 35}px;
  }
`;

// https://mui.com/components/snackbars/ example: Transitions -> Consecutive Snackbars
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
    }, [snackPack, messageInfo, open]);

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
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

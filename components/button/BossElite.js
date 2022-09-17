import {styled, useTheme} from "@mui/material/styles";

import DefaultButton from "./DefaultButton";
import {BUTTON_PREFIX, ga4SendSelectContent, SELECT_CONTENT_BUTTON} from "../../lib/utils/ga4";


const EliteButton = styled(DefaultButton)`
  width: 50%;
`;

const GA4_BOSS_ELITE_ID = "BOSS_ELITE";

/**
 * Boss button to switch from normal/elite boss
 *
 * @param {Object} props Component props
 * @param {boolean} props.elite Show if elite is enabled or not
 * @param {function} props.handleElite Function to change the elite state
 * @param {string} props.color Color of the bloon
 */
export default function BossElite({elite, handleElite, color}) {
    const theme = useTheme();

    const handleClick = (_) => {
        handleElite()
        ga4SendSelectContent(SELECT_CONTENT_BUTTON, {
            item_id: `${BUTTON_PREFIX}${GA4_BOSS_ELITE_ID}`
        });
    };

    return (
        <>
            <EliteButton
                onClick={handleClick}
                variant={theme.palette.mode === "dark" ? "outlined" : "contained"}
                borderColor={color}
            >
                Switch to {elite ? "Normal" : "Elite"} Boss
            </EliteButton>
        </>
    );
}
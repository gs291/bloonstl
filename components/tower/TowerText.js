import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Typography} from "@mui/material";

import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";
import {font_family_default} from "../../lib/utils/utils";
import {globalOptions} from "../../lib/utils/emotionStyled";


const TowerDetail = styled(Typography, globalOptions)`
  transition: 0.3s;
  ${props => props["data-f"] ? `font-family: ${font_family_default};` : "" }
  color: ${props => 
          props["data-tc"] 
                  ? props["data-tc"] 
                  : (props["data-dm"] ? siteColors.text.dark : siteColors.text.light)};
`;

/**
 * The global re-usable text component
 *
 * @param {Object} props Component props
 * @param {string} [props.className] class to apply to the text
 * @param {any} props.children Children supplied to the text
 * @param {string} props.variant MUI typography variant
 * @param {string} props.textColor The text color
 * @param {boolean} props.font Shows if the text should use a more readable font
 */
export default function TowerText({ className, children, variant, textColor, font, ...rest }) {
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <TowerDetail
                variant={variant}
                data-tc={textColor}
                data-f={font}
                data-dm={darkMode}
                className={className}
                { ...rest }
            >
                { children }
            </TowerDetail>
        </>
    )
}
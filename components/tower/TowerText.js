import {Typography} from "@mui/material";
import {styled} from "@mui/material/styles";

import {font_family_default} from "../../lib/utils/utils";
import {globalOptions} from "../../lib/utils/emotionStyled";


const TowerDetail = styled(Typography, globalOptions)`
  ${props => props["data-f"] ? `font-family: ${font_family_default};` : "" }
  color: ${props => 
          props["data-tc"] 
                  ? props["data-tc"] 
                  : (props.theme.palette.text.primary)};
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

    return (
        <>
            <TowerDetail
                variant={variant}
                data-tc={textColor}
                data-f={font}
                className={className}
                { ...rest }
            >
                { children }
            </TowerDetail>
        </>
    )
}
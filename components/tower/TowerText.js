import styled from "@emotion/styled";
import {Typography} from "@material-ui/core";

import siteColors from "../../lib/utils/siteColors";

const TowerDetail = styled(Typography)`
  color: ${props => props.textcolor ? props.textcolor : siteColors.text.dark};
  ${props => props.font ? `font-family: sans-serif;` : "" }
`;

export default function TowerText({ className, children, variant, textColor, font }) {
    return (
        <>
            <TowerDetail variant={variant} textcolor={textColor} font={font ? 1 : 0} className={className}>
                { children }
            </TowerDetail>
        </>
    )
}
import styled from "@emotion/styled";
import {Typography} from "@material-ui/core";

import siteColors from "../../lib/utils/siteColors";

const TowerDetail = styled(Typography)`
  color: ${props => props["data-tc"] ? props["data-tc"] : siteColors.text.dark};
  ${props => props["data-f"] ? `font-family: sans-serif;` : "" }
`;

export default function TowerText({ className, children, variant, textColor, font }) {
    return (
        <>
            <TowerDetail variant={variant} data-tc={textColor} data-f={font} className={className}>
                { children }
            </TowerDetail>
        </>
    )
}
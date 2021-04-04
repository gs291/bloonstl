import styled from "@emotion/styled";
import {Typography} from "@material-ui/core";

const TowerDetail = styled(Typography)`
  color: ${props => props.textcolor ? props.textcolor : "white"};
  ${props => props.font ? `font-family: sans-serif;` : "" }
`;

export default function TowerText({ children, variant, textColor, font }) {
    return (
        <>
            <TowerDetail variant={variant} textcolor={textColor} font={font ? 1 : 0}>
                { children }
            </TowerDetail>
        </>
    )
}
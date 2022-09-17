import {Button} from "@mui/material";
import {styled} from "@mui/material/styles";

import {rgbaHex} from "../../lib/utils/utils";
import {globalOptions} from "../../lib/utils/emotionStyled";


const StyledButton = styled(Button, globalOptions)`
  color: ${props => props["data-bc"] ? props["data-bc"] : props.theme.palette.text.primary};
  border-color: ${props => props["data-bc"] ? props["data-bc"] : props.theme.palette.button.primary};
  
  ${props => props["variant"] !== "outlined" && `background-color: ${rgbaHex(
      props["data-bc"] ? props["data-bc"] : props.theme.palette.button.primary
          , props.theme.palette.mode === "dark" ? 0 : 0.75)};`}
  
  &:hover {
    background-color: ${props =>
    rgbaHex(props["data-bc"] ? props["data-bc"] : props.theme.palette.button.primary
        , props.theme.palette.mode === "dark" ? 0.1 : 0.5)};
    
    border-color: ${props => props["data-bc"] ? props["data-bc"] : props.theme.palette.button.primary};
  }
`;


/**
 * Default button full component
 *
 * @param {Object} props Component props
 * @param {string} props.borderColor Color to be applied to the button
 * @param {any} props.children Children supplied to the button
 */
export default function DefaultButton({borderColor, children, ...rest}){

    return (
        <>
            <StyledButton data-bc={borderColor} {...rest}>
                {children}
            </StyledButton>
        </>
    );
}
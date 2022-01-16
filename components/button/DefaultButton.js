import styled from "@emotion/styled";
import {Button} from "@mui/material";
import {useSelector} from "react-redux";

import {rgbaHex} from "../../lib/utils/utils";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";
import {globalOptions} from "../../lib/utils/emotionStyled";

const StyledButton = styled(Button, globalOptions)`
    color: ${props => props["data-bc"]
    ? props["data-bc"]
    : props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
  
  transition: 0.3s;
  border-color: ${props => 
          props["data-bc"] 
                  ? props["data-bc"]
                  : props["data-dm"] ? siteColors.button.dark : siteColors.button.light
  };
  
  ${props => props["variant"] !== "outlined" && `background-color: ${rgbaHex(
      props["data-bc"] 
              ? props["data-bc"] 
              : props["data-dm"] ? siteColors.button.dark : siteColors.button.light
          , props["data-dm"] ? 0 : 0.75)};`}
  
  &:hover {
    background-color: ${props =>
    rgbaHex(props["data-bc"]
            ? props["data-bc"]
            : props["data-dm"] ? siteColors.button.dark : siteColors.button.light
        , props["data-dm"] ? 0.1 : 0.5)};
    
    border-color: ${props => props["data-bc"]
    ? props["data-bc"]
    : props["data-dm"] ? siteColors.button.dark : siteColors.button.light};
  }
`;

export default function DefaultButton({borderColor, children, ...rest}){
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <StyledButton data-bc={borderColor} data-dm={darkMode} {...rest}>
                {children}
            </StyledButton>
        </>
    );
}
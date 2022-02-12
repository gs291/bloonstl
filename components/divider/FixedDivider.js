import styled from "@emotion/styled";
import {Divider} from "@mui/material";
import {useSelector} from "react-redux";

import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";
import {globalOptions} from "../../lib/utils/emotionStyled";


const FDivider = styled(Divider, globalOptions)`
  width: ${props => props["data-w"]}%;
  margin-top: 10px;
  margin-bottom: 10px;
  border-width: ${props => props["data-h"] ? props["data-h"] : 1}px;
  height: ${props => props["data-h"] ? props["data-h"] : 1}px;

  background-color: ${props =>
          props["data-bc"]
                  ? props["data-bc"]
                  : props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
  border-color: ${props => 
          props["data-bc"] 
                  ? props["data-bc"] 
                  : props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
  transition: 0.3s;
`;


/**
 * Horizontal Divider (not position: fixed)
 *
 * @param {Object} props Component props
 * @param {number} props.width Width of the divider
 * @param {number} props.height Height of the divider
 * @param {string} props.backgroundColor Color for the divider
 */
export default function FixedDivider({width, height, backgroundColor, ...rest}) {
    const darkMode = useSelector(getDarkMode);

    return (
      <>
          <FDivider data-w={width} data-bc={backgroundColor} data-dm={darkMode} data-h={height} {...rest}/>
      </>
    );
}
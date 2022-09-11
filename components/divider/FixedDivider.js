import styled from "@emotion/styled";
import {Divider} from "@mui/material";

import {globalOptions} from "../../lib/utils/emotionStyled";


const FDivider = styled(Divider, globalOptions)`
  width: ${props => props["data-w"]}%;
  margin-top: 10px;
  margin-bottom: 10px;
  border-width: ${props => props["data-h"] ? props["data-h"] : 1}px;
  height: ${props => props["data-h"] ? props["data-h"] : 1}px;

  background-color: ${props => props["data-bc"] ? props["data-bc"] : props.theme.palette.text.primary};
  border-color: ${props => props["data-bc"] ? props["data-bc"] : props.theme.palette.text.primary};
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

    return (
      <>
          <FDivider data-w={width} data-bc={backgroundColor} data-h={height} {...rest}/>
      </>
    );
}
import {styled} from "@mui/material/styles";

import FixedDivider from "./FixedDivider";


const ColorDivider = styled(FixedDivider)`
  @keyframes rainbow {
    0%{background-position:0% 82%}
    50%{background-position:100% 19%}
    100%{background-position:0% 82%}
  }
  
  width: 100%;
  height: ${props => props["data-h"] ? props["data-h"] : 4}px;
  border: none;
  border-radius: 10px;
  background: linear-gradient(${props => props.theme.palette.background.default}, ${props => props["data-c"]});
  background-size: 1800% 1800%;
  animation: rainbow 5s ease infinite;
`;


/**
 * Divider with a rainbow background
 *
 * @param {Object} props Component props
 * @param {string} props.width Width of the divider
 * @param {string} props.height Height of the divider
 * @param {string} [props.colors] Comma (and space) seperated list of HEX color codes
 */
export default function ColorChangingDivider({width, height, colors = "#FF2400, #E81D1D, #E8B71D, #E3E81D, #1DE840, #1DDDE8, #2B1dE8, #DD00F3, #DD00F3" }) {
    return (
        <>
            <ColorDivider data-w={width} data-h={height} data-c={colors}/>
        </>
    );
}
import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import FixedDivider from "./FixedDivider";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";

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
  background: linear-gradient(${props => props["data-dm"] ? siteColors.page.dark : siteColors.page.light}, ${props => props["data-c"]});
  background-size: 1800% 1800%;
  animation: rainbow 5s ease infinite;
`;


export default function ColorChangingDivider({width, height, colors = "#FF2400, #E81D1D, #E8B71D, #E3E81D, #1DE840, #1DDDE8, #2B1dE8, #DD00F3, #DD00F3" }) {
    const darkMode = useSelector(getDarkMode);
    return (
        <>
            <ColorDivider data-w={width} data-dm={darkMode} data-h={height} data-c={colors}/>
        </>
    );
}
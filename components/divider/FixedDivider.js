import styled from "@emotion/styled";
import {Divider} from "@mui/material";
import {useSelector} from "react-redux";

import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";

const FDivider = styled(Divider)`
  width: ${props => props["data-w"]}%;
  margin-top: 10px;
  margin-bottom: 10px;
  border-width: ${props => props["data-h"] ? props["data-h"] : 1}px;
  height: ${props => props["data-h"] ? props["data-h"] : 1}px;
  
  border-color: ${props => 
          props["data-bc"] 
                  ? props["data-bc"] 
                  : props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
  transition: 0.3s;
`;

export default function FixedDivider({width, backgroundColor, height, ...rest}) {
    const darkMode = useSelector(getDarkMode);
    return (
      <>
          <FDivider data-w={width} data-bc={backgroundColor} data-dm={darkMode} data-h={height} {...rest}/>
      </>
    );
}
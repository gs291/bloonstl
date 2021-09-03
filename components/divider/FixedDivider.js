import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Divider} from "@material-ui/core";

import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";

const FDivider = styled(Divider)`
  width: ${props => props["data-w"]}%;
  margin-top: 10px;
  margin-bottom: 10px;
  height: ${props => props["data-h"] ? props["data-h"] : 1}px;

  background-color: ${props => 
          props["data-bc"] 
                  ? props["data-bc"] 
                  : props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
  transition: 0.3s;
`;

export default function FixedDivider({width, backgroundColor, height}) {
    const darkMode = useSelector(getDarkMode);
    return (
      <>
          <FDivider data-w={width} data-bc={backgroundColor} data-dm={darkMode} data-h={height}/>
      </>
    );
}
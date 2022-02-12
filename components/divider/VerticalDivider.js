import styled from "@emotion/styled";
import {Divider} from "@mui/material";
import {useSelector} from "react-redux";

import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";
import {globalOptions} from "../../lib/utils/emotionStyled";


const VDivider = styled(Divider, globalOptions)`
  margin-left: 10px;
  margin-right: 10px;
  
  width: ${props => props["data-w"] ? props["data-w"] : 1}px;
  border-width: ${props => props["data-w"] ? props["data-w"] : 1}px;

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
 * Vertical Divider
 *
 * @param {Object} props Component props
 * @param {string} props.width Width of the divider
 * @param {string} props.backgroundColor Color for the divider
 */
export default function VerticalDivider({ width, backgroundColor }) {
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <VDivider flexItem orientation="vertical" data-w={width} data-bc={backgroundColor} data-dm={darkMode}/>
        </>
    );
}
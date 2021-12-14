import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Typography} from "@mui/material";

import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";
import {font_family_default} from "../../lib/utils/utils";

const TowerDetail = styled(Typography)`
  transition: 0.3s;
  ${props => props["data-f"] ? `font-family: ${font_family_default};` : "" }
  color: ${props => 
          props["data-tc"] 
                  ? props["data-tc"] 
                  : (props["data-dm"] ? siteColors.text.dark : siteColors.text.light)};
`;

export default function TowerText({ className, children, variant, textColor, font }) {
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <TowerDetail
                variant={variant}
                data-tc={textColor}
                data-f={font}
                data-dm={darkMode}
                className={className}
            >
                { children }
            </TowerDetail>
        </>
    )
}
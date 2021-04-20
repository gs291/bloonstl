import styled from "@emotion/styled";
import {Typography} from "@material-ui/core";

import siteColors from "../../lib/utils/siteColors";
import {useSelector} from "react-redux";
import {getDarkMode} from "../../lib/redux/selectors";

const TowerDetail = styled(Typography)`
  transition: 0.3s;
  ${props => props["data-f"] ? `font-family: sans-serif;` : "" }
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
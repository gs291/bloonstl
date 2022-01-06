import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import StatsTitle from "./StatsTitle";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";
import {globalOptions} from "../../lib/utils/emotionStyled";

const Stats = styled("div", globalOptions)`
  display: flex;
  flex-direction: ${props => props["data-d"]};
  
  justify-content: center;
  align-items: stretch;
  
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;

  transition: 0.3s;
  background-color: ${props =>
          props["data-t"] 
                  ? props["data-tow"] === "hero" 
                          ? props["data-dm"] 
                                  ? siteColors.hero[props["data-t"].substring(0, 1).toLowerCase() + props["data-t"].substring(1).replace(/\s+/g, '')].color
                                  : siteColors.hero[props["data-t"].substring(0, 1).toLowerCase() + props["data-t"].substring(1).replace(/\s+/g, '')].color
                          : props["data-dm"] ? siteColors.monkeyType[props["data-t"].toLowerCase()].grid.dark : siteColors.monkeyType[props["data-t"].toLowerCase()].grid.light
                  : props["data-dm"] ? siteColors.page.dark : siteColors.page.light
  };
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
`;

export default function StatsContainer({children, title, direction = "row", type, towerType, ...rest}) {
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <StatsTitle title={title} type={type} towerType={towerType}/>
            <Stats {...rest} data-d={direction} data-dm={darkMode} data-t={type} data-tow={towerType}>
                {children}
            </Stats>
        </>
    );
}
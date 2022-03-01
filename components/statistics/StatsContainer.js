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
  
  background-color: ${props =>
          props["data-t"] 
                  ? props["data-tow"] === "hero" 
                          ? props["data-dm"] 
                                  ? siteColors.hero[props["data-t"].substring(0, 1).toLowerCase() + props["data-t"].substring(1).replace(/\s+/g, '')].grid.dark
                                  : siteColors.hero[props["data-t"].substring(0, 1).toLowerCase() + props["data-t"].substring(1).replace(/\s+/g, '')].grid.light
                          : props["data-dm"] ? siteColors.monkeyType[props["data-t"].toLowerCase()].grid.dark : siteColors.monkeyType[props["data-t"].toLowerCase()].grid.light
                  : props["data-dm"] ? siteColors.page.dark : siteColors.page.light
  };
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
`;

/**
 * The stat wrapper for specific statistics
 *
 * @param {Object} props Component props
 * @param {any} props.children Children supplied to the stats container
 * @param {string} props.title The title for the stats container
 * @param {string} [props.direction="row] Shows how to display the children
 * @param {string} props.type Shows the Hero name or monkey type
 * @param {string} props.towerType Shows if the tower is a monkey or hero
 */
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
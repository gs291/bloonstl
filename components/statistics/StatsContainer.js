import styled from "@emotion/styled";

import StatsTitle from "./StatsTitle";
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
                          ? props.theme.palette.tower.hero[props["data-t"].substring(0, 1).toLowerCase() + props["data-t"].substring(1).replace(/\s+/g, '')].grid 
                          : props.theme.palette.tower.type[props["data-t"].toLowerCase()].grid
                  : props.theme.palette.background.default
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

    return (
        <>
            <StatsTitle title={title} type={type} towerType={towerType}/>
            <Stats {...rest} data-d={direction} data-t={type} data-tow={towerType}>
                {children}
            </Stats>
        </>
    );
}
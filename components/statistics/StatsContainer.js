import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import StatsTitle from "./StatsTitle";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";

const Stats = styled.div`
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
                  ? props["data-dm"] ? siteColors.monkeyType[props["data-t"].toLowerCase()].grid.dark : siteColors.monkeyType[props["data-t"].toLowerCase()].grid.light
                  : props["data-dm"] ? siteColors.page.dark : siteColors.page.light
  };
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
`;

export default function StatsContainer({children, title, direction = "row", type, ...rest}) {
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <StatsTitle title={title} type={type}/>
            <Stats {...rest} data-d={direction} data-dm={darkMode} data-t={type}>
                {children}
            </Stats>
        </>
    );
}
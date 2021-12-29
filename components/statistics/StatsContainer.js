import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import StatsTitle from "./StatsTitle";
import {rgbaHex} from "../../lib/utils/utils";
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
  background-color: ${props => rgbaHex(props["data-dm"] ? siteColors.page.dark : siteColors.page.light, 0.5)};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export default function StatsContainer({children, title, direction = "row", ...rest}) {
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <StatsTitle title={title}/>
            <Stats {...rest} data-d={direction} data-dm={darkMode}>
                {children}
            </Stats>
        </>
    );
}
import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import Chevron from "./Cheveron";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";
import {hexToRgb} from "../../lib/utils/utils";

const IndicatorContainer = styled.div`
  position: relative;
  width: 30px;
  height: 45px;
`;

const ClickContainer = styled.div`
  width: 100%;
  display: flex;
  height: 75px;
  justify-content: space-evenly;
  transition: 0.3s;
  padding-top: 50px;
  padding-bottom: 100px;
  &:hover {
    background-color: rgba(${props => hexToRgb(props["data-dm"] ? siteColors.accent.dark : siteColors.accent.light)}, 0.25);
    cursor: pointer;
  }
`;

export default function ScrollIndicator({scrollTo}) {
    const darkMode = useSelector(getDarkMode);

    const handleScroll = () => {
        scrollTo.current.scrollIntoView();
    }

    return (
        <>
            <ClickContainer onClick={handleScroll} data-dm={darkMode}>
                <IndicatorContainer >
                    <Chevron delay={0}/>
                    <Chevron delay={4}/>
                </IndicatorContainer>
                <IndicatorContainer >
                    <Chevron delay={0}/>
                    <Chevron delay={4}/>
                </IndicatorContainer>
                <IndicatorContainer >
                    <Chevron delay={0}/>
                    <Chevron delay={4}/>
                </IndicatorContainer>
            </ClickContainer>
        </>
    );
}
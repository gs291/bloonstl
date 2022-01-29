import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import Chevron from "./Cheveron";
import {rgbaHex} from "../../lib/utils/utils";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";
import {globalOptions} from "../../lib/utils/emotionStyled";
import {BUTTON_PREFIX, SELECT_CONTENT_BUTTON, ga4SendSelectContent} from "../../lib/utils/ga4";

const IndicatorContainer = styled("div")`
  position: relative;
  width: 30px;
  height: 45px;
`;

const ClickContainer = styled("div", globalOptions)`
  width: 100%;
  display: flex;
  height: 75px;
  justify-content: space-evenly;
  transition: 0.3s;
  padding-top: 50px;
  padding-bottom: 100px;
  &:hover {
    background-color: ${props => rgbaHex(props["data-dm"] ? siteColors.accent.dark : siteColors.accent.light, 0.25)};
    cursor: pointer;
  }
`;

const GA4_SCROLL_INDICATOR_ID = "SCROLL_INDICATOR";
export default function ScrollIndicator({scrollTo}) {
    const darkMode = useSelector(getDarkMode);

    const handleScroll = () => {
        scrollTo.current.scrollIntoView();
        ga4SendSelectContent(SELECT_CONTENT_BUTTON, {item_id: `${BUTTON_PREFIX}${GA4_SCROLL_INDICATOR_ID}`});
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
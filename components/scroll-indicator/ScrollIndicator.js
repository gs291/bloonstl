import styled from "@emotion/styled";

import Chevron from "./Cheveron";
import {rgbaHex} from "../../lib/utils/utils";
import {BUTTON_PREFIX, SELECT_CONTENT_BUTTON, ga4SendSelectContent} from "../../lib/utils/ga4";


const IndicatorContainer = styled("div")`
  position: relative;
  width: 30px;
  height: 45px;
`;

const ClickContainer = styled("div")`
  width: 100%;
  display: flex;
  height: 75px;
  justify-content: space-evenly;
  transition: 0.3s;
  padding-top: 50px;
  padding-bottom: 100px;
  &:hover {
    background-color: ${props => rgbaHex(props.theme.palette.primary.main, 0.25)};
    cursor: pointer;
  }
`;

const GA4_SCROLL_INDICATOR_ID = "SCROLL_INDICATOR";

/**
 * Home page sections below the top background/introduction
 *
 * @param {Object} props Component props
 * @param {RefObject<HTMLDivElement>|null} props.scrollTo React reference to the top of the home page sections
 */
export default function ScrollIndicator({scrollTo}) {

    const handleScroll = () => {
        scrollTo.current.scrollIntoView();
        ga4SendSelectContent(SELECT_CONTENT_BUTTON, {item_id: `${BUTTON_PREFIX}${GA4_SCROLL_INDICATOR_ID}`});
    }

    return (
        <>
            <ClickContainer onClick={handleScroll}>
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
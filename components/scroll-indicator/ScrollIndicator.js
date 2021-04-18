import styled from "@emotion/styled";

import Chevron from "./Cheveron";

const IndicatorContainer = styled.div`
  margin: auto;
  position: relative;
  width: 30px;
  height: 45px;
`;

const ClickContainer = styled.div`
  width: 100%;
  display: flex;
  height: 75px;
  justify-content: center;
  transition: 0.3s;
  border-radius: 20px;
  &:hover {
    background-color: #143244;
    cursor: pointer;
  }
`;

export default function ScrollIndicator({scrollTo}) {

    const handleScroll = () => {
        scrollTo.current.scrollIntoView();
    }

    return (
        <>
            <ClickContainer onClick={handleScroll}>
                <IndicatorContainer >
                    <Chevron delay={0}/>
                    <Chevron delay={4}/>
                </IndicatorContainer>
            </ClickContainer>
        </>
    );
}
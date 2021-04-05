import styled from "@emotion/styled";

import HeroAbilities from "../abilities/HeroAbilities";

const MonkeyDetailedContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

export default function HeroDetailed({ className, hero }) {

    return (
        <MonkeyDetailedContainer className={className}>
            <HeroAbilities abilities={ hero.abilities } heroFile={ hero.filename }/>
        </MonkeyDetailedContainer>
    );
};

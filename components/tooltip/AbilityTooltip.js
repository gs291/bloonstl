import styled from "@emotion/styled";

import HeroAbilityTooltip from "./HeroAbilityTooltip";
import MonkeyAbilityTooltip from "./MonkeyAbilityTooltip";


const TooltipContainer = styled.div`
  padding: 1em;
`;

export default function AbilityTooltip({className, ability, rank, towerType, selected}) {
    return (
        <>
            <TooltipContainer className={className}>
                { towerType === "monkey" && <MonkeyAbilityTooltip ability={ability} rank={rank} selected={selected}/> }
                { towerType === "hero" && <HeroAbilityTooltip ability={ability} /> }
            </TooltipContainer>
        </>
    );
}
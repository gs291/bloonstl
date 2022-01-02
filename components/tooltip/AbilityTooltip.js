import styled from "@emotion/styled";

import HeroAbilityTooltip from "./HeroAbilityTooltip";
import MonkeyAbilityTooltip from "./MonkeyAbilityTooltip";


const TooltipContainer = styled.div`
  padding: 1em;
`;

export default function AbilityTooltip({className, ability, tier, towerType, selected, ...rest}) {
    return (
        <>
            <TooltipContainer className={className}>
                { towerType === "monkey" && <MonkeyAbilityTooltip ability={ability} tier={tier} selected={selected} {...rest} /> }
                { towerType === "hero" && <HeroAbilityTooltip ability={ability} {...rest} /> }
            </TooltipContainer>
        </>
    );
}
import HeroAbilityTooltip from "./HeroAbilityTooltip";
import MonkeyAbilityTooltip from "./MonkeyAbilityTooltip";


export default function AbilityTooltip({ className, ability, rank, towerType, selected}) {
    return (
        <>
            { towerType === "monkey" && <MonkeyAbilityTooltip ability={ability} rank={rank} selected={selected}/> }
            { towerType === "hero" && <HeroAbilityTooltip ability={ability} /> }
        </>
    );
}
import HeroAbilityTooltip from "./HeroAbilityTooltip";
import MonkeyAbilityTooltip from "./MonkeyAbilityTooltip";


export default function AbilityTooltip({ className, ability, towerType}) {
    return (
        <>
            { towerType === "monkey" && <MonkeyAbilityTooltip ability={ability} /> }
            { towerType === "hero" && <HeroAbilityTooltip ability={ability} /> }
        </>
    );
}
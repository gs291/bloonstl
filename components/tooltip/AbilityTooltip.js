import HeroAbilityTooltip from "./HeroAbilityTooltip";
import MonkeyAbilityTooltip from "./MonkeyAbilityTooltip";


export default function AbilityTooltip({ className, ability}) {
    return (
        <>
            { ability.name && <MonkeyAbilityTooltip ability={ability} /> }
            { !ability.name && <HeroAbilityTooltip ability={ability} /> }
        </>
    );
}
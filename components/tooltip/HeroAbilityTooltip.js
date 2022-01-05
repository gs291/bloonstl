import AbilityTitleTooltip from "./AbilityTitleTooltip";
import AbilityModifiersTooltip from "./AbilityModifiersTooltip";

export default function HeroAbilityTooltip({ ability, fileName, tier, selected, ...rest }) {

    return (
        <>
            <AbilityTitleTooltip ability={ability} tier={tier} fileName={fileName} selected={selected} towerType="hero" />
            <AbilityModifiersTooltip modifiers={ability.modifiers} />
        </>
    );
}
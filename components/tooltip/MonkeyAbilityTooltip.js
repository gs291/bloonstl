import AbilityTitleTooltip from "./AbilityTitleTooltip";
import AbilityModifiersTooltip from "./AbilityModifiersTooltip";


export default function MonkeyAbilityTooltip({ ability, tier, selected, fileName, showAllModifiers, ...rest }) {

    return (
        <>
            <AbilityTitleTooltip ability={ability} tier={tier} showAllModifiers={showAllModifiers} fileName={fileName} selected={selected} towerType="monkey" />
            <AbilityModifiersTooltip modifiers={ability.modifiers} showAllModifiers={showAllModifiers} />
        </>
    );
}
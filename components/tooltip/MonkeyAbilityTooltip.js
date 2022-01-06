import AbilityTitleTooltip from "./AbilityTitleTooltip";
import AbilityModifiersTooltip from "./AbilityModifiersTooltip";


export default function MonkeyAbilityTooltip({ ability, tier, selected, fileName, ...rest }) {

    return (
        <>
            <AbilityTitleTooltip ability={ability} tier={tier} fileName={fileName} selected={selected} towerType="monkey" />
            <AbilityModifiersTooltip modifiers={ability.modifiers} />
        </>
    );
}
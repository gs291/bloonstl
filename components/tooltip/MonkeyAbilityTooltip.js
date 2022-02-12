import AbilityTitleTooltip from "./AbilityTitleTooltip";
import AbilityModifiersTooltip from "./AbilityModifiersTooltip";


/**
 * Monkey ability tooltip
 *
 * @param {Object} props Component props
 * @param {Object} props.ability The database ability object
 * @param {string} props.fileName The filename for the tower
 * @param {string} props.tier The currently selected tier or tower tier
 * @param {boolean} props.selected Shows if the ability is currently selected
 */
export default function MonkeyAbilityTooltip({ ability, tier, selected, fileName, ...rest }) {

    return (
        <>
            <AbilityTitleTooltip ability={ability} tier={tier} fileName={fileName} selected={selected} towerType="monkey" />
            <AbilityModifiersTooltip modifiers={ability.modifiers} />
        </>
    );
}
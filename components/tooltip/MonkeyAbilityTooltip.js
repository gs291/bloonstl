import AbilityTitleTooltip from "./AbilityTitleTooltip";
import AbilityModifiersTooltip from "./AbilityModifiersTooltip";


/**
 * Monkey ability tooltip
 *
 * @param {Object} props Component props
 * @param {Object} props.ability The database ability object
 * @param {string} props.fileName The filename for the tower
 * @param {string} props.color The color of the tower
 * @param {boolean} props.selected Shows if the ability is currently selected
 */
export default function MonkeyAbilityTooltip({ ability, color, selected, fileName, ...rest }) {

    return (
        <>
            <AbilityTitleTooltip ability={ability} color={color} fileName={fileName} selected={selected} towerType="monkey" />
            <AbilityModifiersTooltip modifiers={ability.modifiers} color={color} selected={selected}/>
        </>
    );
}
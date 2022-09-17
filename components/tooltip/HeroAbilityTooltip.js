import AbilityTitleTooltip from "./AbilityTitleTooltip";
import AbilityModifiersTooltip from "./AbilityModifiersTooltip";


/**
 * Hero ability tooltip
 *
 * @param {Object} props Component props
 * @param {Object} props.ability The database ability object
 * @param {string} props.fileName The filename for the tower
 * @param {string} props.color The color of the tower
 * @param {boolean} props.selected Shows if the ability is currently selected
 */
export default function HeroAbilityTooltip({ ability, fileName, color, selected, ...rest }) {

    return (
        <>
            <AbilityTitleTooltip ability={ability} color={color} fileName={fileName} selected={selected} towerType="hero" />
            <AbilityModifiersTooltip modifiers={ability.modifiers} color={color} selected={selected}/>
        </>
    );
}
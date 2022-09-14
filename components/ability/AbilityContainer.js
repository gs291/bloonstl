import Ability from "./Ability";
import UpgradeArrow from "./UpgradeArrow";


/**
 * Individual Ability Wrapper Component
 *
 * @param {Object} props Component props
 * @param {Object} props.ability The database ability object
 * @param {string} props.fileName The filename for the tower
 * @param {string} props.color The color of the tower
 * @param {string} props.towerType Shows if the tower is a monkey or hero
 * @param {boolean} props.selected Shows if the ability is currently selected
 */
export default function AbilityContainer ({ability, fileName, color, towerType, selected, ...rest}) {
    return (
        <>
            { ability.upgrade_tier % 5 !== 0 && (
                <UpgradeArrow color={color} selected={selected}/>
            )}
            <Ability ability={ability} fileName={fileName} color={color} towerType={towerType} selected={selected} {...rest} />
        </>
    )
}
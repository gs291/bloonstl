import Ability from "./Ability";
import UpgradeArrow from "./UpgradeArrow";

export default function AbilityContainer ({ability, fileName, tier, towerType, selected, ...rest}) {
    return (
        <>
            { ability.upgrade_tier % 5 !== 0 && (
                <UpgradeArrow tier={tier} selected={selected}/>
            )}
            <Ability ability={ability} fileName={fileName} tier={tier} towerType={towerType} selected={selected} {...rest} />
        </>
    )
}
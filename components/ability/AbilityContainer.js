import Ability from "./Ability";
import UpgradeArrow from "./UpgradeArrow";

export default function AbilityContainer ({ability, fileName, rank, towerType, selected}) {
    return (
        <>
            { ability.upgrade_tier % 5 !== 0 && (
                <UpgradeArrow rank={rank} selected={selected}/>
            )}
            <Ability ability={ability} fileName={fileName} rank={rank} towerType={towerType} selected={selected}/>
        </>
    )
}
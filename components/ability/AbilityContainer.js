import Ability from "./Ability";
import UpgradeArrow from "./UpgradeArrow";

export default function AbilityContainer ({ability, monkeyFile, rank, selected}) {

    return (
        <>
            { ability.upgrade_tier % 5 !== 0 && (
                <UpgradeArrow rank={rank} selected={selected}/>
            )}
            <Ability ability={ability} monkeyFile={monkeyFile} rank={rank} selected={selected}/>
        </>
    )
}
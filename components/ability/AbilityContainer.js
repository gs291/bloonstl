import UpgradeArrow from "./UpgradeArrow";
import Ability from "./Ability";

export default function AbilityContainer ({ability, monkeyFile, rank, selected}) {

    return (
        <>
            { ability.upgrade_tier !== 0  && (
                <UpgradeArrow rank={rank} selected={selected}/>
            )}
            <Ability ability={ability} monkeyFile={monkeyFile} rank={rank} selected={selected}/>
        </>
    )
}
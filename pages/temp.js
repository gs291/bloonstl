import {dataSources} from "../lib/mysql/db";
import Header from "../components/page/Header";
import MonkeyPage from "../components/monkey/MonkeyPage";
import MainContainer from "../components/page/MainContainer";


export default function Monkey({ monkey }) {
    monkey = JSON.parse(monkey);
    console.log(monkey);

    return (
        <>
            <Header title={monkey.name} />
            <MainContainer>
                <MonkeyPage monkey={monkey}/>
            </MainContainer>

        </>
    );
}

export async function getStaticProps(context) {
    let name = "";
    name = "Dart Monkey";
    // name = "Boomerang Monkey";
    // name = "Bomb Shooter";
    // name = "Tack Shooter";
    // name = "Ice Monkey";
    // name = "Glue Gunner";
    // name = "Sniper Monkey";
    // name = "Monkey Sub";
    // name = "Monkey Buccaneer";
    // name = "Monkey Ace";
    // name = "Heli Pilot";
    // name = "Mortar Monkey";
    // name = "Dartling Gunner";
    // name = "Wizard Monkey";
    // name = "Super Monkey";
    // name = "Ninja Monkey";
    // name = "Alchemist";
    // name = "Druid";
    // name = "Banana Farm";
    // name = "Spike Factory";
    // name = "Monkey Village";
    // name = "Engineer Monkey";

    const monkey = await dataSources().monkeysAPI.getMonkeyByName({ name });

    if (monkey) {
        const mid = monkey.id;
        monkey.abilities = await dataSources().abilitiesAPI.getAbilitiesByMonkeyId({ id: mid });

        const monkey_tier = await dataSources().towersAPI.getTowerTierByMonkeyId({id: mid});
        monkey.tier = monkey_tier.tier;

        const monkey_stats = await dataSources().towersAPI.getTowerStatsByMonkeyId({id: mid});
        monkey.stats = monkey_stats;

        const name = monkey.name;
        const abilityTiers = await dataSources().abilitiesAPI.getAbilityTiersWithInfoByMonkeyName({name});
        if (abilityTiers) {
            let abilityTiersObj = { "s": [], "a": [], "b": [] };

            abilityTiers.forEach(ar => abilityTiersObj[ar.tier].push(ar));
            monkey.tiers = abilityTiersObj;
        }

        // const latestThreePatchUpdates = await dataSources().patchesAPI.getLatestThreePatchUpdatesByTowerName({name});
        // monkey.latestThreePatchUpdates = latestThreePatchUpdates;
    }

    return {
        props: {
            monkey: JSON.stringify(monkey)
        }
    }
}

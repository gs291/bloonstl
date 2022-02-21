import {dataSources} from "../../lib/mysql/db";
import Header from "../../components/page/Header";
import MonkeyPage from "../../components/monkey/MonkeyPage";
import MainContainer from "../../components/page/MainContainer";
import {getTowerLink, parseTowerLink} from "../../lib/utils/utils";
import FixedRightButtons from "../../components/fixed/FixedRightButtons";


export default function Monkey({ monkey }) {
    monkey = JSON.parse(monkey);

    return (
        <>
            <Header title={monkey.name} />
            <MainContainer>
                <MonkeyPage monkey={monkey}/>
            </MainContainer>
            <FixedRightButtons />
        </>
    );
}

export async function getStaticPaths() {
    const monkeys = await dataSources().monkeysAPI.getAllMonkeys();
    const paths = monkeys.map(monkey => {
        return {
            params: {
                name: getTowerLink(monkey.name)
            }
        }
    });

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const name = parseTowerLink(params.name)

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
    }

    return {
        props: {
            monkey: JSON.stringify(monkey)
        }
    }
}

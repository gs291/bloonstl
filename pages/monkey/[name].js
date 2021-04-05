import {dataSources} from "../../lib/mysql/db";
import Header from "../../components/page/Header";
import MonkeyPage from "../../components/monkey/MonkeyPage";
import {getTowerLink, parseTowerLink} from "../../lib/utils";


export default function Monkey({ monkey }) {
    monkey = JSON.parse(monkey);

    return (
        <>
            <Header title={monkey.name} />
            <MonkeyPage monkey={monkey}/>
        </>
    );
}

export async function getStaticPaths() {
    const monkeys = await dataSources().monkeysAPI.getAllMonkeys();
    const paths = monkeys.map(monkey => {
        return {
            params: {
                name: getTowerLink(monkey)
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
        monkey.abilities = await dataSources().abilitiesAPI.getAbilitiesByMonkeyId({ mid });

        const name = monkey.name;
        const abilityRanks = await dataSources().abilitiesAPI.getMonkeyByNameAbilityRanksWithInfo({name});
        if (abilityRanks) {
            let abilityRankObj = { "s": {}, "a": {}, "b": {} };

            abilityRanks.forEach(ar => abilityRankObj[ar.tier] = ar);
            monkey.ranks = abilityRankObj;
        }
    }

    return {
        props: {
            monkey: JSON.stringify(monkey)
        }
    }
}

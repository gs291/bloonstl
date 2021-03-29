import {dataSources} from "../../lib/mysql/db";
import {getTowerLink, parseTowerLink} from "../../lib/utils";
import MonkeyPage from "../../components/monkey/MonkeyPage";


export default function Monkey({ monkey }) {
    monkey = JSON.parse(monkey);

    return (
        <>
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
        monkey.rank = {
            "s": { "topPath": 0, "midPath": 2, "botPath": 5 },
            "a": { "topPath": 5, "midPath": 2, "botPath": 0 },
            "b": { "topPath": 2, "midPath": 5, "botPath": 0 },
            "c": { "topPath": 0, "midPath": 2, "botPath": 5 }
        }
    }

    return {
        props: {
            monkey: JSON.stringify(monkey)
        }
    }
}

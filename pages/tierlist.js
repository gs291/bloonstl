import {dataSources} from "../lib/mysql/db";
import TierListGrid from "../components/tierlist-grid/TierListGrid";

export default function TierList({ monkeys, heroes } ) {
    monkeys = JSON.parse(monkeys);
    heroes = JSON.parse(heroes);
    return (
        <>
            <TierListGrid monkeys={monkeys} heroes={heroes}/>
        </>
    );
}

export async function getStaticProps(context) {
    let monkeys = await dataSources().monkeysAPI.getAllMonkeys();
    let heroes = await dataSources().heroesAPI.getAllHeroes();

    if (monkeys) {
        monkeys = monkeys.map(monkey => ({
            ...monkey,
            rank: {
                "s": { "topPath": 0, "midPath": 2, "botPath": 5 },
                "a": { "topPath": 5, "midPath": 2, "botPath": 0 },
                "b": { "topPath": 2, "midPath": 5, "botPath": 0 },
                "c": { "topPath": 0, "midPath": 2, "botPath": 5 }
            } }));
    }

    return {
        props: {
            heroes: JSON.stringify(heroes),
            monkeys: JSON.stringify(monkeys)
        }
    }
}
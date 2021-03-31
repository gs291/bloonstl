import {dataSources} from "../lib/mysql/db";
import TierListGrid from "../components/tierlist-grid/TierListGrid";

export default function TierList({ monkeys } ) {
    monkeys = JSON.parse(monkeys);
    return (
        <>
            <TierListGrid monkeys={monkeys}/>
        </>
    );
}

export async function getStaticProps(context) {
    let monkeys = await dataSources().monkeysAPI.getAllMonkeys();

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
            monkeys: JSON.stringify(monkeys)
        }
    }
}
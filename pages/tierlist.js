import {dataSources} from "../lib/mysql/db";
import TierListGrid from "../components/tierlist-grid/TierListGrid";

export default function TierList({s, a, b}) {
    s = JSON.parse(s);
    a = JSON.parse(a);
    b = JSON.parse(b);

    const tiers = {
        "s": s,
        "a": a,
        "b": b
    }

    return (
        <>
            <TierListGrid tiers={tiers}/>
        </>
    );
}

export async function getStaticProps(context) {
    let heroes = await dataSources().heroesAPI.getAllHeroesWithTiers();
    let monkeys = await dataSources().monkeysAPI.getAllMonkeysWithTiers();

    let sTier = [], aTier = [], bTier = [];

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

    monkeys.forEach(monkey => {
        if (monkey.tier === "s") {
            sTier.push(monkey);
        } else if (monkey.tier === "a") {
            aTier.push(monkey);
        } else {
            bTier.push(monkey)
        }
    })

    heroes.forEach(hero => {
        if (hero.tier === "s") {
            sTier.push(hero);
        } else if (hero.tier === "a") {
            aTier.push(hero);
        } else {
            bTier.push(hero)
        }
    });

    return {
        props: {
            s: JSON.stringify(sTier),
            a: JSON.stringify(aTier),
            b: JSON.stringify(bTier)
        }
    }
}
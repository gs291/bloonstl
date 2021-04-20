import {dataSources} from "../lib/mysql/db";
import Header from "../components/page/Header";
import PageTitle from "../components/page/PageTitle";
import MainContainer from "../components/page/MainContainer";
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
            <Header title="Tier List" />
            <MainContainer>
                <PageTitle title="Tier List" />
                <TierListGrid tiers={tiers}/>
            </MainContainer>
        </>
    );
}

export async function getStaticProps(context) {
    let sTier = [], aTier = [], bTier = [];
    let heroes = await dataSources().heroesAPI.getAllHeroesWithTiers();
    let monkeys = await dataSources().monkeysAPI.getAllMonkeysWithTiers();

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

    const sortByName = (a, b) => {
        return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
    }

    sTier.sort( sortByName );
    aTier.sort( sortByName );
    bTier.sort( sortByName );

    return {
        props: {
            s: JSON.stringify(sTier),
            a: JSON.stringify(aTier),
            b: JSON.stringify(bTier)
        }
    }
}
import {styled} from "@mui/material/styles";

import {dataSources} from "../lib/mysql/db";
import Header from "../components/page/Header";
import TowerText from "../components/tower/TowerText";
import PageTitle from "../components/page/PageTitle";
import MainContainer from "../components/page/MainContainer";
import TierListGrid from "../components/tierlist-grid/TierListGrid";
import FixedRightButtons from "../components/fixed/FixedRightButtons";


const NoMoreTiers = styled(TowerText)`
  margin-top: 1.5em;
  text-align: center;
`;

export default function TierList({s, a, b, c}) {
    s = JSON.parse(s);
    a = JSON.parse(a);
    b = JSON.parse(b);
    c = JSON.parse(c);

    const tiers = {
        "s": s,
        "a": a,
        "b": b,
        "c": c
    }

    return (
        <>
            <Header title="Tier List" />
            <MainContainer>
                <PageTitle title="Tier List" />
                <TierListGrid tiers={tiers}/>
                <NoMoreTiers variant="h4" font={true}>
                    No more tiers?
                    Since most towers are unique and good in their own ways its only reasonable to place towers within four tiers and not any more!
                </NoMoreTiers>
            </MainContainer>
            <FixedRightButtons />
        </>
    );
}

export async function getStaticProps(context) {
    let sTier = [], aTier = [], bTier = [], cTier = [];
    let heroes = await dataSources().heroesAPI.getAllHeroesWithTiers();
    let monkeys = await dataSources().monkeysAPI.getAllMonkeysWithTiers();

    monkeys.forEach(monkey => {
        if (monkey.tier === "s") {
            sTier.push(monkey);
        } else if (monkey.tier === "a") {
            aTier.push(monkey);
        } else if (monkey.tier === "b") {
            bTier.push(monkey);
        } else {
            cTier.push(monkey)
        }
    })

    heroes.forEach(hero => {
        if (hero.tier === "s") {
            sTier.push(hero);
        } else if (hero.tier === "a") {
            aTier.push(hero);
        }  else if (hero.tier === "b"){
            bTier.push(hero)
        } else {
            cTier.push(hero)
        }
    });

    const sortByName = (a, b) =>  (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);

    sTier.sort( sortByName );
    aTier.sort( sortByName );
    bTier.sort( sortByName );
    cTier.sort( sortByName );

    return {
        props: {
            s: JSON.stringify(sTier),
            a: JSON.stringify(aTier),
            b: JSON.stringify(bTier),
            c: JSON.stringify(cTier)
        }
    }
}
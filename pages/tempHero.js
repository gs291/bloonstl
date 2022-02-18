import {dataSources} from "../lib/mysql/db";
import Header from "../components/page/Header";
import MainContainer from "../components/page/MainContainer";
import HeroPage from "../components/hero/HeroPage";


export default function Hero({ hero }) {
    hero = JSON.parse(hero);
    console.log(hero);
    return (
        <>
            <Header title={hero.name} />
            <MainContainer>
                <HeroPage hero={hero}/>
            </MainContainer>
        </>
    );
}

export async function getStaticProps() {
    let name = "";
    // name = "Admiral Brickell";
    // name = "Adora";
    // name = "Benjamin";
    // name = "Captain Churchill";
    // name = "Etienne";
    // name = "Ezili";
    // name = "Gwendolin";
    // name = "Obyn Greenfoot";
    name = "Pat Fusty";
    // name = "Psi";
    // name = "Quincy";
    // name = "Sauda";
    // name = "Striker Jones";

    const hero = await dataSources().heroesAPI.getHeroByName({ name });

    if (hero) {
        const hid = hero.id;
        hero.abilities = await dataSources().abilitiesAPI.getAbilitiesByHeroId({ id: hid });

        const hero_tier = await dataSources().towersAPI.getTowerTierByHeroId({id: hid})
        hero.tier = hero_tier.tier;

        const hero_stats = await dataSources().towersAPI.getTowerStatsByHeroId({id: hid});
        hero.stats = hero_stats;

        const name = hero.name;
        const heroInfo = await dataSources().towersAPI.getTowerTierInfoByHeroName({name});
        hero.info = heroInfo;

        // const latestThreePatchUpdates = await dataSources().patchesAPI.getLatestThreePatchUpdatesByTowerName({name});
        // hero.latestThreePatchUpdates = latestThreePatchUpdates;
    }

    return {
        props: {
            hero: JSON.stringify(hero)
        }
    }
}

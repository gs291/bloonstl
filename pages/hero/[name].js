import {dataSources} from "../../lib/mysql/db";
import Header from "../../components/page/Header";
import HeroPage from "../../components/hero/HeroPage";
import MainContainer from "../../components/page/MainContainer";
import {getTowerLink, parseTowerLink} from "../../lib/utils/utils";


export default function Monkey({ hero }) {
    hero = JSON.parse(hero);
    return (
        <>
            <Header title={hero.name} />
            <MainContainer>
                <HeroPage hero={hero}/>
            </MainContainer>
        </>
    );
}

export async function getStaticPaths() {
    const heroes = await dataSources().heroesAPI.getAllHeroes();
    const paths = heroes.map(hero => {
        return {
            params: {
                name: getTowerLink(hero.name)
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

    const hero = await dataSources().heroesAPI.getHeroByName({ name });

    if (hero) {
        const hid = hero.id;
        hero.abilities = await dataSources().abilitiesAPI.getAbilitiesByHeroId({ hid });
    }

    return {
        props: {
            hero: JSON.stringify(hero)
        }
    }
}

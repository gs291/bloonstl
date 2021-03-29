import {dataSources} from "../lib/mysql/db";
import HeroesGrid from "../components/heroes/HeroesGrid";


export default function Heroes({ heroes }) {
    heroes = JSON.parse(heroes);

    return (
        <>
            <HeroesGrid heroes={heroes} />
        </>
    );
}

export async function getStaticProps(context) {
    let heroes = await dataSources().heroesAPI.getAllHeroes();

    return {
        props: {
            heroes: JSON.stringify(heroes)
        }
    };
}

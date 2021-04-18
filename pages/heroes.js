import {dataSources} from "../lib/mysql/db";
import Header from "../components/page/Header";
import PageTitle from "../components/page/PageTitle";
import HeroesGrid from "../components/heroes/HeroesGrid";


export default function Heroes({ heroes }) {
    heroes = JSON.parse(heroes);

    return (
        <>
            <Header title="Heroes" />
            <PageTitle title="Heroes" />
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

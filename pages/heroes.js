import {dataSources} from "../lib/mysql/db";
import Header from "../components/page/Header";
import PageTitle from "../components/page/PageTitle";
import HeroesGrid from "../components/heroes/HeroesGrid";
import MainContainer from "../components/page/MainContainer";
import HorizontalAD from "../components/advertisment/HorizontalAD";


export default function Heroes({ heroes }) {
    heroes = JSON.parse(heroes);

    return (
        <>
            <Header title="Heroes" />
            <MainContainer>
                <PageTitle title="Heroes" />
                <HorizontalAD />
                <HeroesGrid heroes={heroes} />
                <HorizontalAD />
            </MainContainer>
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

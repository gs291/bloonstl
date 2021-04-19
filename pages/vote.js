import Vote from "../components/vote/Vote";
import {dataSources} from "../lib/mysql/db";
import Header from "../components/page/Header";
import MainContainer from "../components/page/MainContainer";
import PageTitle from "../components/page/PageTitle";


export default function Votes({monkeys, heroes}) {
    const towers = {
        monkeys: JSON.parse(monkeys),
        heroes: JSON.parse(heroes)
    }
    return (
        <>
            <Header title="Votes" />
            <MainContainer>
                <PageTitle title="Vote" />
                <Vote towers={towers}/>
            </MainContainer>
        </>
    );
}


export async function getStaticProps(context) {
    let monkeys = await dataSources().monkeysAPI.getAllMonkeys();
    let heroes = await dataSources().heroesAPI.getAllHeroes();

    return {
        props: {
            monkeys: JSON.stringify(monkeys),
            heroes: JSON.stringify(heroes)
        }
    };
}
import {dataSources} from "../lib/mysql/db";
import Header from "../components/page/Header";
import PageTitle from "../components/page/PageTitle";
import EnemiesPage from "../components/enemy/EnemiesPage";
import MainContainer from "../components/page/MainContainer";


export default function Enemies({ bloons, bosses }) {
    bloons = JSON.parse(bloons);
    bosses = JSON.parse(bosses);

    return (
        <>
            <Header title="Enemies" />
            <MainContainer>
                <PageTitle title="Enemies" />
                <EnemiesPage bloons={bloons} bosses={bosses} />
            </MainContainer>
        </>
    );
}

export async function getStaticProps(context) {
    const bloons = await dataSources().bloonsAPI.getAllBloons();

    return {
        props: {
            bloons: JSON.stringify(bloons.bloons),
            bosses: JSON.stringify(bloons.bosses)
        }
    }
}

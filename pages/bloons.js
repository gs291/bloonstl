import {dataSources} from "../lib/mysql/db";
import Header from "../components/page/Header";
import PageTitle from "../components/page/PageTitle";
import BloonsPage from "../components/bloons/BloonsPage";
import MainContainer from "../components/page/MainContainer";


export default function Bloons({ bloons, bosses }) {
    bloons = JSON.parse(bloons);
    bosses = JSON.parse(bosses);

    return (
        <>
            <Header title="Bloons" />
            <MainContainer>
                <PageTitle title="Bloons" />
                <BloonsPage bloons={bloons} bosses={bosses} />
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

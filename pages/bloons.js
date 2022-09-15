import {dataSources} from "../lib/mysql/db";
import Header from "../components/page/Header";
import PageTitle from "../components/page/PageTitle";
import MainContainer from "../components/page/MainContainer";


export default function Monkeys({ bloons, bosses }) {
    bloons = JSON.parse(bloons);
    bosses = JSON.parse(bosses);

    return (
        <>
            <Header title="Bloons" />
            <MainContainer>
                <PageTitle title="Bloons" />
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

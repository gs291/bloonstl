import {dataSources} from "../../lib/mysql/db";
import Header from "../../components/page/Header";
import MainContainer from "../../components/page/MainContainer";
import {getTowerLink, parseTowerLink} from "../../lib/utils/utils";


export default function Bloon({ bloon }) {
    bloon = JSON.parse(bloon);

    console.log(bloon);
    return (
        <>
            <Header title={bloon.name} />
            <MainContainer>
                <pre>
                    {bloon.name}
                </pre>
            </MainContainer>
        </>
    );
}

export async function getStaticPaths() {
    const bloons = await dataSources().bloonsAPI.getAllBloons();
    const paths = bloons.bloons
        .map(bloon => {
            return {
                params: {
                    varName: getTowerLink(bloon.varName)
                }
            }
        });

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const varName = parseTowerLink(params.varName)

    const bloon = await dataSources().bloonsAPI.getBloonByVarName({ varName });


    return {
        props: {
            bloon: JSON.stringify(bloon)
        }
    }
}

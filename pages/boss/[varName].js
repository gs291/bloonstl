import {dataSources} from "../../lib/mysql/db";
import Header from "../../components/page/Header";
import MainContainer from "../../components/page/MainContainer";
import {getTowerLink, parseTowerLink} from "../../lib/utils/utils";


export default function Boss({ boss }) {
    boss = JSON.parse(boss);

    console.log(boss);
    return (
        <>
            <Header title={boss.name} />
            <MainContainer>
                <pre>
                    {boss.name}
                </pre>
            </MainContainer>
        </>
    );
}

export async function getStaticPaths() {
    const bloons = await dataSources().bloonsAPI.getAllBloons();
    const paths = bloons.bosses
        .filter(bloon => (!(typeof bloon.type === "number") || (typeof bloon.type === "number" && bloon.type === 0)))
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

    const boss = await dataSources().bloonsAPI.getBloonByVarName({ varName });


    return {
        props: {
            boss: JSON.stringify(boss)
        }
    }
}

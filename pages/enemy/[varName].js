import {dataSources} from "../../lib/mysql/db";
import Header from "../../components/page/Header";
import EnemyPage from "../../components/enemy/EnemyPage";
import MainContainer from "../../components/page/MainContainer";
import {getTowerLink, parseTowerLink} from "../../lib/utils/utils";


export default function Enemy({ enemy }) {
    enemy = JSON.parse(enemy);

    return (
        <>
            <Header title={enemy.name} />
            <MainContainer>
                <EnemyPage enemy={enemy} type={(typeof enemy.type === "number" ? "boss" : "bloon")}/>
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

    const bossPaths = bloons.bosses
        .filter(bloon => (typeof bloon.type === "number" && bloon.type === 0))
        .map(bloon => {
            return {
                params: {
                    varName: getTowerLink(bloon.varName)
                }
            }
        });

    return {
        paths: paths.concat(bossPaths),
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const varName = parseTowerLink(params.varName)

    const bloon = await dataSources().bloonsAPI.getBloonByVarName({ varName });


    return {
        props: {
            enemy: JSON.stringify(bloon)
        }
    }
}

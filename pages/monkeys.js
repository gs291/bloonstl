import {dataSources} from "../lib/mysql/db";
import Header from "../components/page/Header";
import PageTitle from "../components/page/PageTitle";
import MonkeysGrid from "../components/monkeys/MonkeysGrid";
import MainContainer from "../components/page/MainContainer";
import FixedRightButtons from "../components/fixed/FixedRightButtons";


export default function Monkeys({ monkeys }) {
    const primary = JSON.parse(monkeys.primary);
    const military = JSON.parse(monkeys.military);
    const magic = JSON.parse(monkeys.magic);
    const support = JSON.parse(monkeys.support);

    return (
        <>
            <Header title="Monkeys" />
            <MainContainer>
                <PageTitle title="Monkeys" />
                <MonkeysGrid primary={primary} military={military} magic={magic} support={support} />
            </MainContainer>
            <FixedRightButtons />
        </>
    );
}

export async function getStaticProps(context) {
    let primary = [], military = [], magic = [], support = [];
    let monkeys = await dataSources().monkeysAPI.getAllMonkeys();

    monkeys.forEach(monkey => {
        if (monkey.type === "Primary") {
            primary.push(monkey);
        } else if (monkey.type === "Military") {
            military.push(monkey);
        } else if (monkey.type === "Magic") {
            magic.push(monkey);
        } else  {
            support.push(monkey);
        }
    });
    return {
        props: {
            monkeys: {
                "primary": JSON.stringify(primary),
                "military": JSON.stringify(military),
                "magic": JSON.stringify(magic),
                "support": JSON.stringify(support)
            }
        }
    }
}

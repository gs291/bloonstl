import {dataSources} from "../lib/mysql/db";
import MonkeysGrid from "../components/monkeys/MonkeysGrid";


export default function Monkeys({ monkeys }) {
    const primary = JSON.parse(monkeys.primary);
    const military = JSON.parse(monkeys.military);
    const magic = JSON.parse(monkeys.magic);
    const support = JSON.parse(monkeys.support);

    return (
        <>
            <MonkeysGrid primary={primary} military={military} magic={magic} support={support} />
        </>
    );
}

export async function getStaticProps(context) {
    let monkeys = await dataSources().monkeysAPI.getAllMonkeys();

    let primary = [], military = [], magic = [], support = [];
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

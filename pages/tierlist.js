import { dataSources } from "../lib/mysql/db";

import Page from "../components/Page";
import FilterGrid from "../components/filter-grid/FilterGrid";

export default function TierList({ monkeys } ) {
    monkeys = JSON.parse(monkeys);
    return (
        <>
            <Page title="Tier List">
                <FilterGrid monkeys={monkeys}/>
            </Page>
        </>
    );
}

export async function getStaticProps(context) {
    let monkeys = await dataSources().monkeysAPI.getAllMonkeys();
    let abilities = await dataSources().abilitiesAPI.getAllAbilities();

    let abilitiesByMonkeys = [];

    if (abilities) {
        while (abilities.length > 0) {
            abilitiesByMonkeys.push(abilities.splice(0, 15));
        }
    }

    if (monkeys && abilitiesByMonkeys) {
        monkeys = monkeys.map((monkey, idx) => ({ ...monkey, abilities: abilitiesByMonkeys[idx] }));
    }

    return {
        props: {
            monkeys: JSON.stringify(monkeys)
        }
    }
}
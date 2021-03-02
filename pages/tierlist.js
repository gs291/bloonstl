import { dataSources } from "../lib/mysql/db";

import Page from "../components/Page";

export default function TierList({ monkeys } ) {
    monkeys = JSON.parse(monkeys);

    return (
        <>
            <Page title="Tier List">
                <div>Tier List</div>
            </Page>
        </>
    );
}

export async function getStaticProps(context) {
    const monkeys = await dataSources().monkeysAPI.getAllMonkeys();

    return {
        props: { monkeys: JSON.stringify(monkeys) }
    }
}
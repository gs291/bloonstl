import mysql from "serverless-mysql";

import TowerAPI from "../graphql/datasources/towers";
import HeroesAPI from "../graphql/datasources/heroes";
import MonkeysAPI from "../graphql/datasources/monkeys";
import PatchesAPI from "../graphql/datasources/patches";
import AbilitiesAPI from "../graphql/datasources/abilities";

import patches, {patchVersions} from "../utils/patches";

const db = mysql({
    client: 'mysql',
    version: '5.7',
    config: {
        host : process.env.MYSQL_HOST,
        port: process.env.MYSQL_PORT,
        user : process.env.MYSQL_USERNAME,
        password : process.env.MYSQL_PASSWORD,
        database : process.env.MYSQL_DATABASE
    }
});

async function executeQuery({ query, values }) {
    try {
        const results = await db.query(query, values);
        await db.end();
        return results;
    } catch (error) {
        return { error };
    }
}

export const dataSources = () => ({
    monkeysAPI: new MonkeysAPI({ executeQuery }),
    heroesAPI: new HeroesAPI({ executeQuery }),
    towersAPI: new TowerAPI({ executeQuery }),
    abilitiesAPI: new AbilitiesAPI({ executeQuery }),
    patchesAPI: new PatchesAPI({executeQuery, patches, patchVersions})
});

export const context = () => {
    return {};
}

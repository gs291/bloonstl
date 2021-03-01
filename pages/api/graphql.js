import mysql from "serverless-mysql";
import { ApolloServer } from 'apollo-server-micro';

import MonkeysAPI from "../../lib/datasources/monkeys";
import HeroesAPI from "../../lib/datasources/heroes";
import AbilitiesAPI from "../../lib/datasources/abilities";

import typeDefs from "../../lib/graphql/schema";
import resolvers from "../../lib/graphql/resolvers";

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

const dataSources = () => ({
    monkeysAPI: new MonkeysAPI({ executeQuery }),
    heroesAPI: new HeroesAPI({ executeQuery }),
    abilitiesAPI: new AbilitiesAPI({ executeQuery }),
});

const context = () => {
    return {};
}

const apolloServer = new ApolloServer(
    {
        typeDefs,
        resolvers,
        dataSources,
        context
    });

export const config = {
    api: {
        bodyParser: false,
    },
}

export default apolloServer.createHandler({ path: '/api/graphql' });

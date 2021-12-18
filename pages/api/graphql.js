import Cors from "micro-cors";
import {ApolloServer} from "apollo-server-micro";
import { ApolloServerPluginLandingPageLocalDefault,
    ApolloServerPluginLandingPageProductionDefault
} from "apollo-server-core";

import typeDefs from "../../lib/graphql/schema";
import resolvers from "../../lib/graphql/resolvers";
import {dataSources, context} from "../../lib/mysql/db";

const apolloServer = new ApolloServer(
    {
        typeDefs,
        resolvers,
        dataSources,
        context,
        plugins: [
            process.env.NODE_ENV === 'production' ?
                ApolloServerPluginLandingPageProductionDefault({ footer: false }) :
                ApolloServerPluginLandingPageLocalDefault({ footer: false })
        ]
    });

const cors = Cors({
    origin: "*"
});

export const config = {
    api: {
        bodyParser: false,
    },
};

const startServer = apolloServer.start();
export default cors( async (req, res) => {
    if (req.method === 'OPTIONS') {
        res.end();
        return false;
    }

    await startServer;
    return apolloServer.createHandler({
        path: '/api/graphql',
    })(req, res);
});

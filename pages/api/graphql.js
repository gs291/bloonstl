import Cors from "micro-cors";
import {ApolloServer} from "apollo-server-micro";

import typeDefs from "../../lib/graphql/schema";
import resolvers from "../../lib/graphql/resolvers";
import {dataSources, context} from "../../lib/mysql/db";

const apolloServer = new ApolloServer(
    {
        typeDefs,
        resolvers,
        dataSources,
        context
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

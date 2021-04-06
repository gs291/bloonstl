import { ApolloServer } from 'apollo-server-micro';

import typeDefs from "../../lib/graphql/schema";
import resolvers from "../../lib/graphql/resolvers";
import { dataSources, context } from "../../lib/mysql/db";

const apolloServer = new ApolloServer(
    {
        typeDefs,
        resolvers,
        dataSources,
        context,
        introspection: true,
        playground: true,
    });

export const config = {
    api: {
        bodyParser: false,
    },
}

export default apolloServer.createHandler({ path: '/api/graphql' });

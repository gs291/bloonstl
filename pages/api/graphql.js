
import { ApolloServer } from 'apollo-server-micro';

import { dataSources, context } from "../../lib/mysql/db";
import typeDefs from "../../lib/graphql/schema";
import resolvers from "../../lib/graphql/resolvers";


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

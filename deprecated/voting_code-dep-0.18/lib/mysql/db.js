import VoteAPI from "../graphql/datasources/vote";

export const dataSources = () => ({
    voteAPI: new VoteAPI({ executeQuery })
});


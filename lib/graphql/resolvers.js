import {getAllMonkeysFull, getAllHeroesFull, getHeroFull, getMonkeyFull} from "./resolversHelperFunctions";

export default {
    Query: {
        monkeys: (_, __, { dataSources }) => getAllMonkeysFull(dataSources),
        monkeyById: (_, { id }, { dataSources }) => getMonkeyFull(dataSources, {id}),
        monkeyByName:  (_, { name }, { dataSources }) => getMonkeyFull(dataSources, {name}),

        heroes: (_, __, { dataSources }) => getAllHeroesFull(dataSources),
        heroById: (_, { id }, { dataSources }) => getHeroFull(dataSources, {id}),
        heroByName: (_, { name }, { dataSources }) => getHeroFull(dataSources, {name}),
    },
    Mutation: {
        addVote: (_, { vote }, { dataSources }) => dataSources.voteAPI.addVote({vote})
    }
};

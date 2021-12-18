import {
    getAllMonkeysFull,
    getAllHeroesFull,
    getHeroFull,
    getMonkeyFull,
    getPatchByVersion
} from "./resolversHelperFunctions";

export default {
    Query: {
        monkeys: (_, __, { dataSources }) => getAllMonkeysFull(dataSources),
        monkeyById: (_, { id }, { dataSources }) => getMonkeyFull(dataSources, {id}),
        monkeyByName:  (_, { name }, { dataSources }) => getMonkeyFull(dataSources, {name}),

        heroes: (_, __, { dataSources }) => getAllHeroesFull(dataSources),
        heroById: (_, { id }, { dataSources }) => getHeroFull(dataSources, {id}),
        heroByName: (_, { name }, { dataSources }) => getHeroFull(dataSources, {name}),

        patchByVersion: (_, { version }, { dataSources }) => getPatchByVersion(dataSources, {version}),
    }
};

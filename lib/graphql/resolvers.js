export default {
    Query: {
        monkeyByName:  (_, { name }, { dataSources }) => dataSources.monkeysAPI.getMonkeyByName({ name: name }),

        monkeys: (_, __, { dataSources }) => dataSources.monkeysAPI.getAllMonkeys(),
        monkeysByType: (_, { type }, { dataSources }) => dataSources.monkeysAPI.getMonkeysByType({ type: type }),

        towers: (_, __, { dataSources }) => dataSources.towersAPI.getTowers(),

        heroes: (_, __, { dataSources }) => dataSources.heroesAPI.getAllHeroes(),
        heroByName: (_, { name }, { dataSources }) => dataSources.heroesAPI.getHeroByName({ name: name }),

        monkeyAbilitiesByMonkeyId: (_, { mid }, { dataSources }) => dataSources.abilitiesAPI.getAbilitiesByMonkeyId({ mid }),
        heroAbilitiesByHeroId: (_, { hid }, { dataSources }) => dataSources.abilitiesAPI.getAbilitiesByHeroId({ hid })
    },
};

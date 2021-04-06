export default {
    Query: {
        monkeys: (_, __, { dataSources }) => dataSources.monkeysAPI.getAllMonkeys(),
        monkey:  (_, { name }, { dataSources }) => dataSources.monkeysAPI.getMonkeyByName({ name: name }),
        monkeyTypes: (_, { type }, { dataSources }) => dataSources.monkeysAPI.getMonkeysByType({ type: type }),

        towers: (_, __, { dataSources }) => dataSources.towersAPI.getTowers(),

        heroes: (_, __, { dataSources }) => dataSources.heroesAPI.getAllHeroes(),
        hero: (_, { name }, { dataSources }) => dataSources.heroesAPI.getHeroByName({ name: name }),

        monkeyAbilities: (_, { mid }, { dataSources }) => dataSources.abilitiesAPI.getAbilitiesByMonkeyId({ mid }),
        heroAbilities: (_, { hid }, { dataSources }) => dataSources.abilitiesAPI.getAbilitiesByHeroId({ hid })
    },
};

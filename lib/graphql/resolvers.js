export default {
    Query: {
        monkeys: (_, __, { dataSources }) => dataSources.monkeysAPI.getAllMonkeys(),
        monkey:  (_, { name }, { dataSources }) => dataSources.monkeysAPI.getMonkeyByName({ name: name }),
        monkeyTypes: (_, { type }, { dataSources }) => dataSources.monkeysAPI.getMonkeysByType({ type: type }),

        towers: (_, __, { dataSources }) => dataSources.towersAPI.getTowers(),

        heroes: (_, __, { dataSources }) => dataSources.heroesAPI.getAllHeroes(),
        hero: (_, { name }, { dataSources }) => dataSources.heroesAPI.getHeroByName({ name: name }),

        monkey_abilities: (_, { mid }, { dataSources }) => dataSources.abilitiesAPI.getAbilitiesByMonkeyId({ mid }),
        hero_abilities: (_, { hid }, { dataSources }) => dataSources.abilitiesAPI.getAbilitiesByHeroId({ hid })
    },

    // Monkey: {
    //     abilities: (monkey, _, { dataSources }) => dataSources.abilitiesAPI.getAbilitiesByMonkeyId({ monkeyID: monkey.id })
    // },
    //
    // Hero: {
    //     abilities: (hero, _, { dataSources }) => dataSources.abilitiesAPI.getAbilitiesByMonkeyId({ monkeyID: hero.id })
    // }
};

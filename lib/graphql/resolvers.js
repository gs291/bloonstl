export default {
    Query: {
        monkeys: (_, __, { dataSources }) => dataSources.monkeysAPI.getAllMonkeys(),
        monkey:  (_, { id }, { dataSources }) => dataSources.monkeysAPI.getMonkeyById({ monkeyID: id }),
        monkeyTypes: (_, { type }, { dataSources }) => dataSources.monkeysAPI.getMonkeysByType({ type: type }),

        heroes: (_, __, { dataSources }) => dataSources.heroesAPI.getAllHeroes(),
        hero: (_, { id }, { dataSources }) => dataSources.heroesAPI.getHeroById({ heroID: id }),
    },

    // Monkey: {
    //     abilities: (monkey, _, { dataSources }) => dataSources.abilitiesAPI.getAbilitiesByMonkeyId({ monkeyID: monkey.id })
    // },
    //
    // Hero: {
    //     abilities: (hero, _, { dataSources }) => dataSources.abilitiesAPI.getAbilitiesByMonkeyId({ monkeyID: hero.id })
    // }
};

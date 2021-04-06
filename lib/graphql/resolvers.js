export default {
    Query: {
        monkeys: (_, __, { dataSources }) => dataSources.monkeysAPI.getAllMonkeys(),
        monkeysWithTier: (_, __, { dataSources }) => dataSources.monkeysAPI.getAllMonkeysWithTiers(),
        monkey:  (_, { name }, { dataSources }) => dataSources.monkeysAPI.getMonkeyByName({ name: name }),
        monkeyTypes: (_, { type }, { dataSources }) => dataSources.monkeysAPI.getMonkeysByType({ type: type }),

        towers: (_, __, { dataSources }) => dataSources.towersAPI.getTowers(),

        heroes: (_, __, { dataSources }) => dataSources.heroesAPI.getAllHeroes(),
        heroesWithTier: (_, __, { dataSources }) => dataSources.heroesAPI.getAllHeroesWithTiers(),
        hero: (_, { name }, { dataSources }) => dataSources.heroesAPI.getHeroByName({ name: name }),

        monkey_abilities: (_, { mid }, { dataSources }) => dataSources.abilitiesAPI.getAbilitiesByMonkeyId({ mid }),
        monkeyAbilitiesRanksWithInfo: (_, __, { dataSources }) => dataSources.abilitiesAPI.getAllMonkeyAbilityRanksWithInfo(),
        monkeyByNameAbilitiesRanksWithInfo: (_, { name }, { dataSources }) => dataSources.abilitiesAPI.getMonkeyByNameAbilityRanksWithInfo({ name: name }),
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

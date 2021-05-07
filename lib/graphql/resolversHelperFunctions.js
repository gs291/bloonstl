export const getAllMonkeysFull = async (ds) => {
    let monkeys = await ds.monkeysAPI.getAllMonkeys();
    const abilities = await ds.abilitiesAPI.getAllAbilities();
    const abilityTiers = await ds.abilitiesAPI.getAllMonkeyAbilityRanksWithInfo();
    const towerTiers = await ds.towersAPI.getAllTowerTiers();


    monkeys = monkeys.map(monkey => {
        monkey.abilities = [];
        monkey.ability_tiers = [];
        abilities.forEach(ability => {
            if (ability.tm_id !== null && ability.tm_id === monkey.id) {
                monkey.abilities.push(ability);
            }
        });

        abilityTiers.forEach(abilityTier => {
            if (abilityTier.m_id !== null && abilityTier.m_id === monkey.id) {
                monkey.ability_tiers.push(abilityTier);
            }
        });

        towerTiers.forEach(tier => {
            if (tier.monkey_id !== null && tier.monkey_id === monkey.id) {
                monkey.tier = tier;
            }
        })

        return monkey;
    });

    return monkeys;
}

export const getAllHeroesFull = async (ds) => {
    let heroes = await ds.heroesAPI.getAllHeroes();
    const abilities = await ds.abilitiesAPI.getAllAbilities();
    const towerTiers = await ds.towersAPI.getAllTowerTiers();


    heroes = heroes.map(hero => {
        hero.abilities = [];
        abilities.forEach(ability => {
            if (ability.th_id !== null && ability.th_id === hero.id) {
                hero.abilities.push(ability);
            }
        });

        towerTiers.forEach(tier => {
            if (tier.hero_id !== null && tier.hero_id === hero.id) {
                hero.tier = tier;
            }
        })

        return hero;
    });

    return heroes;
}

export const getMonkeyFull = async (ds, {id, name}) => {
    if (id) {
        let monkey = await ds.monkeysAPI.getMonkeyById({id});
        if (!monkey.length) { return {}; }

        const abilities = await ds.abilitiesAPI.getAbilitiesByMonkeyId({id});
        const abilityTiers = await ds.abilitiesAPI.getAbilityTiersWithInfoByMonkeyId({id});
        const towerTier = await ds.towersAPI.getTowerTierByMonkeyId({id});

        monkey.abilities = abilities;
        monkey.ability_tiers = abilityTiers;
        monkey.tier = towerTier;

        return monkey;
    }
    let monkey = await ds.monkeysAPI.getMonkeyByName({name});
    if (!monkey.length) { return {}; }

    const abilities = await ds.abilitiesAPI.getAbilitiesByMonkeyName({name});
    const abilityTiers = await ds.abilitiesAPI.getAbilityTiersWithInfoByMonkeyName({name});
    const towerTier = await ds.towersAPI.getTowerTierByMonkeyName({name});

    monkey.abilities = abilities;
    monkey.ability_tiers = abilityTiers;
    monkey.tier = towerTier;

    return monkey;
}

export const getHeroFull = async (ds, {id, name}) => {

    if (id) {
        let hero = await ds.heroesAPI.getHeroById({id});
        if (!hero.length) { return {}; }

        const abilities = await ds.abilitiesAPI.getAbilitiesByHeroId({id});
        const towerTier = await ds.towersAPI.getTowerTierByHeroId({id});

        hero.abilities = abilities;
        hero.tier = towerTier;

        return hero;
    }
    let hero = await ds.heroesAPI.getHeroByName({name});
    if (!hero.length) { return {}; }

    const abilities = await ds.abilitiesAPI.getAbilitiesByHeroName({name});
    const towerTier = await ds.towersAPI.getTowerTierByHeroName({name});

    hero.abilities = abilities;
    hero.tier = towerTier;

    return hero;
}
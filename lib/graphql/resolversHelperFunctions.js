export const getAllMonkeysFull = async (ds) => {
    let monkeys = await ds.monkeysAPI.getAllMonkeys();
    const abilities = await ds.abilitiesAPI.getAllAbilities();
    const abilityTiers = await ds.abilitiesAPI.getAllMonkeyAbilityTiersWithInfo();
    const towerTiers = await ds.towersAPI.getAllTowerTiers();
    const towerStats = await ds.towersAPI.getAllMonkeyTowerStats();


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

        let i = 0;
        for (i; i < towerTiers.length; i++) {
            if (towerTiers[i].monkey_id !== null && towerTiers[i].monkey_id === monkey.id){
                monkey.tier = towerTiers[i];
                break;
            }
        }

        i = 0;
        for (i; i < towerStats.length; i++) {
            if (towerStats[i].monkey_id !== null && towerStats[i].monkey_id === monkey.id){
                monkey.stats = towerStats[i];
                break;
            }
        }

        return monkey;
    });

    return monkeys;
}

export const getAllHeroesFull = async (ds) => {
    let heroes = await ds.heroesAPI.getAllHeroes();
    const abilities = await ds.abilitiesAPI.getAllAbilities();
    const towerTiers = await ds.towersAPI.getAllTowerTiers();
    const towerStats = await ds.towersAPI.getAllHeroTowerStats();


    heroes = heroes.map(hero => {
        hero.abilities = [];
        abilities.forEach(ability => {
            if (ability.th_id !== null && ability.th_id === hero.id) {
                hero.abilities.push(ability);
            }
        });

        let i = 0;
        for (i; i < towerTiers.length; i++) {
            if (towerTiers[i].hero_id !== null && towerTiers[i].hero_id === hero.id){
                hero.tier = towerTiers[i];
                break;
            }
        }

        i = 0;
        for (i; i < towerStats.length; i++) {
            if (towerStats[i].hero_id !== null && towerStats[i].hero_id === hero.id){
                hero.stats = towerStats[i];
                break;
            }
        }

        return hero;
    });

    return heroes;
}

export const getMonkeyFull = async (ds, {id, name}) => {
    if (id > 0) {
        let monkey = await ds.monkeysAPI.getMonkeyById({id});

        const abilities = await ds.abilitiesAPI.getAbilitiesByMonkeyId({id});
        const abilityTiers = await ds.abilitiesAPI.getAbilityTiersWithInfoByMonkeyId({id});
        const towerTier = await ds.towersAPI.getTowerTierByMonkeyId({id});
        const towerStats = await ds.towersAPI.getTowerStatsByMonkeyId({id});

        monkey.abilities = abilities;
        monkey.ability_tiers = abilityTiers;
        monkey.tier = towerTier;
        monkey.stats = towerStats;

        return monkey;
    }
    let monkey = await ds.monkeysAPI.getMonkeyByName({name});

    const abilities = await ds.abilitiesAPI.getAbilitiesByMonkeyName({name});
    const abilityTiers = await ds.abilitiesAPI.getAbilityTiersWithInfoByMonkeyName({name});
    const towerTier = await ds.towersAPI.getTowerTierByMonkeyName({name});
    const towerStats = await ds.towersAPI.getTowerStatsByMonkeyName({name});

    monkey.abilities = abilities;
    monkey.ability_tiers = abilityTiers;
    monkey.tier = towerTier;
    monkey.stats = towerStats;

    return monkey;
}

export const getHeroFull = async (ds, {id, name}) => {

    if (id) {
        let hero = await ds.heroesAPI.getHeroById({id});
        if (!hero.length) { return {}; }

        const abilities = await ds.abilitiesAPI.getAbilitiesByHeroId({id});
        const towerTier = await ds.towersAPI.getTowerTierByHeroId({id});
        const towerStats = await ds.towersAPI.getTowerStatsByHeroId({id});

        hero.abilities = abilities;
        hero.tier = towerTier;
        hero.stats = towerStats;

        return hero;
    }
    let hero = await ds.heroesAPI.getHeroByName({name});
    if (!hero.length) { return {}; }

    const abilities = await ds.abilitiesAPI.getAbilitiesByHeroName({name});
    const towerTier = await ds.towersAPI.getTowerTierByHeroName({name});
    const towerStats = await ds.towersAPI.getTowerStatsByHeroName({name});

    hero.abilities = abilities;
    hero.tier = towerTier;
    hero.stats = towerStats;

    return hero;
}

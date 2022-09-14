const getTowers = `
SELECT * FROM Towers
`;

const getAllTowerTiers = `
SELECT TowerTiers.id, T.monkey_id, T.hero_id, tier FROM TowerTiers
    JOIN Towers T on TowerTiers.tower_id = T.id
ORDER BY T.hero_id, T.monkey_id;
`;

const getTowerTierByMonkeyId = `
SELECT TowerTiers.id, T.monkey_id, tier FROM TowerTiers
    JOIN Towers T on TowerTiers.tower_id = T.id
WHERE T.monkey_id = ?
ORDER BY T.hero_id, T.monkey_id;
`;

const getTowerTierByMonkeyName = `
SELECT TowerTiers.id, T.monkey_id, tier FROM TowerTiers
    JOIN Towers T on TowerTiers.tower_id = T.id
    JOIN Monkeys M on T.monkey_id = M.id
WHERE M.name = ?
ORDER BY T.hero_id, T.monkey_id;
`;

const getTowerTierByHeroId = `
SELECT TowerTiers.id, T.monkey_id, tier FROM TowerTiers
    JOIN Towers T on TowerTiers.tower_id = T.id
WHERE T.hero_id = ?
ORDER BY T.hero_id, T.monkey_id;
`;

const getTowerTierByHeroName = `
SELECT TowerTiers.id, T.hero_id, tier FROM TowerTiers
    JOIN Towers T on TowerTiers.tower_id = T.id
    JOIN Heroes H on T.hero_id = H.id
WHERE H.name = ?
ORDER BY T.hero_id, T.monkey_id;
`;

const getTowerIdByMonkeyName = `
SELECT T.id, Monkeys.name FROM Monkeys
    JOIN Towers T on T.monkey_id = Monkeys.id
WHERE Monkeys.name = ?
`;

const getTowerIdByHeroName = `
SELECT T.id, Heroes.name FROM Heroes
    JOIN Towers T on T.hero_id = Heroes.id
WHERE Heroes.name = ?
`;

const getTowerTierInfoByHeroName = `
SELECT TowerTiersInfo.id, T.hero_id, pros, cons FROM TowerTiersInfo
    JOIN Towers T on TowerTiersInfo.tower_id = T.id
    JOIN Heroes H on T.hero_id = H.id
WHERE H.name = ?
ORDER BY T.hero_id, T.monkey_id;
`;

const getAllMonkeyTowerStats = `
SELECT TowerStats.id AS tower_stats_id, T.monkey_id,  
    \`range\`, pierce, damage,
    boss_damage, camo_damage, crit_damage, stun_damage, status_damage,
    moab_damage, fortified_moab_damage, ceramic_damage, fortified_damage, lead_damage, fortified_lead_damage,
    projectile_count, attack_speed, income, cost, duration, note, footprint, hotkey, damage_type, cooldown, crit_occurance, delay
FROM TowerStats
    JOIN Towers T on TowerStats.tower_id = T.id
WHERE T.monkey_id IS NOT NULL;
`;

const getAllHeroTowerStats = `
SELECT TowerStats.id AS tower_stats_id, T.hero_id,  
    \`range\`, pierce, damage,
    boss_damage, camo_damage, crit_damage, stun_damage, status_damage,
    moab_damage, fortified_moab_damage, ceramic_damage, fortified_damage, lead_damage, fortified_lead_damage,
    projectile_count, attack_speed, income, cost, duration, note, footprint, hotkey, damage_type, cooldown, crit_occurance, delay
FROM TowerStats
    JOIN Towers T on TowerStats.tower_id = T.id
WHERE T.hero_id IS NOT NULL;
`;

const getTowerStatsByMonkeyId = `
SELECT TowerStats.id AS tower_stats_id, 
    \`range\`, pierce, damage,
    boss_damage, camo_damage, crit_damage, stun_damage, status_damage,
    moab_damage, fortified_moab_damage, ceramic_damage, fortified_damage, lead_damage, fortified_lead_damage,
    projectile_count, attack_speed, income, cost, duration, note, footprint, hotkey, damage_type, cooldown, crit_occurance, delay
FROM TowerStats
    JOIN Towers T on TowerStats.tower_id = T.id
WHERE T.monkey_id = ?;
`;

const getTowerStatsByHeroId = `
SELECT TowerStats.id AS tower_stats_id, 
    \`range\`, pierce, damage,
    boss_damage, camo_damage, crit_damage, stun_damage, status_damage,
    moab_damage, fortified_moab_damage, ceramic_damage, fortified_damage, lead_damage, fortified_lead_damage,
    projectile_count, attack_speed, income, cost, duration, note, footprint, hotkey, damage_type, cooldown, crit_occurance, delay
FROM TowerStats
    JOIN Towers T on TowerStats.tower_id = T.id
WHERE T.hero_id = ?;
`;

const getTowerStatsByMonkeyName = `
SELECT TowerStats.id AS tower_stats_id, 
    \`range\`, pierce, damage,
    boss_damage, camo_damage, crit_damage, stun_damage, status_damage, 
    moab_damage, fortified_moab_damage, ceramic_damage, fortified_damage, lead_damage, fortified_lead_damage, 
    projectile_count, attack_speed, income, cost, duration, note, footprint, hotkey, damage_type, cooldown, crit_occurance, delay
FROM TowerStats
    JOIN Towers T on TowerStats.tower_id = T.id
    JOIN Monkeys M on T.monkey_id = M.id
WHERE M.name = ?;
`;

const getTowerStatsByHeroName = `
SELECT TowerStats.id AS tower_stats_id, 
    \`range\`, pierce, damage,
    boss_damage, camo_damage, crit_damage, stun_damage, status_damage, moab_damage, 
    fortified_moab_damage, ceramic_damage, fortified_damage, lead_damage, fortified_lead_damage,
    projectile_count, attack_speed, income, cost, duration, note, footprint, hotkey, damage_type, cooldown, crit_occurance, delay
FROM TowerStats
    JOIN Towers T on TowerStats.tower_id = T.id
    JOIN Heroes H on T.hero_id = H.id
WHERE H.name = ?;
`;

const towerQueries = {
    getTowers, getAllTowerTiers,
    getTowerTierByMonkeyId, getTowerTierByMonkeyName,
    getTowerTierByHeroId, getTowerTierByHeroName,
    getTowerIdByMonkeyName, getTowerIdByHeroName,
    getTowerTierInfoByHeroName,
    getAllMonkeyTowerStats, getAllHeroTowerStats,
    getTowerStatsByMonkeyName, getTowerStatsByHeroName,
    getTowerStatsByMonkeyId, getTowerStatsByHeroId
};

export default towerQueries;
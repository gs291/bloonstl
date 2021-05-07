

const getAllAbilities = `
SELECT * FROM
    (
        SELECT Towers.id as t_id, Towers.hero_id as th_id, Towers.monkey_id as tm_id FROM Towers
    ) AS Tower
        JOIN (
        SELECT T.id as at_id, Abilities.* FROM Abilities
            JOIN Towers T on Abilities.tower_id = T.id
    ) as Abilities
WHERE Tower.t_id = Abilities.at_id
ORDER BY Tower.t_id, Abilities.upgrade_path, Abilities.upgrade_tier;   
`;

const getAbilitiesByMonkeyId = `
SELECT * FROM
    (
        SELECT T.id as mt_id, Monkeys.id as m_id FROM Monkeys
            JOIN Towers T on Monkeys.id = T.monkey_id
        WHERE Monkeys.id = ?
    ) AS Tower
        JOIN (
        SELECT T.id as at_id, Abilities.* FROM Abilities
            JOIN Towers T on Abilities.tower_id = T.id
    ) as Abilities
WHERE Tower.mt_id = Abilities.at_id
ORDER BY Tower.m_id, Abilities.upgrade_path, Abilities.upgrade_tier;
`;

const getAbilitiesByMonkeyName = `
SELECT * FROM
    (
        SELECT T.id as mt_id, Monkeys.id as m_id FROM Monkeys
            JOIN Towers T on Monkeys.id = T.monkey_id
        WHERE Monkeys.name = ?
    ) AS Tower
        JOIN (
        SELECT T.id as at_id, Abilities.* FROM Abilities
            JOIN Towers T on Abilities.tower_id = T.id
    ) as Abilities
WHERE Tower.mt_id = Abilities.at_id
ORDER BY Tower.m_id, Abilities.upgrade_path, Abilities.upgrade_tier;
`;

const getAbilitiesByHeroId = `
SELECT * FROM
    (
        SELECT T.id as ht_id, Heroes.id as h_id FROM Heroes
            JOIN Towers T on Heroes.id = T.hero_id
        WHERE Heroes.id = ?
    ) AS Tower
        JOIN (
        SELECT T.id as at_id, Abilities.* FROM Abilities
            JOIN Towers T on Abilities.tower_id = T.id
    ) as Abilities
WHERE Tower.ht_id = Abilities.at_id
ORDER BY Tower.h_id, Abilities.upgrade_tier;
`;

const getAbilitiesByHeroName = `
SELECT * FROM
    (
        SELECT T.id as ht_id, Heroes.id as h_id FROM Heroes
            JOIN Towers T on Heroes.id = T.hero_id
        WHERE Heroes.name = ?
    ) AS Tower
        JOIN (
        SELECT T.id as at_id, Abilities.* FROM Abilities
            JOIN Towers T on Abilities.tower_id = T.id
    ) as Abilities
WHERE Tower.ht_id = Abilities.at_id
ORDER BY Tower.h_id, Abilities.upgrade_tier;
`;

const getAllAbilityTiersWithInfo = `
SELECT * FROM
    (
        SELECT Monkeys.id as m_id FROM Monkeys
            JOIN Towers T on Monkeys.id = T.monkey_id
    ) AS Tower
    JOIN (
        SELECT T.id as ar_t_id, 
               AbilityTiers.id as id, 
               AbilityTiers.tier, 
               AbilityTiers.top_path, 
               AbilityTiers.middle_path, 
               AbilityTiers.bottom_path,
               AbilityTiers.votes
        FROM AbilityTiers
            JOIN Towers T on AbilityTiers.tower_id = T.id
    ) as AbilitiesR
    JOIN (
        SELECT 
               AR.id as ar_r_id, 
               AbilityTiersInfo.id as ari_id,
               AbilityTiersInfo.rank_id, 
               AbilityTiersInfo.pros,
               AbilityTiersInfo.cons
        FROM AbilityTiersInfo
            JOIN AbilityTiers AR on AbilityTiersInfo.rank_id = AR.id
    ) as AbilitiesRI
WHERE Tower.m_id = AbilitiesR.ar_t_id
AND AbilitiesRI.rank_id = AbilitiesR.id;
`;

const getAbilityTiersWithInfoByMonkeyId = `
SELECT * FROM
    (
        SELECT Monkeys.id as m_id FROM Monkeys
            JOIN Towers T on Monkeys.id = T.monkey_id
        WHERE Monkeys.id = ?
    ) AS Tower
    JOIN (
        SELECT T.id as ar_t_id, 
               AbilityTiers.id as ar_id, 
               AbilityTiers.tier, 
               AbilityTiers.top_path, 
               AbilityTiers.middle_path, 
               AbilityTiers.bottom_path,
               AbilityTiers.votes
        FROM AbilityTiers
            JOIN Towers T on AbilityTiers.tower_id = T.id
    ) as AbilitiesR
    JOIN (
        SELECT 
               AR.id as ar_r_id, 
               AbilityTiersInfo.id as ari_id,
               AbilityTiersInfo.rank_id, 
               AbilityTiersInfo.pros,
               AbilityTiersInfo.cons
        FROM AbilityTiersInfo
            JOIN AbilityTiers AR on AbilityTiersInfo.rank_id = AR.id
    ) as AbilitiesRI
WHERE Tower.m_id = AbilitiesR.ar_t_id
AND AbilitiesRI.rank_id = AbilitiesR.ar_id;
`;

const getAbilityTiersWithInfoByMonkeyName = `
SELECT * FROM
    (
        SELECT Monkeys.id as m_id FROM Monkeys
            JOIN Towers T on Monkeys.id = T.monkey_id
        WHERE Monkeys.name = ?
    ) AS Tower
    JOIN (
        SELECT T.id as ar_t_id, 
               AbilityTiers.id as ar_id, 
               AbilityTiers.tier, 
               AbilityTiers.top_path, 
               AbilityTiers.middle_path, 
               AbilityTiers.bottom_path,
               AbilityTiers.votes
        FROM AbilityTiers
            JOIN Towers T on AbilityTiers.tower_id = T.id
    ) as AbilitiesR
    JOIN (
        SELECT 
               AR.id as ar_r_id, 
               AbilityTiersInfo.id as ari_id,
               AbilityTiersInfo.rank_id, 
               AbilityTiersInfo.pros,
               AbilityTiersInfo.cons
        FROM AbilityTiersInfo
            JOIN AbilityTiers AR on AbilityTiersInfo.rank_id = AR.id
    ) as AbilitiesRI
WHERE Tower.m_id = AbilitiesR.ar_t_id
AND AbilitiesRI.rank_id = AbilitiesR.ar_id;
`;


export default {
    getAllAbilities, getAllAbilityTiersWithInfo,
    getAbilitiesByMonkeyId, getAbilitiesByMonkeyName,
    getAbilitiesByHeroId, getAbilitiesByHeroName,
    getAbilityTiersWithInfoByMonkeyId, getAbilityTiersWithInfoByMonkeyName
};

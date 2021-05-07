

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

const getAllAbilityRanksWithInfo = `
SELECT * FROM
    (
        SELECT Monkeys.id as m_id FROM Monkeys
            JOIN Towers T on Monkeys.id = T.monkey_id
    ) AS Tower
    JOIN (
        SELECT T.id as ar_t_id, 
               AbilityRanks.id as id, 
               AbilityRanks.tier, 
               AbilityRanks.top_path, 
               AbilityRanks.middle_path, 
               AbilityRanks.bottom_path,
               AbilityRanks.votes
        FROM AbilityRanks
            JOIN Towers T on AbilityRanks.tower_id = T.id
    ) as AbilitiesR
    JOIN (
        SELECT 
               AR.id as ar_r_id, 
               AbilityRanksInfo.id as ari_id,
               AbilityRanksInfo.rank_id, 
               AbilityRanksInfo.pros,
               AbilityRanksInfo.cons
        FROM AbilityRanksInfo
            JOIN AbilityRanks AR on AbilityRanksInfo.rank_id = AR.id
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
               AbilityRanks.id as ar_id, 
               AbilityRanks.tier, 
               AbilityRanks.top_path, 
               AbilityRanks.middle_path, 
               AbilityRanks.bottom_path,
               AbilityRanks.votes
        FROM AbilityRanks
            JOIN Towers T on AbilityRanks.tower_id = T.id
    ) as AbilitiesR
    JOIN (
        SELECT 
               AR.id as ar_r_id, 
               AbilityRanksInfo.id as ari_id,
               AbilityRanksInfo.rank_id, 
               AbilityRanksInfo.pros,
               AbilityRanksInfo.cons
        FROM AbilityRanksInfo
            JOIN AbilityRanks AR on AbilityRanksInfo.rank_id = AR.id
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
               AbilityRanks.id as ar_id, 
               AbilityRanks.tier, 
               AbilityRanks.top_path, 
               AbilityRanks.middle_path, 
               AbilityRanks.bottom_path,
               AbilityRanks.votes
        FROM AbilityRanks
            JOIN Towers T on AbilityRanks.tower_id = T.id
    ) as AbilitiesR
    JOIN (
        SELECT 
               AR.id as ar_r_id, 
               AbilityRanksInfo.id as ari_id,
               AbilityRanksInfo.rank_id, 
               AbilityRanksInfo.pros,
               AbilityRanksInfo.cons
        FROM AbilityRanksInfo
            JOIN AbilityRanks AR on AbilityRanksInfo.rank_id = AR.id
    ) as AbilitiesRI
WHERE Tower.m_id = AbilitiesR.ar_t_id
AND AbilitiesRI.rank_id = AbilitiesR.ar_id;
`;


export default {
    getAllAbilities, getAllAbilityRanksWithInfo,
    getAbilitiesByMonkeyId, getAbilitiesByMonkeyName,
    getAbilitiesByHeroId, getAbilitiesByHeroName,
    getAbilityTiersWithInfoByMonkeyId, getAbilityTiersWithInfoByMonkeyName
};

const getAllMonkeys = `
SELECT * FROM Monkeys
`;

const getAllMonkeysWithTiers = `
SELECT * FROM
    (
        SELECT T.id as t_id, Monkeys.id as m_id, Monkeys.* FROM Monkeys
        JOIN Towers T on Monkeys.id = T.monkey_id
    ) AS Tower
    JOIN (
        SELECT T.id as tr_t_id, TowerTiers.id as tr_id, TowerTiers.* FROM TowerTiers
        JOIN Towers T on TowerTiers.tower_id = T.id
    ) as TowerTiers
WHERE Tower.t_id = TowerTiers.tr_t_id
ORDER BY Tower.name
`;

const getMonkeyById = `
SELECT * FROM Monkeys WHERE id = ?
`;

const getMonkeyByName = `
SELECT * FROM Monkeys WHERE name = ?
`;

const getMonkeysByType = `
SELECT * FROM Monkeys WHERE type = ?
`;

const getAllMonkeysForIndexPage = `
SELECT * FROM
    (
        SELECT Monkeys.id as m_id, Monkeys.name, Monkeys.type, Monkeys.filename FROM Monkeys
            JOIN Towers T on Monkeys.id = T.monkey_id
    ) AS Tower
    JOIN (
        SELECT T.id as ar_t_id, 
               AT.id as id, 
               AT.top_path, 
               AT.middle_path, 
               AT.bottom_path
        FROM AbilityTiers AT
        JOIN Towers T on AT.tower_id = T.id
        JOIN (
            SELECT 
                MIN(id) id,
                tower_id
            FROM AbilityTiers
            WHERE AbilityTiers.tier='s'
            GROUP BY tower_id     
        ) filteredAT ON AT.id = filteredAT.id AND AT.tower_id = filteredAT.tower_id
        WHERE AT.tier = 's'
    ) as AbilitiesR
    JOIN (
        SELECT 
               AR.id as ar_r_id, 
               AbilityTiersInfo.id as ari_id,
               AbilityTiersInfo.tier_id, 
               AbilityTiersInfo.pros,
               AbilityTiersInfo.cons
        FROM AbilityTiersInfo
            JOIN AbilityTiers AR on AbilityTiersInfo.tier_id = AR.id
    ) as AbilitiesRI
WHERE Tower.m_id = AbilitiesR.ar_t_id
AND AbilitiesRI.tier_id = AbilitiesR.id;
`;

const monkeyQueries = {
    getAllMonkeys, getAllMonkeysWithTiers, getAllMonkeysForIndexPage,
    getMonkeyById, getMonkeyByName, getMonkeysByType
};

export default monkeyQueries;
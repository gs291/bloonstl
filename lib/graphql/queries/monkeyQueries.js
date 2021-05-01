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
        SELECT T.id as tr_t_id, TowerRanks.id as tr_id, TowerRanks.* FROM TowerRanks
        JOIN Towers T on TowerRanks.tower_id = T.id
    ) as TowerRanks
WHERE Tower.t_id = TowerRanks.tr_t_id
ORDER BY Tower.name
`;

const getMonkeyByName = `
SELECT * FROM Monkeys WHERE name = ?
`;

const getMonkeysByType = `
SELECT * FROM Monkeys WHERE type = ?
`;

export default {getAllMonkeys, getAllMonkeysWithTiers, getMonkeyByName, getMonkeysByType};
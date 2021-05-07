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

export default {
    getAllMonkeys, getAllMonkeysWithTiers,
    getMonkeyById, getMonkeyByName, getMonkeysByType
};
const getAllHeroes = `
SELECT * FROM Heroes ORDER BY name
`;

const getALlHeroesWithTiers = `
SELECT * FROM
    (
        SELECT T.id as t_id, Heroes.id as h_id, Heroes.* FROM Heroes
        JOIN Towers T on Heroes.id = T.hero_id
    ) AS Tower
    JOIN (
        SELECT T.id as tr_t_id, TowerRanks.id as tr_id, TowerRanks.* FROM TowerRanks
        JOIN Towers T on TowerRanks.tower_id = T.id
    ) as TowerRanks
WHERE Tower.t_id = TowerRanks.tr_t_id
ORDER BY Tower.name
`;

const getHeroById = `
SELECT * FROM Heroes WHERE id = ?
`;

const getHeroByName = `
SELECT * FROM Heroes WHERE name = ?
`;

export default {getAllHeroes, getALlHeroesWithTiers,
    getHeroById, getHeroByName
};
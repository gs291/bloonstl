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
        SELECT T.id as tr_t_id, TowerTiers.id as tr_id, TowerTiers.* FROM TowerTiers
        JOIN Towers T on TowerTiers.tower_id = T.id
    ) as TowerTiers
WHERE Tower.t_id = TowerTiers.tr_t_id
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
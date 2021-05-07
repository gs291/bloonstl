const getTowers = `
SELECT * FROM Towers
`;

const getAllTowerTiers = `
SELECT TowerRanks.id, T.monkey_id, T.hero_id, tier, votes FROM TowerRanks
    JOIN Towers T on TowerRanks.tower_id = T.id
ORDER BY T.hero_id, T.monkey_id;
`;

const getTowerTierByMonkeyId = `
SELECT TowerRanks.id, T.monkey_id, tier, votes FROM TowerRanks
    JOIN Towers T on TowerRanks.tower_id = T.id
WHERE T.monkey_id = ?
ORDER BY T.hero_id, T.monkey_id;
`;

const getTowerTierByMonkeyName = `
SELECT TowerRanks.id, T.monkey_id, tier, votes FROM TowerRanks
    JOIN Towers T on TowerRanks.tower_id = T.id
    JOIN Monkeys M on T.monkey_id = M.id
WHERE M.name = ?
ORDER BY T.hero_id, T.monkey_id;
`;

const getTowerTierByHeroId = `
SELECT TowerRanks.id, T.monkey_id, tier, votes FROM TowerRanks
    JOIN Towers T on TowerRanks.tower_id = T.id
WHERE T.hero_id = ?
ORDER BY T.hero_id, T.monkey_id;
`;

const getTowerTierByHeroName = `
SELECT TowerRanks.id, T.hero_id, tier, votes FROM TowerRanks
    JOIN Towers T on TowerRanks.tower_id = T.id
    JOIN Heroes H on T.hero_id = H.id
WHERE H.name = ?
ORDER BY T.hero_id, T.monkey_id;
`;

export default {
    getTowers, getAllTowerTiers,
    getTowerTierByMonkeyId, getTowerTierByMonkeyName,
    getTowerTierByHeroId, getTowerTierByHeroName
};
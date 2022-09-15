

const getAllBloons = `
SELECT * FROM Bloon
ORDER BY Bloon.id, Bloon.rbe;   
`;

const getAllBossBloons = `
SELECT * FROM Boss
ORDER BY Boss.id;   
`;

const getBloonByID = `
    SELECT * FROM Bloon
    WHERE Bloon.id = ?;
`;

const getBloonByName = `
    SELECT * FROM Bloon
    WHERE Bloon.name = ?;
`;

const getBossByID = `
    SELECT * FROM Boss
    WHERE Boss.id = ?;
`;

const getBossByName = `
    SELECT * FROM Boss
    WHERE Boss.name = ?;
`;

const bloonQueries = {
    getAllBloons, getAllBossBloons,
    getBloonByID, getBloonByName,
    getBossByID, getBossByName
}

export default bloonQueries;

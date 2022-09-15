

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
    WHERE Bloon.varName = ?;
`;

const getBossByID = `
    SELECT * FROM Boss
    WHERE Boss.id = ?;
`;

const getBossByName = `
    SELECT * FROM Boss
    WHERE Boss.varName = ?;
`;

const bloonQueries = {
    getAllBloons, getAllBossBloons,
    getBloonByID, getBloonByName,
    getBossByID, getBossByName
}

export default bloonQueries;

const { DataSource } = require('apollo-datasource');

export default class AbilitiesAPI extends DataSource {
    constructor({executeQuery}) {
        super();
        this.executeQuery = executeQuery;
    }

    async getAllAbilities() {
        try {
            const abilities = await this.executeQuery({
                query: `
SELECT * FROM
    (
        SELECT T.id as mt_id, Monkeys.id as m_id FROM Monkeys
        JOIN Towers T on Monkeys.id = T.monkey_id
    ) AS Tower
    JOIN (
        SELECT T.id as at_id, Abilities.* FROM Abilities
        JOIN Towers T on Abilities.tower_id = T.id
    ) as Abilities
WHERE Tower.mt_id = Abilities.at_id
ORDER BY Tower.m_id;`,
                values: []
            });
            if (!abilities) { throw `Could not find abilities.`; }

            return abilities;
        } catch (e) {
            console.log(` -- getAllMonkeys DataSource Error: ${e}`);
            return [];
        }
    }

    async getAbilitiesByMonkeyId({monkeyID}) {
        // return this.data.filter(ability => ability.monkeyid === monkeyID);
        try {
            const abilities = await this.executeQuery({
                query: "SELECT * FROM Abilities",
                values: []
            });
            if (!abilities) {
                throw `Could not find abilities.`;
            }
            return abilities[0];
        } catch (e) {
            throw new Error(` -- getAbilitiesByMonkeyId DataSource Error: ${e}`);
        }
    }
}
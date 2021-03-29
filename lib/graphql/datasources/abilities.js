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
ORDER BY Tower.m_id, Abilities.upgrade_path, Abilities.upgrade_tier;`,
                values: []
            });
            if (!abilities) { throw `Could not find abilities.`; }

            return abilities;
        } catch (e) {
            console.log(` -- getAllMonkeys DataSource Error: ${e}`);
            return [];
        }
    }

    async getAbilitiesByMonkeyId({mid}) {
        try {
            const abilities = await this.executeQuery({
                query: `
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
`,
                values: [ mid ]
            });
            if (!abilities) { throw `Could not find abilities.`; }
            return abilities;
        } catch (e) {
            console.log(` -- getAbilitiesByMonkeyId DataSource Error: ${e}`);
            return [];
        }
    }

    async getAbilitiesByHeroId({hid}) {
        try {
            const abilities = await this.executeQuery({
                query: `
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
`,
                values: [ hid ]
            });
            if (!abilities) { throw `Could not find abilities.`; }
            return abilities;
        } catch (e) {
            console.log(` -- getAbilitiesByHeroId DataSource Error: ${e}`);
            return [];
        }
    }
}
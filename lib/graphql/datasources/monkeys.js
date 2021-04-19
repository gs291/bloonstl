const { DataSource } = require("apollo-datasource");

export default class MonkeysAPI extends DataSource {
    constructor({ executeQuery }) {
        super();
        this.executeQuery = executeQuery;
    }

    async getAllMonkeys() {
        try {
            const monkeys = await this.executeQuery({
                query: "SELECT * FROM Monkeys",
                values: []
            });
            if (!monkeys) { throw `Could not find monkeys.`; }
            return monkeys;
        } catch (e) {
            console.log(` -- getAllMonkeys DataSource Error: ${e}`);
            return [];
        }
    }

    async getAllMonkeysWithTiers() {
        try {
            const monkeys = await this.executeQuery({
                query: `
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
ORDER BY Tower.name`,
                values: []
            });
            if (!monkeys) { throw `Could not find monkeys.`; }
            return monkeys;
        } catch (e) {
            console.log(` -- getAllMonkeysWithTiers DataSource Error: ${e}`);
            return [];
        }
    }

    async getMonkeyByName({ name }) {
        try {
            const monkey = await this.executeQuery({
                query: "SELECT * FROM Monkeys WHERE name = ?",
                values: [ name ]
            });
            if (!monkey) { throw `Could not find monkey with name: ${name}`; }
            return monkey[0];
        } catch (e) {
            console.log(` -- getMonkeyByName DataSource Error: ${e}`);
            return [];
        }
    }

    async getMonkeysByType({ type }) {
        try {
            const monkeys = await this.executeQuery({
                query: "SELECT * FROM Monkeys WHERE type = ?",
                values: [ type ]
            });
            if (!monkeys) { throw `Could not find monkeys with type: ${type}`; }
            return monkeys;
        } catch (e) {
            console.log(` -- getMonkeyByType DataSource Error: ${e}`);
            return [];
        }
    }
}

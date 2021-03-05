const { DataSource } = require('apollo-datasource');

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

    async getMonkeyById({ monkeyID }) {
        try {
            const monkey = await this.executeQuery({
                query: "SELECT * FROM Monkeys WHERE id = ?",
                values: [ monkeyID ]
            });
            if (!monkey) { throw `Could not find monkey with ID: ${monkeyID}`; }
            return monkey[0];
        } catch (e) {
            throw new Error(` -- getMonkeyById DataSource Error: ${e}`);
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
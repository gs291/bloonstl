import {DataSource} from "apollo-datasource";

import monkeyQueries from "../queries/monkeyQueries";

export default class MonkeysAPI extends DataSource {
    constructor({ executeQuery }) {
        super();
        this.executeQuery = executeQuery;
    }

    async getAllMonkeys() {
        try {
            const monkeys = await this.executeQuery({
                query: monkeyQueries.getAllMonkeys,
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
                query: monkeyQueries.getAllMonkeysWithTiers,
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
                query: monkeyQueries.getMonkeyByName,
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
                query: monkeyQueries.getMonkeysByType,
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

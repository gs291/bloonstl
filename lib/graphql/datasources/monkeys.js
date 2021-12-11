import {DataSource} from "apollo-datasource";
import {UserInputError} from "apollo-server-micro";

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
            if (!monkeys.length) { throw `Could not find monkeys.`; }
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
            if (!monkeys.length) { throw `Could not find monkeys.`; }
            return monkeys;
        } catch (e) {
            console.log(` -- getAllMonkeysWithTiers DataSource Error: ${e}`);
            return [];
        }
    }

    async getAllMonkeysForIndexPage() {
        try {
            const monkeys = await this.executeQuery({
                query: monkeyQueries.getAllMonkeysForIndexPage,
                values: []
            });
            if (!monkeys.length) { throw `Could not find monkeys.`; }
            return monkeys;
        } catch (e) {
            console.log(` -- getAllMonkeysForIndexPage DataSource Error: ${e}`);
            return [];
        }
    }

    async getMonkeyById({ id }) {
        const monkey = await this.executeQuery({
            query: monkeyQueries.getMonkeyById,
            values: [ id ]
        });
        if (!monkey.length) { throw new UserInputError(`Could not find monkey with name: ${id}`); }
        return monkey[0];
    }

    async getMonkeyByName({ name }) {
        const monkey = await this.executeQuery({
            query: monkeyQueries.getMonkeyByName,
            values: [ name ]
        });
        if (!monkey.length) { throw new UserInputError(`Could not find monkey with name: ${name}`); }
        return monkey[0];
    }

    async getMonkeysByType({ type }) {
        const monkeys = await this.executeQuery({
            query: monkeyQueries.getMonkeysByType,
            values: [ type ]
        });
        if (!monkeys.length) { throw new UserInputError(`Could not find monkeys with type: ${type}`); }
        return monkeys;
    }
}

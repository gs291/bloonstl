import {DataSource} from "apollo-datasource";
import {UserInputError} from "apollo-server-micro";

import monkeyQueries from "../queries/monkeyQueries";


/**
 * Monkeys class representing a DataSource for the GraphQL API
 * @extends DataSource
 */
export default class MonkeysAPI extends DataSource {
    constructor({ executeQuery }) {
        super();
        this.executeQuery = executeQuery;
    }

    /**
     * Fetches all monkeys
     *
     * @async
     *
     * @return {Array} Array list of monkeys
     */
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

    /**
     * Fetches all monkeys with their respective tier
     *
     * @async
     *
     * @return {Array} Array list of monkeys
     */
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

    /**
     * Fetches all monkeys for the home page
     *
     * @async
     *
     * @return {Array} Array list of monkeys
     */
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

    /**
     * Fetches a monkey for a specific monkey id
     *
     * @async
     * @param {Object} props Function props
     * @param {string} props.id Monkey database id
     *
     * @return {Object} Object of the specific monkey
     */
    async getMonkeyById({ id }) {
        const monkey = await this.executeQuery({
            query: monkeyQueries.getMonkeyById,
            values: [ id ]
        });
        if (!monkey.length) { throw new UserInputError(`Could not find monkey with name: ${id}`); }
        return monkey[0];
    }

    /**
     * Fetches a monkey for a specific monkey name
     *
     * @async
     * @param {Object} props Function props
     * @param {string} props.name Monkey database name
     *
     * @return {Object} Object of the specific monkey
     */
    async getMonkeyByName({ name }) {
        const monkey = await this.executeQuery({
            query: monkeyQueries.getMonkeyByName,
            values: [ name ]
        });
        if (!monkey.length) { throw new UserInputError(`Could not find monkey with name: ${name}`); }
        return monkey[0];
    }

    /**
     * Fetches all monkeys by a specific type
     *
     * @async
     * @param {Object} props Function props
     * @param {string} props.type Monkey type
     *
     * @return {Array} Array list of monkeys
     */
    async getMonkeysByType({ type }) {
        const monkeys = await this.executeQuery({
            query: monkeyQueries.getMonkeysByType,
            values: [ type ]
        });
        if (!monkeys.length) { throw new UserInputError(`Could not find monkeys with type: ${type}`); }
        return monkeys;
    }
}

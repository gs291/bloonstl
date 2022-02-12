import {DataSource} from "apollo-datasource";
import {UserInputError} from "apollo-server-micro";

import towerQueries from "../queries/towerQueries";


/**
 * Towers class representing a DataSource for the GraphQL API
 * @extends DataSource
 */
export default class TowersAPI extends DataSource {
    constructor({executeQuery}) {
        super();
        this.executeQuery = executeQuery;
    }

    /**
     * Fetches all towers
     *
     * @async
     *
     * @return {Array} Array list of tower
     */
    async getTowers() {
        try {
            const towers = await this.executeQuery({
                query: towerQueries.getTowers,
                values: []
            });
            if (!towers.length) {
                throw `Could not find towers.`;
            }
            return towers;
        } catch (e) {
            throw new Error(` -- getTowers DataSource Error: ${e}`);
        }
    }

    /**
     * Fetches all towers with their respective tier
     *
     * @async
     *
     * @return {Array} Array list of tower
     */
    async getAllTowerTiers() {
        try {
            const monkeys = await this.executeQuery({
                query: towerQueries.getAllTowerTiers,
                values: []
            });
            if (!monkeys.length) { throw `Could not find tower tiers.`; }
            return monkeys;
        } catch (e) {
            console.log(` -- getAllTowerTiers DataSource Error: ${e}`);
            return [];
        }
    }

    /**
     * Fetches a tower tier for a specific monkey id
     *
     * @async
     * @param {Object} props Function props
     * @param {string} props.id Monkey database id
     *
     * @return {Object} Object of the specific tower tier
     */
    async getTowerTierByMonkeyId({id}) {
        const monkey = await this.executeQuery({
            query: towerQueries.getTowerTierByMonkeyId,
            values: [id]
        });
        if (!monkey.length) { throw new UserInputError(`Could not find tower tiers with monkey id: ${id}.`); }
        return monkey[0];
    }

    /**
     * Fetches a tower tier for a specific monkey name
     *
     * @async
     * @param {Object} props Function props
     * @param {string} props.name Monkey database name
     *
     * @return {Object} Object of the specific tower tier
     */
    async getTowerTierByMonkeyName({name}) {
        const monkey = await this.executeQuery({
            query: towerQueries.getTowerTierByMonkeyName,
            values: [name]
        });
        if (!monkey.length) { throw new UserInputError(`Could not find tower tiers with monkey name: ${name}.`); }
        return monkey[0];
    }

    /**
     * Fetches a tower tier for a specific hero id
     *
     * @async
     * @param {Object} props Function props
     * @param {string} props.id Hero database id
     *
     * @return {Object} Object of the specific tower tier
     */
    async getTowerTierByHeroId({id}) {
        const hero = await this.executeQuery({
            query: towerQueries.getTowerTierByHeroId,
            values: [id]
        });
        if (!hero.length) { throw new UserInputError(`Could not find tower tiers with hero id: ${id}.`); }
        return hero[0];
    }

    /**
     * Fetches a tower tier for a specific monkey name
     *
     * @async
     * @param {Object} props Function props
     * @param {string} props.name Hero database name
     *
     * @return {Object} Object of the specific tower tier
     */
    async getTowerTierByHeroName({name}) {
        const hero = await this.executeQuery({
            query: towerQueries.getTowerTierByHeroName,
            values: [name]
        });
        if (!hero.length) { throw new UserInputError(`Could not find tower tiers with hero name: ${name}.`); }
        return hero[0];
    }

    /**
     * Fetches all monkeys stats
     *
     * @async
     *
     * @return {Array} Array list of monkeys stats
     */
    async getAllMonkeyTowerStats() {
        const monkeys = await this.executeQuery({
            query: towerQueries.getAllMonkeyTowerStats,
            values: []
        });
        if (!monkeys.length) { throw `Could not find all monkey tower stats.`; }
        return monkeys;
    }

    /**
     * Fetches all hero stats
     *
     * @async
     *
     * @return {Array} Array list of hero stats
     */
    async getAllHeroTowerStats() {
        const heroes = await this.executeQuery({
            query: towerQueries.getAllHeroTowerStats,
            values: []
        });
        if (!heroes.length) { throw `Could not find all hero tower stats.`; }
        return heroes;
    }

    /**
     * Fetches monkey stats for a specific monkey id
     *
     * @async
     * @param {Object} props Function props
     * @param {string} props.id Monkey database id
     *
     * @return {Object} Object of the specific monkey stats
     */
    async getTowerStatsByMonkeyId({id}) {
        const monkey = await this.executeQuery({
            query: towerQueries.getTowerStatsByMonkeyId,
            values: [id]
        });
        if (!monkey.length) { throw new UserInputError(`Could not find tower stats with monkey id: ${id}.`); }
        return monkey[0];
    }

    /**
     * Fetches hero stats for a specific hero id
     *
     * @async
     * @param {Object} props Function props
     * @param {string} props.id Hero database id
     *
     * @return {Object} Object of the specific hero stats
     */
    async getTowerStatsByHeroId({id}) {
        const hero = await this.executeQuery({
            query: towerQueries.getTowerStatsByHeroId,
            values: [id]
        });
        if (!hero.length) { throw new UserInputError(`Could not find tower stats with hero id: ${id}.`); }
        return hero[0];
    }

    /**
     * Fetches monkey stats for a specific monkey name
     *
     * @async
     * @param {Object} props Function props
     * @param {string} props.name Hero database id
     *
     * @return {Object} Object of the specific hero stats
     */
    async getTowerStatsByMonkeyName({name}) {
        const monkey = await this.executeQuery({
            query: towerQueries.getTowerStatsByMonkeyName,
            values: [name]
        });
        if (!monkey.length) { throw new UserInputError(`Could not find tower stats with monkey name: ${name}.`); }
        return monkey[0];
    }

    /**
     * Fetches hero stats for a specific hero name
     *
     * @async
     * @param {Object} props Function props
     * @param {string} props.name Hero database name
     *
     * @return {Object} Object of the specific hero stats
     */
    async getTowerStatsByHeroName({name}) {
        const hero = await this.executeQuery({
            query: towerQueries.getTowerStatsByHeroName,
            values: [name]
        });
        if (!hero.length) { throw new UserInputError(`Could not find tower stats info hero name: ${name}.`); }
        return hero[0];
    }

    /**
     * Fetches tower tier information by hero name
     *
     * @async
     * @param {Object} props Function props
     * @param {string} props.name Hero database name
     *
     * @return {Object} Object of the specific hero tower tier information
     */
    async getTowerTierInfoByHeroName({name}) {
        const hero = await this.executeQuery({
            query: towerQueries.getTowerTierInfoByHeroName,
            values: [name]
        });
        if (!hero.length) { throw new UserInputError(`Could not find tower tiers info with hero name: ${name}.`); }
        return hero[0];
    }
}
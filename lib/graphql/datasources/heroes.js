import {DataSource} from "apollo-datasource";
import {UserInputError} from "apollo-server-micro";

import heroQueries from "../queries/heroQueries";


/**
 * Heroes class representing a DataSource for the GraphQL API
 * @extends DataSource
 */
export default class HeroesAPI extends DataSource {
    constructor({ executeQuery }) {
        super();
        this.executeQuery = executeQuery;
    }

    /**
     * Fetches all heroes
     *
     * @async
     *
     * @return {Array} Array list of heroes
     */
    async getAllHeroes() {
        try {
            const heroes = await this.executeQuery({
                query: heroQueries.getAllHeroes,
                values: []
            });
            if (!heroes.length) { throw `Could not find heroes.`; }
            return heroes;
        } catch (e) {
            console.log(` -- getAllHeroes DataSource Error: ${e}`);
            return [];
        }
    }

    /**
     * Fetches all heroes with their respective tier
     *
     * @async
     *
     * @return {Array} Array list of heroes
     */
    async getAllHeroesWithTiers() {
        try {
            const monkeys = await this.executeQuery({
                query: heroQueries.getALlHeroesWithTiers,
                values: []
            });
            if (!monkeys.length) { throw `Could not find heroes.`; }
            return monkeys;
        } catch (e) {
            console.log(` -- getAllHeroesWithTiers DataSource Error: ${e}`);
            return [];
        }
    }

    /**
     * Fetches a hero for a specific hero id
     *
     * @async
     * @param {Object} props Function props
     * @param {string} props.id Hero database id
     *
     * @return {Object} Object of the specific hero
     */
    async getHeroById({ id }) {
        const hero = await this.executeQuery({
            query: heroQueries.getHeroById,
            values: [ id ]
        });
        if (!hero.length) { throw new UserInputError(`Could not find hero with id: ${id}`); }
        return hero[0];
    }

    /**
     * Fetches a hero for a specific hero name
     *
     * @async
     * @param {Object} props Function props
     * @param {string} props.name Hero database name
     *
     * @return {Object} Object of the specific hero
     */
    async getHeroByName({ name }) {
            const hero = await this.executeQuery({
                query: heroQueries.getHeroByName,
                values: [ name ]
            });
            if (!hero.length) { throw new UserInputError(`Could not find hero with name: ${name}`); }
            return hero[0];
    }
}

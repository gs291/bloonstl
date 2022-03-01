import {DataSource} from "apollo-datasource";
import {ApolloError, UserInputError} from "apollo-server-micro";

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
        const heroes = await this.executeQuery({
            query: heroQueries.getAllHeroes,
            values: []
        });
        if (!heroes.length) {
            throw new ApolloError(`Internal Server Error:\n -- getAllHeroes DataSource Error: Could not find heroes.`);
        }
        return heroes;
    }

    /**
     * Fetches all heroes with their respective tier
     *
     * @async
     *
     * @return {Array} Array list of heroes
     */
    async getAllHeroesWithTiers() {
        const heroes = await this.executeQuery({
            query: heroQueries.getALlHeroesWithTiers,
            values: []
        });
        if (!heroes.length) {
            throw new ApolloError(`Internal Server Error:\n -- getAllHeroesWithTiers DataSource Error: Could not find heroes.`);
        }
        return heroes;
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

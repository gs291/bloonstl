import {DataSource} from "apollo-datasource";
import {UserInputError} from "apollo-server-micro";

import abilityQueries from "../queries/abilityQueries";


/**
 * Abilities class representing a DataSource for the GraphQL API
 * @extends DataSource
 */
export default class AbilitiesAPI extends DataSource {
    constructor({executeQuery}) {
        super();
        this.executeQuery = executeQuery;
    }

    /**
     * Fetches all tower abilities from the database
     *
     * @async
     *
     * @return {Array} Array list of all tower abilities
     */
    async getAllAbilities() {
        try {
            const abilities = await this.executeQuery({
                query: abilityQueries.getAllAbilities,
                values: []
            });
            if (!abilities.length) { throw `Could not find abilities.`; }

            return abilities;
        } catch (e) {
            console.log(` -- getAllMonkeys DataSource Error: ${e}`);
            return [];
        }
    }

    /**
     * Fetches all abilities for a specific monkey id
     *
     * @async
     * @param {Object} props Function props
     * @param {string} props.id Monkey database id
     *
     * @return {Array} Array list of abilities for the monkey
     */
    async getAbilitiesByMonkeyId({id}) {
        const abilities = await this.executeQuery({
            query: abilityQueries.getAbilitiesByMonkeyId,
            values: [ id ]
        });
        if (!abilities.length) { throw new UserInputError(`Could not find abilities with monkey id: ${id}.`); }
        return abilities;
    }

    /**
     * Fetches all abilities for a specific monkey name
     *
     * @async
     * @param {Object} props Function props
     * @param {string} props.name Monkey database name
     *
     * @return {Array} Array list of abilities for the monkey
     */
    async getAbilitiesByMonkeyName({name}) {
        const abilities = await this.executeQuery({
            query: abilityQueries.getAbilitiesByMonkeyName,
            values: [ name ]
        });
        if (!abilities.length) { throw new UserInputError(`Could not find abilities with monkey name: ${name}.`); }
        return abilities;
    }

    /**
     * Fetches all abilities for a specific hero id
     *
     * @async
     * @param {Object} props Function props
     * @param {string} props.id Hero database id
     *
     * @return {Array} Array list of abilities for the hero
     */
    async getAbilitiesByHeroId({id}) {
        const abilities = await this.executeQuery({
            query: abilityQueries.getAbilitiesByHeroId,
            values: [ id ]
        });
        if (!abilities.length) { throw new UserInputError(`Could not find abilities with hero id: ${id}.`); }
        return abilities;
    }

    /**
     * Fetches all abilities for a specific hero name
     *
     * @async
     * @param {Object} props Function props
     * @param {string} props.name Hero database name
     *
     * @return {Array} Array list of abilities for the hero
     */
    async getAbilitiesByHeroName({name}) {
        const abilities = await this.executeQuery({
            query: abilityQueries.getAbilitiesByHeroName,
            values: [ name ]
        });
        if (!abilities.length) { throw new UserInputError(`Could not find abilities with hero name: ${name}.`); }
        return abilities;
    }

    /**
     * Fetches all monkey abilities with their respective data
     *
     * @async
     *
     * @return {Array} Array list of all monkey abilities
     */
    async getAllMonkeyAbilityTiersWithInfo() {
        try {
            const abilities = await this.executeQuery({
                query: abilityQueries.getAllAbilityTiersWithInfo,
                values: [  ]
            });
            if (!abilities.length) { throw `Could not find abilities tiers with information.`; }
            return abilities;
        } catch (e) {
            console.log(` -- getAllMonkeyAbilityTiersWithInfo DataSource Error: ${e}`);
            return [];
        }
    }

    /**
     * Fetches all abilities with their respective data for a specific monkey id
     *
     * @async
     * @param {Object} props Function props
     * @param {string} props.id Monkey database id
     *
     * @return {Array} Array list of abilities for the monkey
     */
    async getAbilityTiersWithInfoByMonkeyId({ id }) {
        const abilities = await this.executeQuery({
            query: abilityQueries.getAbilityTiersWithInfoByMonkeyId,
            values: [ id ]
        });
        if (!abilities.length) { throw new UserInputError(`Could not find abilities tiers with information by monkey id: ${id}.`); }
        return abilities;
    }

    /**
     * Fetches all abilities with their respective data for a specific monkey name
     *
     * @async
     * @param {Object} props Function props
     * @param {string} props.name Monkey database name
     *
     * @return {Array} Array list of abilities for the monkey
     */
    async getAbilityTiersWithInfoByMonkeyName({ name }) {
        const abilities = await this.executeQuery({
            query: abilityQueries.getAbilityTiersWithInfoByMonkeyName,
            values: [ name ]
        });
        if (!abilities.length) { throw new UserInputError(`Could not find abilities tiers with information by monkey name: ${name}.`); }
        return abilities;
    }
}
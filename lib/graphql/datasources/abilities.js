import {DataSource} from "apollo-datasource";
import {UserInputError} from "apollo-server-micro";

import abilityQueries from "../queries/abilityQueries";

export default class AbilitiesAPI extends DataSource {
    constructor({executeQuery}) {
        super();
        this.executeQuery = executeQuery;
    }

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

    async getAbilitiesByMonkeyId({id}) {
        const abilities = await this.executeQuery({
            query: abilityQueries.getAbilitiesByMonkeyId,
            values: [ id ]
        });
        if (!abilities.length) { throw new UserInputError(`Could not find abilities with monkey id: ${id}.`); }
        return abilities;
    }

    async getAbilitiesByMonkeyName({name}) {
        const abilities = await this.executeQuery({
            query: abilityQueries.getAbilitiesByMonkeyName,
            values: [ name ]
        });
        if (!abilities.length) { throw new UserInputError(`Could not find abilities with monkey name: ${name}.`); }
        return abilities;
    }

    async getAbilitiesByHeroId({id}) {
        const abilities = await this.executeQuery({
            query: abilityQueries.getAbilitiesByHeroId,
            values: [ id ]
        });
        if (!abilities.length) { throw new UserInputError(`Could not find abilities with hero id: ${id}.`); }
        return abilities;
    }

    async getAbilitiesByHeroName({name}) {
        const abilities = await this.executeQuery({
            query: abilityQueries.getAbilitiesByHeroName,
            values: [ name ]
        });
        if (!abilities.length) { throw new UserInputError(`Could not find abilities with hero name: ${name}.`); }
        return abilities;
    }

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

    async getAbilityTiersWithInfoByMonkeyId({ id }) {
        const abilities = await this.executeQuery({
            query: abilityQueries.getAbilityTiersWithInfoByMonkeyId,
            values: [ id ]
        });
        if (!abilities.length) { throw new UserInputError(`Could not find abilities tiers with information by monkey id: ${id}.`); }
        return abilities;
    }

    async getAbilityTiersWithInfoByMonkeyName({ name }) {
        const abilities = await this.executeQuery({
            query: abilityQueries.getAbilityTiersWithInfoByMonkeyName,
            values: [ name ]
        });
        if (!abilities.length) { throw new UserInputError(`Could not find abilities tiers with information by monkey name: ${name}.`); }
        return abilities;
    }
}
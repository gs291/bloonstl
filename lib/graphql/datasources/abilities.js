import {DataSource} from "apollo-datasource";

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
        try {
            const abilities = await this.executeQuery({
                query: abilityQueries.getAbilitiesByMonkeyId,
                values: [ id ]
            });
            if (!abilities.length) { throw `Could not find abilities.`; }
            return abilities;
        } catch (e) {
            console.log(` -- getAbilitiesByMonkeyId DataSource Error: ${e}`);
            return [];
        }
    }

    async getAbilitiesByMonkeyName({name}) {
        try {
            const abilities = await this.executeQuery({
                query: abilityQueries.getAbilitiesByMonkeyName,
                values: [ name ]
            });
            if (!abilities.length) { throw `Could not find abilities.`; }
            return abilities;
        } catch (e) {
            console.log(` -- getAbilitiesByMonkeyName DataSource Error: ${e}`);
            return [];
        }
    }

    async getAbilitiesByHeroId({id}) {
        try {
            const abilities = await this.executeQuery({
                query: abilityQueries.getAbilitiesByHeroId,
                values: [ id ]
            });
            if (!abilities.length) { throw `Could not find abilities.`; }
            return abilities;
        } catch (e) {
            console.log(` -- getAbilitiesByHeroId DataSource Error: ${e}`);
            return [];
        }
    }

    async getAbilitiesByHeroName({name}) {
        try {
            const abilities = await this.executeQuery({
                query: abilityQueries.getAbilitiesByHeroName,
                values: [ name ]
            });
            if (!abilities.length) { throw `Could not find abilities.`; }
            return abilities;
        } catch (e) {
            console.log(` -- getAbilitiesByHeroName DataSource Error: ${e}`);
            return [];
        }
    }

    async getAllMonkeyAbilityRanksWithInfo() {
        try {
            const abilities = await this.executeQuery({
                query: abilityQueries.getAllAbilityRanksWithInfo,
                values: [  ]
            });
            if (!abilities.length) { throw `Could not find abilities tiers with information.`; }
            return abilities;
        } catch (e) {
            console.log(` -- getAllMonkeyAbilityRanksWithInfo DataSource Error: ${e}`);
            return [];
        }
    }

    async getAbilityTiersWithInfoByMonkeyId({ id }) {
        try {
            const abilities = await this.executeQuery({
                query: abilityQueries.getAbilityTiersWithInfoByMonkeyId,
                values: [ id ]
            });
            if (!abilities.length) { throw `Could not find abilities tiers with information.`; }
            return abilities;
        } catch (e) {
            console.log(` -- getAbilityTiersWithInfoByMonkeyId DataSource Error: ${e}`);
            return [];
        }
    }

    async getAbilityTiersWithInfoByMonkeyName({ name }) {
        try {
            const abilities = await this.executeQuery({
                query: abilityQueries.getAbilityTiersWithInfoByMonkeyName,
                values: [ name ]
            });
            if (!abilities.length) { throw `Could not find abilities ranks with information.`; }
            return abilities;
        } catch (e) {
            console.log(` -- getAbilityTiersWithInfoByMonkeyName DataSource Error: ${e}`);
            return [];
        }
    }
}
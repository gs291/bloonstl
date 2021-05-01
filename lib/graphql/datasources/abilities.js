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
            if (!abilities) { throw `Could not find abilities.`; }

            return abilities;
        } catch (e) {
            console.log(` -- getAllMonkeys DataSource Error: ${e}`);
            return [];
        }
    }

    async getAbilitiesByMonkeyId({mid}) {
        try {
            const abilities = await this.executeQuery({
                query: abilityQueries.getAbilitiesByMonkeyId,
                values: [ mid ]
            });
            if (!abilities) { throw `Could not find abilities.`; }
            return abilities;
        } catch (e) {
            console.log(` -- getAbilitiesByMonkeyId DataSource Error: ${e}`);
            return [];
        }
    }

    async getAbilitiesByHeroId({hid}) {
        try {
            const abilities = await this.executeQuery({
                query: abilityQueries.getAbilitiesByHeroId,
                values: [ hid ]
            });
            if (!abilities) { throw `Could not find abilities.`; }
            return abilities;
        } catch (e) {
            console.log(` -- getAbilitiesByHeroId DataSource Error: ${e}`);
            return [];
        }
    }

    async getAllMonkeyAbilityRanksWithInfo() {
        try {
            const abilities = await this.executeQuery({
                query: abilityQueries.getAllAbilityRanksWithInfo,
                values: [  ]
            });
            if (!abilities) { throw `Could not find abilities ranks with information.`; }
            return abilities;
        } catch (e) {
            console.log(` -- getAllMonkeyAbilityRanksWithInfo DataSource Error: ${e}`);
            return [];
        }
    }

    async getMonkeyByNameAbilityRanksWithInfo({ name }) {
        try {
            const abilities = await this.executeQuery({
                query: abilityQueries.getMonkeyByNameAbilityRanksWithInfo,
                values: [ name ]
            });
            if (!abilities) { throw `Could not find abilities ranks with information.`; }
            return abilities;
        } catch (e) {
            console.log(` -- getMonkeyByNameAbilityRanksWithInfo DataSource Error: ${e}`);
            return [];
        }
    }
}
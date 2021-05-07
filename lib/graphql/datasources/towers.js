import {DataSource} from "apollo-datasource";
import {UserInputError} from "apollo-server-micro";

import towerQueries from "../queries/towerQueries";

export default class TowersAPI extends DataSource {
    constructor({executeQuery}) {
        super();
        this.executeQuery = executeQuery;
    }

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

    async getTowerTierByMonkeyId({id}) {
        const monkey = await this.executeQuery({
            query: towerQueries.getTowerTierByMonkeyId,
            values: [id]
        });
        if (!monkey.length) { throw new UserInputError(`Could not find tower tiers with monkey id: ${id}.`); }
        return monkey[0];
    }

    async getTowerTierByMonkeyName({name}) {
        const monkey = await this.executeQuery({
            query: towerQueries.getTowerTierByMonkeyName,
            values: [name]
        });
        if (!monkey.length) { throw new UserInputError(`Could not find tower tiers with monkey name: ${name}.`); }
        return monkey[0];
    }

    async getTowerTierByHeroId({id}) {
        const hero = await this.executeQuery({
            query: towerQueries.getTowerTierByHeroId,
            values: [id]
        });
        if (!hero.length) { throw new UserInputError(`Could not find tower tiers with hero id: ${id}.`); }
        return hero[0];
    }

    async getTowerTierByHeroName({name}) {
        const hero = await this.executeQuery({
            query: towerQueries.getTowerTierByHeroName,
            values: [name]
        });
        if (!hero.length) { throw new UserInputError(`Could not find tower tiers with hero name: ${name}.`); }
        return hero[0];
    }
}
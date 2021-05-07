import {DataSource} from "apollo-datasource";

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
        try {
            const monkey = await this.executeQuery({
                query: towerQueries.getTowerTierByMonkeyId,
                values: [id]
            });
            if (!monkey.length) { throw `Could not find tower tiers.`; }
            return monkey[0];
        } catch (e) {
            console.log(` -- getTowerTierByMonkeyID DataSource Error: ${e}`);
            return [];
        }
    }

    async getTowerTierByMonkeyName({name}) {
        try {
            const monkey = await this.executeQuery({
                query: towerQueries.getTowerTierByMonkeyName,
                values: [name]
            });
            if (!monkey.length) { throw `Could not find tower tiers.`; }
            return monkey[0];
        } catch (e) {
            console.log(` -- getTowerTierByMonkeyName DataSource Error: ${e}`);
            return [];
        }
    }

    async getTowerTierByHeroId({id}) {
        try {
            const monkey = await this.executeQuery({
                query: towerQueries.getTowerTierByHeroId,
                values: [id]
            });
            if (!monkey.length) { throw `Could not find tower tiers.`; }
            return monkey[0];
        } catch (e) {
            console.log(` -- getTowerTierByMonkeyID DataSource Error: ${e}`);
            return [];
        }
    }

    async getTowerTierByHeroName({name}) {
        try {
            const monkey = await this.executeQuery({
                query: towerQueries.getTowerTierByHeroName,
                values: [name]
            });
            if (!monkey.length) { throw `Could not find tower tiers.`; }
            return monkey[0];
        } catch (e) {
            console.log(` -- getTowerTierByMonkeyName DataSource Error: ${e}`);
            return [];
        }
    }
}
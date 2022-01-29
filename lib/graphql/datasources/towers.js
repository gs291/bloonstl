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

    async getAllMonkeyTowerStats() {
        const monkeys = await this.executeQuery({
            query: towerQueries.getAllMonkeyTowerStats,
            values: []
        });
        if (!monkeys.length) { throw `Could not find all monkey tower stats.`; }
        return monkeys;
    }

    async getAllHeroTowerStats() {
        const heroes = await this.executeQuery({
            query: towerQueries.getAllHeroTowerStats,
            values: []
        });
        if (!heroes.length) { throw `Could not find all hero tower stats.`; }
        return heroes;
    }

    async getTowerStatsByMonkeyId({id}) {
        const monkey = await this.executeQuery({
            query: towerQueries.getTowerStatsByMonkeyId,
            values: [id]
        });
        if (!monkey.length) { throw new UserInputError(`Could not find tower stats with monkey id: ${id}.`); }
        return monkey[0];
    }

    async getTowerStatsByHeroId({id}) {
        const hero = await this.executeQuery({
            query: towerQueries.getTowerStatsByHeroId,
            values: [id]
        });
        if (!hero.length) { throw new UserInputError(`Could not find tower stats with hero id: ${id}.`); }
        return hero[0];
    }

    async getTowerStatsByMonkeyName({name}) {
        const monkey = await this.executeQuery({
            query: towerQueries.getTowerStatsByMonkeyName,
            values: [name]
        });
        if (!monkey.length) { throw new UserInputError(`Could not find tower stats with monkey name: ${name}.`); }
        return monkey[0];
    }

    async getTowerStatsByHeroName({name}) {
        const hero = await this.executeQuery({
            query: towerQueries.getTowerStatsByHeroName,
            values: [name]
        });
        if (!hero.length) { throw new UserInputError(`Could not find tower stats info hero name: ${name}.`); }
        return hero[0];
    }

    async getTowerTierInfoByHeroName({name}) {
        const hero = await this.executeQuery({
            query: towerQueries.getTowerTierInfoByHeroName,
            values: [name]
        });
        if (!hero.length) { throw new UserInputError(`Could not find tower tiers info with hero name: ${name}.`); }
        return hero[0];
    }
}
import {DataSource} from "apollo-datasource";

import heroQueries from "../queries/heroQueries";

export default class HeroesAPI extends DataSource {
    constructor({ executeQuery }) {
        super();
        this.executeQuery = executeQuery;
    }

    async getAllHeroes() {
        try {
            const heroes = await this.executeQuery({
                query: heroQueries.getAllHeroes,
                values: []
            });
            if (!heroes) { throw `Could not find heroes.`; }
            return heroes;
        } catch (e) {
            console.log(` -- getAllHeroes DataSource Error: ${e}`);
            return [];
        }
    }

    async getAllHeroesWithTiers() {
        try {
            const monkeys = await this.executeQuery({
                query: heroQueries.getALlHeroesWithTiers,
                values: []
            });
            if (!monkeys) { throw `Could not find heroes.`; }
            return monkeys;
        } catch (e) {
            console.log(` -- getAllHeroesWithTiers DataSource Error: ${e}`);
            return [];
        }
    }

    async getHeroByName({ name }) {
        try {
            const hero = await this.executeQuery({
                query: heroQueries.getHeroByName,
                values: [ name ]
            });
            if (!hero) { throw `Could not find hero with name: ${name}`; }
            return hero[0];
        } catch (e) {
            console.log(` -- getHeroByName DataSource Error: ${e}`);
            return [];
        }
    }
}

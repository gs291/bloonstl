import {DataSource} from "apollo-datasource";
import {UserInputError} from "apollo-server-micro";

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
            if (!heroes.length) { throw `Could not find heroes.`; }
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
            if (!monkeys.length) { throw `Could not find heroes.`; }
            return monkeys;
        } catch (e) {
            console.log(` -- getAllHeroesWithTiers DataSource Error: ${e}`);
            return [];
        }
    }

    async getHeroById({ id }) {
        const hero = await this.executeQuery({
            query: heroQueries.getHeroById,
            values: [ id ]
        });
        if (!hero.length) { throw new UserInputError(`Could not find hero with id: ${id}`); }
        return hero[0];
    }

    async getHeroByName({ name }) {
            const hero = await this.executeQuery({
                query: heroQueries.getHeroByName,
                values: [ name ]
            });
            if (!hero.length) { throw new UserInputError(`Could not find hero with name: ${name}`); }
            return hero[0];
    }
}

const { DataSource } = require('apollo-datasource');

export default class HeroesAPI extends DataSource {
    constructor({ executeQuery }) {
        super();
        this.executeQuery = executeQuery;
    }

    async getAllHeroes() {
        try {
            const heroes = await this.executeQuery({
                query: "SELECT * FROM Heroes",
                values: []
            });
            if (!heroes) { throw `Could not find heroes.`; }
            return heroes;
        } catch (e) {
            console.log(` -- getAllHeroes DataSource Error: ${e}`);
            return [];
        }
    }

    async getHeroById({ heroID }) {
        try {
            const hero = await this.executeQuery({
                query: "SELECT * FROM Heroes WHERE id = ?",
                values: [ heroID ]
            });
            if (!hero) { throw `Could not find hero with ID: ${heroID}`; }
            return hero[0];
        } catch (e) {
            console.log(` -- getHeroById DataSource Error: ${e}`);
            return [];
        }
    }
}

const { DataSource } = require("apollo-datasource");

export default class HeroesAPI extends DataSource {
    constructor({ executeQuery }) {
        super();
        this.executeQuery = executeQuery;
    }

    async getAllHeroes() {
        try {
            const heroes = await this.executeQuery({
                query: "SELECT * FROM Heroes ORDER BY name",
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
                query: `
                SELECT * FROM
    (
        SELECT T.id as t_id, Heroes.id as h_id, Heroes.* FROM Heroes
        JOIN Towers T on Heroes.id = T.hero_id
    ) AS Tower
    JOIN (
        SELECT T.id as tr_t_id, TowerRanks.id as tr_id, TowerRanks.* FROM TowerRanks
        JOIN Towers T on TowerRanks.tower_id = T.id
    ) as TowerRanks
WHERE Tower.t_id = TowerRanks.tr_t_id
ORDER BY Tower.name`,
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
                query: "SELECT * FROM Heroes WHERE name = ?",
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

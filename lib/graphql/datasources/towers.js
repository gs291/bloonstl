const { DataSource } = require("apollo-datasource");

export default class TowersAPI extends DataSource {
    constructor({executeQuery}) {
        super();
        this.executeQuery = executeQuery;
    }

    async getTowers() {
        try {
            const towers = await this.executeQuery({
                query: "SELECT * FROM Towers",
                values: []
            });
            if (!towers) {
                throw `Could not find towers.`;
            }
            return towers;
        } catch (e) {
            throw new Error(` -- getTowers DataSource Error: ${e}`);
        }
    }
}
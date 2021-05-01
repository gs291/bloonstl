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
            if (!towers) {
                throw `Could not find towers.`;
            }
            return towers;
        } catch (e) {
            throw new Error(` -- getTowers DataSource Error: ${e}`);
        }
    }
}
import {DataSource} from "apollo-datasource";
import {UserInputError} from "apollo-server-micro";

import voteQueries from "../queries/voteQueries";

export default class VoteAPI extends DataSource {
    constructor({executeQuery}) {
        super();
        this.executeQuery = executeQuery;
    }

    async addVote({vote}) {
        try {
            const vote = await this.executeQuery({
                query: voteQueries.addVote,
                values: []
            });
            if (!vote.length) {
                throw `Could not find towers.`;
            }
            return vote;
        } catch (e) {
            throw new Error(` -- addVote DataSource Error: ${e}`);
        }
    }
}
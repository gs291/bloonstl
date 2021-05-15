import {DataSource} from "apollo-datasource";

import voteQueries from "../queries/voteQueries";
import towerQueries from "../queries/towerQueries";
import {parseTowerLink, parseVoteSubmission} from "../../utils/utils";

export default class VoteAPI extends DataSource {
    constructor({executeQuery}) {
        super();
        this.executeQuery = executeQuery;
    }

    async submitVote({vote}) {
        const towerName = parseTowerLink(vote.tower);
        const monkey = await this.executeQuery({
            query: towerQueries.getTowerIdByMonkeyName,
            values: [ towerName ]
        });

        const hero = await this.executeQuery({
            query: towerQueries.getTowerIdByHeroName,
            values: [ towerName ]
        });
        if (!hero.length && !monkey.length) {
            return {
                "text": `Could not find tower with name: ${name}`,
                "error": true
            };
        }

        const parsedVote = parseVoteSubmission(vote);
        if (parsedVote.err) {
            return {
                "text": parsedVote.err,
                "error": true
            }
        }

        let tower_id = 0;
        if (monkey.length) {
            tower_id = monkey[0].id;
        } else if (hero.length) {
            tower_id = hero[0].id;
        }

        console.log(tower_id, vote);
        // const voteSubmission = await this.executeQuery({
        //     query: voteQueries.submitVote,
        //     values: [
        //         tower_id, vote.tower_tier,
        //         vote.ability_tier, vote.ability_top, vote.ability_middle,
        //         vote.pros, vote.cons
        //     ]
        // });

        return {"text": "Vote submitted!"};
    }
}
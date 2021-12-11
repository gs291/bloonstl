import {DataSource} from "apollo-datasource";

import voteQueries from "../queries/voteQueries";
import towerQueries from "../queries/towerQueries";
import {parseTowerLink, parseVoteSubmission} from "../../utils/utils";

export default class VoteAPI extends DataSource {
    constructor({executeQuery}) {
        super();
        this.executeQuery = executeQuery;
    }

    async submitMonkeyVote({vote}) {
        const towerName = parseTowerLink(vote.tower);

        const monkey = await this.executeQuery({
            query: towerQueries.getTowerIdByMonkeyName,
            values: [ towerName ]
        });

        if (!monkey.length) {
            return {
                "text": `Could not find monkey with name: ${name}`,
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
        }

        console.log(tower_id, vote);
        // const voteSubmission = await this.executeQuery({
        //     query: voteQueries.submitMonkeyVoteMutations,
        //     values: [
        //         tower_id, vote.tower_tier,
        //         vote.ability_tier, vote.ability_top, vote.ability_middle,
        //         vote.pros, vote.cons
        //     ]
        // });

        return {"text": "Vote submitted!"};
    }

    async submitHeroVote({vote}) {
        const towerName = parseTowerLink(vote.tower);

        const hero = await this.executeQuery({
            query: towerQueries.getTowerIdByHeroName,
            values: [ towerName ]
        });
        if (!hero.length) {
            return {
                "text": `Could not find hero with name: ${name}`,
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
        if (hero.length) {
            tower_id = hero[0].id;
        }

        console.log(tower_id, vote);
        // const voteSubmission = await this.executeQuery({
        //     query: voteQueries.submitHeroVoteMutation,
        //     values: [
        //         tower_id, vote.tower_tier,
        //         vote.ability_tier, vote.ability_top, vote.ability_middle,
        //         vote.pros, vote.cons
        //     ]
        // });

        return {"text": "Vote submitted!"};
    }
}
const submitVote = `
INSERT INTO 'TowerVotes' VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?)
`;

const submitMonkeyVoteMutation = `
mutation SubmitMonkeyVote($vote: Vote!) {
    submitMonkeyVote(vote: $vote) {
        text
    }
}
`;

const submitHeroVoteMutation = `
mutation SubmitHeroVote($vote: Vote!) {
    submitHeroVote(vote: $vote) {
        text
    }
}
`;

export default {
    submitVote,
    submitMonkeyVoteMutation, submitHeroVoteMutation
}


const submitVote = `
INSERT INTO 'Votes' VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?)
`;

const submitMutation = `
mutation SubmitVote($vote: Vote!) {
    submitVote(vote: $vote) {
        text
    }
}
`;

export default {
    submitVote,
    submitMutation
}


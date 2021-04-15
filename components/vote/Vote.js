import {useState} from "react";
import styled from "@emotion/styled";
import {Button, Collapse, Typography} from "@material-ui/core";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import VoteTower from "./VoteTower";
import VoteAbilities from "./VoteAbilities";
import siteColors from "../../lib/utils/siteColors";

const VoteForm = styled.form`
  width: 100%;
  height: 100%;
  margin-top: 2em;
  margin-bottom: 2em;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Expander = styled(Button)`
  color: ${siteColors.text.dark};
  &:hover {
    cursor: pointer;
  }
`;

const VoteText = styled(Typography)`
  color: ${siteColors.text.dark};
`;

const SubmitVote = styled(Button)`
  color: ${siteColors.text.dark};
`;

export default function Vote({towers, tower}) {
    const [ collapse, setCollapse ] = useState(false);

    const handleCollapse = (_) => setCollapse(!collapse);
    const submitVote = async e => {
        e.preventDefault()

        // const res = await fetch(
        //     'https://hooks.zapier.com/hooks/catch/123456/abcde',
        //     {
        //         body: JSON.stringify({
        //             name: e.target.name.value
        //         }),
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         method: 'POST'
        //     }
        // )
        //
        // const result = await res.json()
        // result.user => 'Ada Lovelace'
    }

    return (
        <>
            <VoteForm onSubmit={submitVote}>
                <VoteTower towers={towers} tower={tower} />
                <SubmitVote type="submit">Vote!</SubmitVote>
            </VoteForm>
        </>
    );
}

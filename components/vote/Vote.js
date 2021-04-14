import styled from "@emotion/styled";
import {Button, Collapse, Typography} from "@material-ui/core";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import VoteAbilities from "./VoteAbilities";
import {useState} from "react";
import FilterRanks from "../filters/FilterRanks";
import VoteTower from "./VoteTower";
import siteColors from "../../lib/utils/siteColors";

const VoteForm = styled.form`
  width: 100%;
  height: 100%;
  
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
            <form onSubmit={submitVote}>
                <VoteTower towers={towers} tower={tower} />

                <VoteText variant="body1" display="inline" component="div">
                    Abilities Tier
                    &nbsp;
                    <Expander onClick={handleCollapse}>
                        <AddCircleOutlineIcon />
                    </Expander>
                    &nbsp;
                    <Typography variant="body1" color="secondary" display="inline">
                        optional *
                    </Typography>
                </VoteText>
                <Collapse in={collapse}>
                    <VoteAbilities />
                </Collapse>

                <Button type="submit">Vote!</Button>
            </form>
        </>
    );
}

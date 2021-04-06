import {Grid} from "@material-ui/core";

import TowerText from "./TowerText";
import styled from "@emotion/styled";

const VotesContainer = styled(Grid)`
  width: 350px;
  margin-top: 10px;
`;

export default function Votes ({ className, votes }) {
    return (
        <>
            <VotesContainer container className={className} justify="flex-end">
                <Grid item>
                    <TowerText variant="caption">
                        Votes:  { votes }
                    </TowerText>
                </Grid>
            </VotesContainer>
        </>
    );
}
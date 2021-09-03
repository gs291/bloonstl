import styled from "@emotion/styled";
import {Grid} from "@material-ui/core";

import TowerText from "./TowerText";

const VotesContainer = styled(Grid)`
  margin: 20px 0;
`;

export default function Votes ({ className, votes }) {
    return (
        <>
            <VotesContainer container className={className} justify="center">
                <Grid item>
                    <TowerText variant="body2">
                        Votes:  { votes }
                    </TowerText>
                </Grid>
            </VotesContainer>
        </>
    );
}
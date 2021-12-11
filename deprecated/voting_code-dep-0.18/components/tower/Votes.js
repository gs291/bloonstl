import {Grid} from "@mui/material";
import styled from "@emotion/styled";

import TowerText from "./TowerText";

const VotesContainer = styled(Grid)`
  margin: 20px 0;
`;

export default function Votes ({ className, votes }) {
    return (
        <>
            <VotesContainer container className={className} justifyContent="center">
                <Grid item>
                    <TowerText variant="body2">
                        Votes:  { votes }
                    </TowerText>
                </Grid>
            </VotesContainer>
        </>
    );
}
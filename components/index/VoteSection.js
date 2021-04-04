import styled from "@emotion/styled";
import {Grid, Typography} from "@material-ui/core";

const TitleContainer = styled(Grid)`
  height: 300px;
  color: white;
  text-align: center;
`;

const SansSerifText = styled(Typography)`
  font-family: sans-serif;
`;

export default function VoteSection({ }) {

    return (
        <>
            <TitleContainer
                container
                direction="column"
                alignItems="center"
                justify="center"
            >
                <Typography variant="h4">
                    Lastly, Vote
                </Typography>
                <SansSerifText variant="body1">
                    On what you think is the best.
                </SansSerifText>
            </TitleContainer>
        </>
    )

}
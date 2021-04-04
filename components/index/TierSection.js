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

export default function TierSection({className}) {

    return (
        <>
            <TitleContainer
                container
                direction="column"
                alignItems="center"
                justify="center"
                className={className}
            >
                <Typography variant="h4">
                    Compare Tier Ranks
                </Typography>
                <br />
                <SansSerifText variant="body1">
                    Voted by you.
                </SansSerifText>
                <SansSerifText variant="body1">
                    Between Monkeys and Heroes.
                </SansSerifText>
                <SansSerifText variant="body1">
                    And between Ability trees for each Monkey.
                </SansSerifText>
            </TitleContainer>
        </>
    )

}
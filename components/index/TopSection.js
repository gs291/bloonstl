import styled from "@emotion/styled";
import {siteSizes} from "../../lib/utils";
import {Grid, Typography} from "@material-ui/core";

const TitleContainer = styled(Grid)`
  height: calc(100vh - ${ siteSizes.nav.height });
  color: white;
  text-align: center;
`;

const SansSerifText = styled(Typography)`
  font-family: sans-serif;
`;

export default function TopSection({ }) {
    return (
        <>
            <TitleContainer
                container
                direction="column"
                alignItems="center"
                justify="center"
            >
                <Typography variant="h4">
                    Welcome to Bloons.GG
                </Typography>
                <SansSerifText variant="body1">
                    the Bloons Tower Defense 6 community driven tier list
                </SansSerifText>
                <SansSerifText variant="body1">
                    for Monkeys And Heroes,
                </SansSerifText>
                <SansSerifText variant="body1">
                    and the Abilities for each Monkey.
                </SansSerifText>
                <br />
                <SansSerifText variant="h8">
                    Each Tower containing valuable information
                </SansSerifText>
                <SansSerifText variant="h8">
                    On comparable ability trees
                </SansSerifText>
                <SansSerifText variant="h8">
                    and its pros on cons for each one.
                </SansSerifText>
            </TitleContainer>
        </>
    )
}
import styled from "@emotion/styled";
import {siteSizes} from "../../lib/utils";
import {Grid, Typography} from "@material-ui/core";

const TitleContainer = styled(Grid)`
  height: calc(100vh - ${ siteSizes.nav.height });
  color: white;
  text-align: center;
`;

const AboveCenter = styled.div`
  margin-bottom: 25%;
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
                <AboveCenter>
                    <Typography variant="h4">
                        Welcome to Bloons.GG
                    </Typography>
                    <SansSerifText variant="h6">
                        the Bloons Tower Defense 6 community driven tier list
                    </SansSerifText>
                    <SansSerifText variant="h6">
                        for Monkeys And Heroes.
                    </SansSerifText>
                    <br />
                    <SansSerifText variant="h6">
                        Each Tower containing valuable information
                    </SansSerifText>
                    <SansSerifText variant="h6">
                        On comparable ability trees
                    </SansSerifText>
                    <SansSerifText variant="h6">
                        and its pros on cons for each one.
                    </SansSerifText>
                </AboveCenter>
            </TitleContainer>
        </>
    )
}
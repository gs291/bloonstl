import styled from "@emotion/styled";
import {Grid, Typography} from "@material-ui/core";

import siteSizes from "../../lib/utils/siteSizes";
import siteColors from "../../lib/utils/siteColors";

const TitleContainer = styled(Grid)`
  height: calc(100vh - ${ siteSizes.nav.height });
  color: ${siteColors.text.dark};
  text-align: center;
`;

const AboveCenter = styled.div`
  margin-bottom: 25%;
`;

const SansSerifText = styled(Typography)`
  font-family: sans-serif;
`;

export default function TopSection({ className }) {
    return (
        <>
            <TitleContainer
                container
                direction="column"
                alignItems="center"
                justify="center"
                className={className}
            >
                <AboveCenter>
                    <Typography variant="h4">
                        Welcome to Bloons.GG
                    </Typography>
                    <br />
                    <SansSerifText variant="h6">
                        The Bloons TD 6 community
                    </SansSerifText>
                    <SansSerifText variant="h6">
                        driven tier list for Monkeys And Heroes.
                    </SansSerifText>
                    <br />
                    <SansSerifText variant="h6">
                        Each Tower containing valuable
                    </SansSerifText>
                    <SansSerifText variant="h6">
                        information on comparable ability
                    </SansSerifText>
                    <SansSerifText variant="h6">
                        trees and its pros on cons for each one.
                    </SansSerifText>
                </AboveCenter>
            </TitleContainer>
        </>
    )
}
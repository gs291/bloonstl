import styled from "@emotion/styled";
import {Grid, Typography} from "@material-ui/core";

import siteColors from "../../lib/utils/siteColors";

const TitleContainer = styled(Grid)`
  height: 300px;
  color: ${siteColors.text.dark};
  text-align: center;
`;

const SansSerifText = styled(Typography)`
  font-family: sans-serif;
`;

export default function VoteSection({ className }) {

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
                    Lastly, Vote
                </Typography>
                <br />
                <SansSerifText variant="body1">
                    On what you think is the best.
                </SansSerifText>
            </TitleContainer>
        </>
    )

}
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

export default function TowerSection({ className }) {

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
                   View Detailed Towers
                </Typography>
                <br />
                <SansSerifText variant="body1">
                    View information on each Ability.
                </SansSerifText>
                <SansSerifText variant="body1">
                    View pros and cons for each tree Path.
                </SansSerifText>
                <SansSerifText variant="body1">
                    Toggle between different difficulty prices.
                </SansSerifText>
            </TitleContainer>
        </>
    )

}
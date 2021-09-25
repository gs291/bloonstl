import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Grid, Typography} from "@mui/material";

import TierPathText from "../tower/TierPathText";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode, getMobile} from "../../lib/redux/selectors";

const TitleContainer = styled(Grid)`
  min-height: 375px;
  padding: 3em;
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
  transition: 0.3s;
  text-align: center;
`;

const PathText = styled(Typography)`
  margin-bottom: 15px;
`;

const SansSerifText = styled(Typography)`
  font-family: sans-serif;
`;

export default function TowerSection({ className, monkey }) {
    const mobile = useSelector(getMobile);
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <TitleContainer
                container
                direction={mobile ? "column-reverse": "row"}
                alignItems="center"
                justifyContent="center"
                spacing={2}
                columns={16}
                data-dm={darkMode}
                className={className}
            >
                <Grid item xs={6}>
                    <PathText variant="h5">
                        S Tier Ability Path:
                    </PathText>
                    <TierPathText tier="s" tiers={monkey} />
                </Grid>
                <Grid item xs={10}>
                    <Typography variant="h3">
                        Compare Ability Paths
                    </Typography>
                    <br />
                    <SansSerifText variant="h6">
                        On all monkey abilities
                    </SansSerifText>
                    <SansSerifText variant="h6">
                        Showing the best ability paths for all monkeys.
                    </SansSerifText>
                </Grid>
            </TitleContainer>
        </>
    )

}
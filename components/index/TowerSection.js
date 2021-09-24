import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Grid, Typography} from "@mui/material";

import TierPathText from "../tower/TierPathText";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode, getMobile} from "../../lib/redux/selectors";

const TitleContainer = styled(Grid)`
  min-height: 350px;
  padding: 3em;
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
  transition: 0.3s;
  text-align: center;
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
                    <TierPathText tier="s" tiers={monkey} />
                </Grid>
                <Grid item xs={10}>
                    <Typography variant="h4">
                        View Detailed Towers
                    </Typography>
                    <br />
                    <SansSerifText variant="body1">
                        View information on each Ability.
                    </SansSerifText>
                    <SansSerifText variant="body1">
                        Toggle between different difficulty prices.
                    </SansSerifText>
                    <SansSerifText variant="body1">
                        View pros and cons for each Ability tree path.
                    </SansSerifText>
                </Grid>
            </TitleContainer>
        </>
    )

}
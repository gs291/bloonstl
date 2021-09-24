import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Grid, Typography} from "@mui/material";

import TowerCard from "../tower/TowerCard";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode, getMobile} from "../../lib/redux/selectors";

const TitleContainer = styled(Grid)`
  min-height: 350px;
  padding: 3em;
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
  text-align: center;
  transition: 0.3s;
`;

const SansSerifText = styled(Typography)`
  font-family: sans-serif;
`;

export default function TierSection({className, monkey}) {
    const mobile = useSelector(getMobile);
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <TitleContainer
                container
                direction={mobile ? "column": "row"}
                alignItems="center"
                justifyContent="center"
                spacing={2}
                columns={16}
                className={className}
                data-dm={darkMode}
            >
                <Grid item xs={10}>
                    <Typography variant="h4">
                        Compare Towers
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
                </Grid>
                <Grid item xs={6}>
                    <TowerCard tower={monkey} towerType={"monkey"} />
                </Grid>
            </TitleContainer>
        </>
    )

}
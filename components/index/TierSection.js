import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Grid, Typography} from "@material-ui/core";

import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";

const TitleContainer = styled(Grid)`
  height: 300px;
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
  text-align: center;
  transition: 0.3s;
`;

const SansSerifText = styled(Typography)`
  font-family: sans-serif;
`;

export default function TierSection({className}) {
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <TitleContainer
                container
                direction="column"
                alignItems="center"
                justifyContent="center"
                className={className}
                data-dm={darkMode}
            >
                <Typography variant="h4">
                    Compare Tier Tiers
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
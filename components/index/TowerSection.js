import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Grid, Typography} from "@mui/material";

import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";

const TitleContainer = styled(Grid)`
  height: 300px;
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
  transition: 0.3s;
  text-align: center;
`;

const SansSerifText = styled(Typography)`
  font-family: sans-serif;
`;

export default function TowerSection({ className }) {
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <TitleContainer
                container
                direction="column"
                alignItems="center"
                justifyContent="center"
                data-dm={darkMode}
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
                    Toggle between different difficulty prices.
                </SansSerifText>
                <SansSerifText variant="body1">
                    View pros and cons for each Ability tree path.
                </SansSerifText>
            </TitleContainer>
        </>
    )

}
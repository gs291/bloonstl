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

export default function VoteSection({ className }) {
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
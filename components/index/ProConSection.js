import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Grid, Typography} from "@mui/material";

import ProsCons from "../tower/ProsCons";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode, getMobile} from "../../lib/redux/selectors";

const TitleContainer = styled(Grid)`
  min-height: 375px;
  padding: 3em;
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
  transition: 0.3s;
  text-align: center;
`;

const GridItem = styled(Grid)`
  width: 100%;
`;

const ProConContainer = styled.div`
  width: 100%;
`;

const SansSerifText = styled(Typography)`
  font-family: sans-serif;
`;

export default function ProConSection({ className, monkey }) {
    const mobile = useSelector(getMobile);
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <TitleContainer
                container
                direction="column"
                alignItems="center"
                justifyContent="center"
                spacing={2}
                data-dm={darkMode}
                className={className}
            >
                <Grid item>
                    <Typography variant="h3">
                        View Descriptive Information
                    </Typography>
                    <br />
                    <SansSerifText variant="h6">
                        On Monkeys and Heroes
                    </SansSerifText>
                    <SansSerifText variant="h6">
                        With the pros and cons of each tower and/or ability path
                    </SansSerifText>
                </Grid>
                <GridItem item>
                    <ProConContainer>
                        <ProsCons pros={monkey.pros} cons={monkey.cons} />
                    </ProConContainer>
                </GridItem>
            </TitleContainer>
        </>
    )

}
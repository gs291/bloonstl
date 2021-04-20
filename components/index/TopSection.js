import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Grid, Typography} from "@material-ui/core";

import siteSizes from "../../lib/utils/siteSizes";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";
import ScrollIndicator from "../scroll-indicator/ScrollIndicator";

const TitleContainer = styled(Grid)`
  height: calc(100vh - ${siteSizes.nav.height});
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
  text-align: center;
  transition: 0.3s;
`;

const AboveCenter = styled(Grid)`
  flex: 1;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WideGrid = styled(Grid)`
  width: 100%;
`;

const SansSerifText = styled(Typography)`
  font-family: sans-serif;
`;

export default function TopSection({className, scrollTo}) {
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <TitleContainer
                container
                direction="column"
                alignItems="center"
                justify="space-between"
                data-dm={darkMode}
                className={className}
            >
                <AboveCenter item>
                    <Typography variant="h2">
                        Bloons.GG
                    </Typography>
                    <br />
                    <SansSerifText variant="h4">
                        The Community Driven
                    </SansSerifText>
                    <SansSerifText variant="h4">
                        Tier List for Bloons TD 6
                    </SansSerifText>
                </AboveCenter>
                <WideGrid item>
                    <ScrollIndicator scrollTo={scrollTo}/>
                </WideGrid>
            </TitleContainer>
        </>
    )
}
import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Grid, Typography} from "@material-ui/core";

import TopBackground from "./TopBackground";
import siteSizes from "../../lib/utils/siteSizes";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";
import ScrollIndicator from "../scroll-indicator/ScrollIndicator";

const TitleContainer = styled(Grid)`
  height: calc(100vh - ${siteSizes.nav.height});
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
  text-align: center;
  transition: 0.3s;
  
  position: relative;
`;

const AboveCenter = styled(Grid)`
  flex: 1;
  
  margin: auto 0;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  position: absolute;
  width: 100%;
  height: 100%;
`;

const TextContainer = styled.div`
  margin-bottom: 150px;
`;

const BackgroundContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const WideGrid = styled(Grid)`
  position: absolute;
  width: 100%;
  height: 100%;
  display: grid;
`;

const SansSerifText = styled(Typography)`
  font-family: sans-serif;
`;

const ScrollContainer = styled.div`
  display: grid;
  margin-top: auto;
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
                <BackgroundContainer>
                    <TopBackground />
                </BackgroundContainer>
                <AboveCenter item>
                    <TextContainer>
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
                    </TextContainer>
                </AboveCenter>
                <WideGrid item>
                    <ScrollContainer>
                        <ScrollIndicator scrollTo={scrollTo}/>
                    </ScrollContainer>
                </WideGrid>
            </TitleContainer>
        </>
    )
}
import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Grid, Typography} from "@mui/material";

import TopBackground from "./TopBackground";
import siteSizes from "../../lib/utils/siteSizes";
import siteColors from "../../lib/utils/siteColors";
import {globalOptions} from "../../lib/utils/emotionStyled";
import {getDarkMode, getMobile} from "../../lib/redux/selectors";
import ScrollIndicator from "../scroll-indicator/ScrollIndicator";


const TitleContainer = styled(Grid, globalOptions)`
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

const TextContainer = styled("div")`
  margin-bottom: 15%;
`;

const BackgroundContainer = styled("div")`
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

const ScrollContainer = styled("div")`
  display: grid;
  margin-top: auto;
`;


/**
 * Home page top introduction
 *
 * @param {Object} props Component props
 * @param {string} [props.className] class to apply to the component
 * @param {RefObject<HTMLDivElement>|null} props.scrollTo React reference to the top of the home page sections
 */
export default function TopSection({className, scrollTo}) {
    const mobile = useSelector(getMobile);
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <TitleContainer
                container
                direction="column"
                alignItems="center"
                justifyContent="space-between"
                data-dm={darkMode}
                className={className}
            >
                <BackgroundContainer>
                    <TopBackground />
                </BackgroundContainer>
                <AboveCenter item>
                    <TextContainer>
                        <Typography variant={mobile ? "h2" : "h1"} component="h1">
                            BLOONS TL
                        </Typography>
                        <br />
                        <SansSerifText variant="h4" component="h2">
                            The Tier List Website
                        </SansSerifText>
                        <SansSerifText variant="h4" component="h2">
                            For Bloons TD 6
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
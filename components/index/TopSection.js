import {useSelector} from "react-redux";
import {styled} from "@mui/material/styles";
import {Grid, Typography} from "@mui/material";

import TopBackground from "./TopBackground";
import siteSizes from "../../lib/utils/siteSizes";
import {getMobile} from "../../lib/redux/selectors";
import ScrollIndicator from "../scroll-indicator/ScrollIndicator";


const TitleContainer = styled(Grid)`
  height: calc(100vh - ${siteSizes.nav.height});
  color: ${props => props.theme.palette.text.primary};
  text-align: center;
  
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

    return (
        <>
            <TitleContainer
                container
                direction="column"
                alignItems="center"
                justifyContent="space-between"
                className={className}
            >
                <BackgroundContainer>
                    <TopBackground />
                </BackgroundContainer>
                <AboveCenter item>
                    <TextContainer>
                        <Typography variant={mobile ? "h2" : "h1"} component="h1">
                            BLOONS.GG
                        </Typography>
                        <br />
                        <SansSerifText variant="h4" component="h2">
                            The Bloons TD 6 Informational
                        </SansSerifText>
                        <SansSerifText variant="h4" component="h2">
                            and Builder Website
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
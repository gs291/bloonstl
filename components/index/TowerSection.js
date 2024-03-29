import {useSelector} from "react-redux";
import {styled} from "@mui/material/styles";
import {Grid, Typography} from "@mui/material";

import ProsCons from "../tower/ProsCons";
import TowerCard from "../tower/TowerCard";
import TowerText from "../tower/TowerText";
import {getMobile} from "../../lib/redux/selectors";
import AbilityPathText from "../tower/AbilityPathText";
import {globalOptions} from "../../lib/utils/emotionStyled";


const TitleContainer = styled(Grid, globalOptions)`
  min-height: 375px;
  padding: ${props => props["data-m"] ? 1 : 3}em;
  color: ${props => props.theme.palette.text.primary};
  text-align: center;
`;

const CenteredText = styled(TowerText)`
  text-align: center;
`;

const PathText = styled(TowerText)`
  margin-bottom: 15px;
`;

const ProConContainer = styled("div")`
  width: 100%;
`;

/**
 * Home page tower section
 *
 * @param {Object} props Component props
 * @param {string} [props.className] class to apply to the component
 * @param {Object} props.monkey The current monkey in rotation
 * @param {RefObject<HTMLDivElement>|null} props.scrollTo React reference to the top of the home page sections
 */
export default function TowerSection({className, monkey, scrollTo}) {
    const mobile = useSelector(getMobile);

    return (
        <>
            <div ref={scrollTo}/>
            <CenteredText variant={mobile ? "h2" : "h1"} component="h3">
                Browse Towers
            </CenteredText>
            <CenteredText variant="h4" font={true}>
                From Monkeys and Heroes to Bloons
            </CenteredText>
            <CenteredText variant="h4" font={true}>
                And View Many Stats That Are Missing In-Game.
            </CenteredText>
            {mobile && (<br />)}
            <TitleContainer
                container
                direction={mobile ? "column": "row"}
                alignItems="center"
                justifyContent="space-evenly"
                spacing={2}
                columns={16}
                className={className}
                data-m={mobile}
            >
                <Grid item xs={6}>
                    <TowerCard tower={monkey} towerType="monkey" />
                </Grid>
                <Grid item xs={6}>
                    <PathText variant={mobile ? "h5" : "h4"}>
                        5★ Ability Path:
                    </PathText>
                    <AbilityPathText path={monkey} towerType="monkey"/>
                </Grid>
            </TitleContainer>
            <ProConContainer>
                <ProsCons pros={monkey.pros} cons={monkey.cons} />
            </ProConContainer>
        </>
    )

}
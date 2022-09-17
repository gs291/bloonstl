import {useState} from "react";
import {useSelector} from "react-redux";
import {styled} from "@mui/material/styles";
import {useTheme} from "@mui/material/styles";

import Counter from "../tower/Counter";
import Stats from "../statistics/Stats";
import ProsCons from "../tower/ProsCons";
import TowerText from "../tower/TowerText";
import SandboxMode from "../filters/SandboxMode";
import TowerImgInfo from "../tower/TowerImgInfo";
import FixedDivider from "../divider/FixedDivider";
import {getMobile} from "../../lib/redux/selectors";
import HeroAbilities from "../abilities/HeroAbilities";
import AbilityPathText from "../tower/AbilityPathText";
import FilterDifficulty from "../filters/FilterDifficulty";
import TowerPatchUpdates from "../patch-notes/TowerPatchUpdates";
import StatAbilitiesWrapper from "../statistics/StatAbilitiesWrapper";
import {getHeroColor, getInitialTowerStats} from "../../lib/utils/utils";
import ConsecutiveSnackbars from "../snackbar/ConsecutiveSnackbars";


const FilterDiff = styled(FilterDifficulty)`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Title = styled(TowerText)`
  margin-top: 10px;
  margin-bottom: 20px;
  text-align: center;
  cursor: default;
`;

const AbilitiesCaptionText = styled(TowerText)`
  text-align: center;
  margin-bottom: 40px;
`;

const PatchText = styled(TowerText)`
  margin-top: 20px;
  text-align: center;
  cursor: default;
`;

const AbilityPText = styled(AbilityPathText)`
  margin-bottom: 15px;
`;

const Abilities = styled(HeroAbilities)`
  margin-bottom: 30px;
`;

const PathXPCost = styled(TowerText)`
  cursor: default;
`;

const Border = styled(FixedDivider)`
  margin-top: 50px;
  margin-bottom: 50px;
`;

const LevelText = styled("div")`
  ${props => props.theme.palette.mode === "light" && `text-shadow: 5px 5px 10px ${props.theme.palette.text.primary};`};
  margin-bottom: 40px;
`;

/**
 * Individual Hero Page
 *
 * @param {Object} props Component props
 * @param {Object} props.hero Object containing all the hero data
 */
export default function HeroPage({ hero }) {
    const theme = useTheme();
    const mobile = useSelector(getMobile);
    const dividerBackgroundColor = getHeroColor(hero.name, theme);

    const [ path, setPath ] = useState(9);
    const [ sandbox, setSandbox ] = useState(false);
    const [ pauseSandbox, setPauseSandbox ] = useState(false);
    const [ stats, setStats ] = useState(getInitialTowerStats(hero.stats, {pros: hero.info.pros, cons: hero.info.cons}));

    const [ snackPack, setSnackPack ] = useState([]);
    const [ openSnackbar, setOpenSnackbar ] = useState(false);
    const [ messageInfo, setMessageInfo ] = useState(undefined);

    const handlePathReset = () => {
        setPath(0);
    };


    return (
        <>
            <TowerImgInfo tower={hero} towerType="hero" />
            <Border width={100} backgroundColor={dividerBackgroundColor}/>
            <Title variant={mobile ? "h3" : "h2"}>
                Hero Abilities
            </Title>
            <AbilitiesCaptionText variant={mobile ? "h6" : "h5"} sx={{maxWidth: mobile ? "100%" : "55%"}} font>
                View highly rated ability paths or set your own path and view its changes! (via Sandbox Mode)
            </AbilitiesCaptionText>
            <LevelText>
                <AbilityPText path={{"top_path": path + 1}} towerType="hero" textColor={dividerBackgroundColor} />
                <PathXPCost variant={mobile ? "h6" : "h4"} textColor={dividerBackgroundColor}>
                    Path XP Required:&nbsp;&nbsp;<Counter cost={stats.xp} gold={false}/>
                </PathXPCost>
            </LevelText>
            <SandboxMode
                sandbox={sandbox} setSnackPack={setSnackPack}
                setSandbox={setSandbox} pauseSandbox={pauseSandbox} setPauseSandbox={setPauseSandbox}
                color={dividerBackgroundColor} handleReset={handlePathReset} towerType="hero"
            />
            <Abilities
                abilities={hero.abilities} heroName={hero.name} heroFile={hero.filename}
                defaultStats={hero.stats} setStats={setStats} color={dividerBackgroundColor}
                path={path} initialPros={hero.info.pros} initialCons={hero.info.cons} setPath={sandbox && !pauseSandbox && setPath}
            />
            <Border width={100} backgroundColor={dividerBackgroundColor}/>
            <Title variant={mobile ? "h3" : "h2"}>
                Tower Pros / Cons
            </Title>
            <ProsCons pros={stats.pros} cons={stats.cons} backgroundColor={dividerBackgroundColor}/>
            <Border width={100} backgroundColor={dividerBackgroundColor}/>
            <StatAbilitiesWrapper stats={stats} dividerBackgroundColor={dividerBackgroundColor} towerType="hero" type={hero.name} />
            <Border width={100} backgroundColor={dividerBackgroundColor}/>
            <Title variant={mobile ? "h3" : "h2"}>
                Tower Statistics
            </Title>
            <Stats stats={stats} path={path} type={hero.name} towerType="hero" />
            <Border width={100} backgroundColor={dividerBackgroundColor}/>
            <FilterDiff color={dividerBackgroundColor}/>
            <Border width={100} backgroundColor={dividerBackgroundColor}/>
            <PatchText variant={mobile ? "h3" : "h2"}>
                Latest
            </PatchText>
            <Title variant={mobile ? "h3" : "h2"}>
                Patch Updates
            </Title>
            <TowerPatchUpdates name={hero.name} borderColor={dividerBackgroundColor} />
            <ConsecutiveSnackbars
                snackPack={snackPack} setSnackPack={setSnackPack}
                open={openSnackbar} setOpen={setOpenSnackbar}
                messageInfo={messageInfo} setMessageInfo={setMessageInfo}
            />
        </>
    );
}


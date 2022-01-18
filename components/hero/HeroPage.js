import {useState} from "react";
import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import Counter from "../tower/Counter";
import Stats from "../statistics/Stats";
import ProsCons from "../tower/ProsCons";
import TierText from "../tower/TierText";
import TowerText from "../tower/TowerText";
import SandboxMode from "../filters/SandboxMode";
import TierPathText from "../tower/TierPathText";
import TowerImgInfo from "../tower/TowerImgInfo";
import FixedDivider from "../divider/FixedDivider";
import {getMobile} from "../../lib/redux/selectors";
import HeroAbilities from "../abilities/HeroAbilities";
import HorizontalAD from "../advertisment/HorizontalAD";
import FilterDifficulty from "../filters/FilterDifficulty";
import {globalOptions} from "../../lib/utils/emotionStyled";
import TowerPatchUpdates from "../patch-notes/TowerPatchUpdates";
import StatAbilitiesWrapper from "../statistics/StatAbilitiesWrapper";
import {getHeroColor, getInitialTowerStats} from "../../lib/utils/utils";


const FilterDiff = styled(FilterDifficulty)`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Title = styled(TowerText)`
  margin-top: 10px;
  margin-bottom: 30px;
  text-align: center;
  cursor: default;
`;

const SmallTitle = styled(TowerText)`
  margin-top: 10px;
  text-align: center;
  cursor: default;
`;

const Sandbox = styled(SandboxMode)`
  margin-top: ${props => props.sandbox ? 0 : 40}px;
  margin-bottom: 15px;
`;

const PatchText = styled(TowerText)`
  margin-top: 20px;
  text-align: center;
  cursor: default;
`;

const TierPText = styled(TierPathText)`
  margin-top: 10px;
  margin-bottom: 15px;
`;

const Abilities = styled(HeroAbilities)`
  margin-bottom: 30px;
`;

const PathXPCost = styled(TowerText)`
  margin-bottom: 20px;
`;

const HeroTier = styled("div", globalOptions)`
  display: flex;
  flex-direction: ${props => props["data-m"] ? "column" : "row"};
  width: ${props => props["data-m"] ? 100 : 80}%;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export default function HeroPage({ hero }) {
    const mobile = useSelector(getMobile);
    const dividerBackgroundColor = getHeroColor(hero.name);

    const [ path, setPath ] = useState(0);
    const [ sandbox, setSandbox ] = useState(false);
    const [ pauseSandbox, setPauseSandbox ] = useState(false);
    const [ stats, setStats ] = useState(getInitialTowerStats(hero.stats, {pros: hero.info.pros, cons: hero.info.cons}));

    const handlePathReset = () => {
        setPath(0);
    };


    return (
        <>
            <TowerImgInfo tower={hero} towerType="hero" />
            <HorizontalAD />
            <Stats stats={stats} path={path} type={hero.name} towerType="hero" />
            <FixedDivider width={100} backgroundColor={dividerBackgroundColor}/>
            <FilterDiff color={dividerBackgroundColor}/>
            <FixedDivider width={100} backgroundColor={dividerBackgroundColor}/>
            <SmallTitle variant={mobile ? "h4" : "h3"}>
                Ability Path Level
            </SmallTitle>
            <HeroTier data-m={mobile}>
                <TierText tier={hero.tier} text="Tower Tier" showText />
                <TierPText tier={hero.tier} tiers={{"top_path": path + 1}} towerType="hero" />
            </HeroTier>
            <FixedDivider width={100} backgroundColor={dividerBackgroundColor}/>
            <Title variant={mobile ? "h4" : "h3"}>
                Hero Level Abilities
            </Title>
            <PathXPCost variant={mobile ? "h6" : "h4"}>
                Path XP Required:&nbsp;&nbsp;<Counter cost={stats.xp} />
            </PathXPCost>
            <Abilities
                abilities={hero.abilities} heroName={hero.name} heroFile={hero.filename}
                defaultStats={hero.stats} setStats={setStats} tier={hero.tier}
                path={path} initialPros={hero.info.pros} initialCons={hero.info.cons} setPath={sandbox && !pauseSandbox && setPath}
            />
            <Sandbox sandbox={sandbox} setSandbox={setSandbox} pauseSandbox={pauseSandbox} setPauseSandbox={setPauseSandbox} tier={hero.tier} handleReset={handlePathReset} towerType="hero"/>
            <StatAbilitiesWrapper stats={stats} dividerBackgroundColor={dividerBackgroundColor} towerType="hero" type={hero.name} />
            <FixedDivider width={100} backgroundColor={dividerBackgroundColor}/>
            <Title variant={mobile ? "h4" : "h3"}>
                Tower Pros / Cons
            </Title>
            <ProsCons pros={stats.pros} cons={stats.cons} backgroundColor={dividerBackgroundColor}/>
            <FixedDivider width={100} backgroundColor={dividerBackgroundColor}/>
            <PatchText variant={mobile ? "h4" : "h3"}>
                Latest
            </PatchText>
            <Title variant={mobile ? "h4" : "h3"}>
                Patch Updates
            </Title>
            <TowerPatchUpdates name={hero.name} borderColor={dividerBackgroundColor} />
            <HorizontalAD />
        </>
    );
}


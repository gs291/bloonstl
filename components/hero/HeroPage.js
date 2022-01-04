import {useState} from "react";
import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import Stats from "../statistics/Stats";
import ProsCons from "../tower/ProsCons";
import TowerText from "../tower/TowerText";
import TierPathText from "../tower/TierPathText";
import TowerImgInfo from "../tower/TowerImgInfo";
import FixedDivider from "../divider/FixedDivider";
import {getMobile} from "../../lib/redux/selectors";
import SandboxSwitch from "../filters/SandboxSwitch";
import HeroAbilities from "../abilities/HeroAbilities";
import HorizontalAD from "../advertisment/HorizontalAD";
import FilterDifficulty from "../filters/FilterDifficulty";
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

const SandboxMode = styled(SandboxSwitch)`
  margin-bottom: 15px;
`;

const TierText = styled(TierPathText)`
  margin-top: 10px;
  margin-bottom: 15px;
`;

const Abilities = styled(HeroAbilities)`
  margin-bottom: 30px;
`

export default function HeroPage({ hero }) {
    const mobile = useSelector(getMobile);
    const dividerBackgroundColor = getHeroColor(hero.name);

    const [ path, setPath ] = useState(0);
    const [ sandbox, setSandbox ] = useState(false);
    const [ pauseSandbox, setPauseSandbox ] = useState(false);
    const [ stats, setStats ] = useState(getInitialTowerStats(hero.stats));

    const handlePathReset = () => {
        setPath(0);
    }

    return (
        <>
            <TowerImgInfo tower={hero} towerType="hero" />
            <HorizontalAD />
            <Stats stats={stats} type={hero.name} towerType="hero" />
            <FixedDivider width={100} backgroundColor={dividerBackgroundColor}/>
            <FilterDiff color={dividerBackgroundColor}/>
            <FixedDivider width={100} backgroundColor={dividerBackgroundColor}/>
            <SmallTitle variant={mobile ? "h5" : "h4"}>
                Ability Path Level
            </SmallTitle>
            <TierText tier={hero.tier} tiers={{"top_path": path + 1}} towerType="hero" />
            <FixedDivider width={100} backgroundColor={dividerBackgroundColor}/>
            <Title variant={mobile ? "h5" : "h4"}>
                Hero Level Abilities
            </Title>
            <Abilities
                abilities={ hero.abilities } heroFile={ hero.filename }
                defaultStats={hero.stats} setStats={setStats}
                path={path} setPath={sandbox && !pauseSandbox && setPath}
            />
            <SandboxMode sandbox={sandbox} setSandbox={setSandbox} pauseSandbox={pauseSandbox} setPauseSandbox={setPauseSandbox} tier={hero.tier} handleReset={handlePathReset} towerType="hero"/>
            <StatAbilitiesWrapper stats={stats} dividerBackgroundColor={dividerBackgroundColor} towerType="hero" type={hero.name} />
            <FixedDivider width={100} backgroundColor={dividerBackgroundColor}/>
            <Title variant={mobile ? "h5" : "h4"}>
                Tower Pros / Cons
            </Title>
            <ProsCons pros={hero.info.pros} cons={hero.info.cons} backgroundColor={dividerBackgroundColor}/>
            <HorizontalAD />
        </>
    );
}


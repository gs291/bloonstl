import styled from "@emotion/styled";

import ProsCons from "../tower/ProsCons";
import TowerText from "../tower/TowerText";
import TowerImgInfo from "../tower/TowerImgInfo";
import FixedDivider from "../divider/FixedDivider";
import {getHeroColor, getInitialTowerStats} from "../../lib/utils/utils";
import HeroAbilities from "../abilities/HeroAbilities";
import HorizontalAD from "../advertisment/HorizontalAD";
import FilterDifficulty from "../filters/FilterDifficulty";
import Stats from "../statistics/Stats";
import {useState} from "react";
import StatsAbilities from "../statistics/StatsAbilities";
import {useSelector} from "react-redux";
import {getMobile} from "../../lib/redux/selectors";
import SandboxSwitch from "../filters/SandboxSwitch";
import TierPathText from "../tower/TierPathText";


const FilterDiff = styled(FilterDifficulty)`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const TitleOnTop = styled(TowerText)`
  margin-top: 10px;
  text-align: center;
  cursor: default;
`;

const Title = styled(TowerText)`
  margin-top: 10px;
  margin-bottom: 30px;
  text-align: center;
  cursor: default;
`;

const Abilities = styled(HeroAbilities)`
  margin-bottom: 20px;
`

export default function HeroPage({ hero }) {
    const mobile = useSelector(getMobile);
    const dividerBackgroundColor = getHeroColor(hero.name);

    const [ path, setPath ] = useState(0);
    const [ sandbox, setSandbox ] = useState(false);
    const [ stats, setStats ] = useState(getInitialTowerStats(hero.stats));


    return (
        <>
            <TowerImgInfo tower={hero} towerType="hero" />
            <HorizontalAD />
            {stats && (
                <Stats stats={stats} type={hero.name} towerType="hero" />
            )}
            <FixedDivider width={100} backgroundColor={dividerBackgroundColor}/>
            <FilterDiff color={dividerBackgroundColor}/>
            <FixedDivider width={100} backgroundColor={dividerBackgroundColor}/>
            <TierPathText tier={hero.tier} tiers={{"top_path": path + 1}} towerType="hero" />
            <SandboxSwitch sandbox={sandbox} setSandbox={setSandbox} />
            <FixedDivider width={100} backgroundColor={dividerBackgroundColor}/>
            <Abilities
                abilities={ hero.abilities } heroFile={ hero.filename }
                defaultStats={hero.stats} setStats={setStats} sandbox={sandbox}
                path={path} setPath={setPath}
            />
            {stats && ((Object.keys(stats.abils).length > 0
                || Object.keys(stats.attacks).length > 0
                || Object.keys(stats.buffs).length > 0
                || Object.keys(stats.statuses).length > 0)) && (
                <>
                    <FixedDivider width={100} backgroundColor={dividerBackgroundColor}/>
                    <TitleOnTop variant={mobile ? "h5" : "h4"}>
                        Ability Path
                    </TitleOnTop>
                    <Title variant={mobile ? "h5" : "h4"}>
                        Abilities / Attacks / Buffs / Statuses
                    </Title>
                    <StatsAbilities stats={stats}/>
                </>
            )}
            <FixedDivider width={100} backgroundColor={dividerBackgroundColor}/>
            <Title variant={mobile ? "h5" : "h4"}>
                Ability Path Pros / Cons
            </Title>
            <ProsCons pros={hero.info.pros} cons={hero.info.cons} backgroundColor={dividerBackgroundColor}/>
            <HorizontalAD />
        </>
    );
}


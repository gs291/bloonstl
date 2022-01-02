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

export default function HeroPage({ hero }) {
    const mobile = useSelector(getMobile);
    const dividerBackgroundColor = getHeroColor(hero.name);
    const [ stats, setStats ] = useState(getInitialTowerStats(hero.stats));

    const abilLength = Object.keys(stats.abils).length;
    const attkLength = Object.keys(stats.attacks).length;
    const buffLength = Object.keys(stats.buffs).length;
    const statusLength = Object.keys(stats.statuses).length;

    return (
        <>
            <TowerImgInfo tower={hero} towerType="hero" />
            <HorizontalAD />
            <Stats stats={stats} type={hero.name} towerType="hero" />
            <FixedDivider width={100} backgroundColor={dividerBackgroundColor}/>
            <FilterDiff color={dividerBackgroundColor}/>
            <FixedDivider width={100} backgroundColor={dividerBackgroundColor}/>
            <HeroAbilities abilities={ hero.abilities } heroFile={ hero.filename } setStats={setStats}/>
            {(abilLength > 0 || attkLength > 0 || buffLength > 0 || statusLength > 0) && (
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


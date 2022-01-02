import {useState} from "react";
import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import Counter from "../tower/Counter";
import Stats from "../statistics/Stats";
import ProsCons from "../tower/ProsCons";
import TowerText from "../tower/TowerText";
import TowerImgInfo from "../tower/TowerImgInfo";
import FixedDivider from "../divider/FixedDivider";
import {getMobile} from "../../lib/redux/selectors";
import HorizontalAD from "../advertisment/HorizontalAD";
import FilterDifficulty from "../filters/FilterDifficulty";
import MonkeyAbilities from "../abilities/MonkeyAbilities";
import FilterPagination from "../filters/FilterPagination";
import AbilityPathSelection from "../ability/AbilityPathSelection";
import StatAbilitiesWrapper from "../statistics/StatAbilitiesWrapper";
import {getInitialTowerStats, getMonkeyColor} from "../../lib/utils/utils";

const TotalCost = styled(TowerText)`
  margin-top: 10px;
  cursor: default;
`;

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

export default function MonkeyPage({ monkey }) {
    const mobile = useSelector(getMobile);
    const [ tier, setTier ] = useState("s");
    const [ page, setPage ] = useState(1);
    const [ stats, setStats ] = useState(getInitialTowerStats(monkey.stats));

    const handleTier = (_, r) => {
        setPage(1);
        setTier(r);
    };
    const handlePage = (_, p) => {
        setPage(p);
    }

    const dividerBackgroundColor = getMonkeyColor(monkey.type);

    const tiers = monkey.tiers[tier][page-1];

    return (
        <>
            <TowerImgInfo tower={monkey} towerType="monkey"/>
            <HorizontalAD />
            <Stats stats={stats} type={monkey.type} />
            <FixedDivider width={100} backgroundColor={dividerBackgroundColor}/>
            <FilterDiff color={dividerBackgroundColor}/>
            <FixedDivider width={100} backgroundColor={dividerBackgroundColor}/>
            <AbilityPathSelection tier={tier} tiers={tiers} handleTier={handleTier} />
            <FixedDivider width={100} backgroundColor={dividerBackgroundColor}/>
            <TotalCost variant={mobile ? "h5" : "h4"}>
                Ability Path Cost: $<Counter cost={stats.cost} />
            </TotalCost>
            <MonkeyAbilities
                abilities={monkey.abilities}
                monkeyFile={monkey.filename}
                tier={tier} tiers={tiers}
                stats={monkey.stats} setStats={setStats}
            />
            <FilterPagination pageCount={monkey.tiers[tier].length} page={page} handlePage={handlePage} />
            <StatAbilitiesWrapper stats={stats} dividerBackgroundColor={dividerBackgroundColor} />
            <FixedDivider width={100} backgroundColor={dividerBackgroundColor}/>
            <Title variant={mobile ? "h5" : "h4"}>
                Ability Path Pros / Cons
            </Title>
            <ProsCons pros={tiers.pros} cons={tiers.cons} backgroundColor={dividerBackgroundColor}/>
            <HorizontalAD />
        </>
    );
}


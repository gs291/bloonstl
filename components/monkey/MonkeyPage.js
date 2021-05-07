import {useState} from "react";
import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import Votes from "../tower/Votes";
import Counter from "../tower/Counter";
import ProsCons from "../tower/ProsCons";
import TierTitle from "../tower/TierTitle";
import TowerText from "../tower/TowerText";
import FilterTiers from "../filters/FilterTiers";
import TowerImgInfo from "../tower/TowerImgInfo";
import FixedDivider from "../divider/FixedDivider";
import {getMobile} from "../../lib/redux/selectors";
import {getMonkeyColor} from "../../lib/utils/utils";
import FilterDifficulty from "../filters/FilterDifficulty";
import MonkeyAbilities from "../abilities/MonkeyAbilities";
import FilterPagination from "../filters/FilterPagination";

const TotalCost = styled(TowerText)`
  margin-top: 10px;
`;

const Filters = styled.div`
  display: flex;
  flex-direction: ${props => props["data-m"] ? "column-reverse" : "row"};
  width: ${props => props["data-m"] ? 100 : 80}%;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const FilterDiff = styled(FilterDifficulty)`
  ${props => props["data-m"] ? "margin-bottom: 10px;" : ""};
`;

export default function MonkeyPage({ monkey }) {
    const mobile = useSelector(getMobile);
    const [ tier, setTier ] = useState("s");
    const [ page, setPage ] = useState(1);
    const [ totalCost, setTotalCost ] = useState(0);

    const handleTier = (_, r) => {
        setPage(1);
        setTier(r);
    };
    const handlePage = (_, p) => {
        setPage(p);
    }
    const updateTotalCost = (cost) => setTotalCost(cost);

    const dividerBackgroundColor = getMonkeyColor(monkey.type);

    const tiers = monkey.tiers[tier][page-1];
    return (
        <>
            <TowerImgInfo tower={monkey} towerType="monkey"/>
            <FixedDivider width={80} backgroundColor={dividerBackgroundColor}/>
            <Filters data-m={mobile}>
                <FilterTiers handleTier={handleTier} />
                <FilterDiff data-m={mobile}/>
            </Filters>
            <FixedDivider width={80} backgroundColor={dividerBackgroundColor}/>
            <TierTitle tier={tier} tiers={tiers} totalCost={totalCost} backgroundColor={dividerBackgroundColor}/>
            <FixedDivider width={80} backgroundColor={dividerBackgroundColor}/>
            <TotalCost variant={mobile ? "h5" : "h4"}>
                Path Cost: $<Counter cost={totalCost} />
            </TotalCost>
            <MonkeyAbilities abilities={monkey.abilities} monkeyFile={monkey.filename} tier={tier} tiers={tiers} updateCost={updateTotalCost}/>
            <Votes votes={tiers.votes} />
            <FilterPagination pageCount={monkey.tiers[tier].length} page={page} handlePage={handlePage} />
            <FixedDivider width={80} backgroundColor={dividerBackgroundColor}/>
            <ProsCons pros={tiers.pros} cons={tiers.cons} backgroundColor={dividerBackgroundColor}/>
        </>
    );
}


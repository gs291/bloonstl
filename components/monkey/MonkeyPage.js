import {useState} from "react";
import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import Votes from "../tower/Votes";
import Counter from "../tower/Counter";
import ProsCons from "../tower/ProsCons";
import RankTitle from "../tower/RankTitle";
import TowerText from "../tower/TowerText";
import FilterRanks from "../filters/FilterRanks";
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
    const [ rank, setRank ] = useState("s");
    const [ page, setPage ] = useState(1);
    const [ totalCost, setTotalCost ] = useState(0);

    const handleRank = (_, r) => {
        setPage(1);
        setRank(r);
    };
    const handlePage = (_, p) => {
        setPage(p);
    }
    const updateTotalCost = (cost) => setTotalCost(cost);

    const dividerBackgroundColor = getMonkeyColor(monkey.type);

    const ranks = monkey.ranks[rank][page-1];
    return (
        <>
            <TowerImgInfo tower={monkey} towerType="monkey"/>
            <FixedDivider width={80} backgroundColor={dividerBackgroundColor}/>
            <Filters data-m={mobile}>
                <FilterRanks handleRank={handleRank} />
                <FilterDiff data-m={mobile}/>
            </Filters>
            <FixedDivider width={80} backgroundColor={dividerBackgroundColor}/>
            <RankTitle rank={rank} ranks={ranks} totalCost={totalCost} backgroundColor={dividerBackgroundColor}/>
            <FixedDivider width={80} backgroundColor={dividerBackgroundColor}/>
            <TotalCost variant="h4">
                Path Cost: $<Counter cost={totalCost} />
            </TotalCost>
            <MonkeyAbilities abilities={monkey.abilities} monkeyFile={monkey.filename} rank={rank} ranks={ranks} updateCost={updateTotalCost}/>
            <Votes votes={ranks.votes} />
            <FilterPagination pageCount={monkey.ranks[rank].length} page={page} handlePage={handlePage} />
            <FixedDivider width={80} backgroundColor={dividerBackgroundColor}/>
            <ProsCons pros={ranks.pros} cons={ranks.cons} backgroundColor={dividerBackgroundColor}/>
        </>
    );
}


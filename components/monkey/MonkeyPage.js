import {useState} from "react";
import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import Votes from "../tower/Votes";
import ProsCons from "../tower/ProsCons";
import RankTitle from "../tower/RankTitle";
import TowerText from "../tower/TowerText";
import FilterRanks from "../filters/FilterRanks";
import FixedDivider from "../divider/FixedDivider";
import TowerContainer from "../tower/TowerContainer";
import FilterDifficulty from "../filters/FilterDifficulty";
import MonkeyAbilities from "../abilities/MonkeyAbilities";
import FilterPagination from "../filters/FilterPagination";
import {getDifficulty, getMobile} from "../../lib/redux/selectors";
import {getMonkeyTypeColor, goldCost} from "../../lib/utils/utils";

const TotalCost = styled(TowerText)`
  margin-top: 10px;
`;

export default function MonkeyPage({ monkey }) {
    const mobile = useSelector(getMobile);
    const difficulty = useSelector(getDifficulty);
    const [ rank, setRank ] = useState("s");
    const [ page, setPage ] = useState(1);
    const [ totalCost, setTotalCost ] = useState("");

    const Filters = styled.div`
      display: flex;
      flex-direction: ${mobile ? "column-reverse" : "row"};
      width: ${mobile ? 100 : 80}%;
      justify-content: space-evenly;
      align-items: center;
    `;

    const FilterDiff = styled(FilterDifficulty)`
      ${mobile ? "margin-bottom: 10px;" : ""};
    `;

    const handleRank = (_, r) => {
        setTotalCost("");
        setPage(1);
        setRank(r);
    };
    const handlePage = (_, p) => {
        setTotalCost("");
        setPage(p);
    }
    const updateTotalCost = (cost) => setTotalCost(goldCost(cost, difficulty));

    const dividerBackgroundColor = getMonkeyTypeColor(monkey.type);

    const ranks = monkey.ranks[rank][page-1];
    return (
        <>
            <TowerContainer tower={monkey} towerType="monkey"/>
            <FixedDivider width={80} backgroundColor={dividerBackgroundColor}/>
            <Filters >
                <FilterRanks handleRank={handleRank} />
                <FilterDiff />
            </Filters>
            <FixedDivider width={80} backgroundColor={dividerBackgroundColor}/>
            <RankTitle rank={rank} ranks={ranks} totalCost={totalCost} backgroundColor={dividerBackgroundColor}/>
            <FixedDivider width={80} backgroundColor={dividerBackgroundColor}/>
            <ProsCons pros={ranks.pros} cons={ranks.cons} backgroundColor={dividerBackgroundColor}/>
            <FixedDivider width={80} backgroundColor={dividerBackgroundColor}/>
            <TotalCost variant="h4">
                ${totalCost}
            </TotalCost>
            <MonkeyAbilities abilities={monkey.abilities} monkeyFile={monkey.filename} rank={rank} ranks={ranks} updateCost={updateTotalCost}/>
            <Votes votes={ranks.votes} />
            <FilterPagination pageCount={monkey.ranks[rank].length} page={page} handlePage={handlePage} />
        </>
    );
}


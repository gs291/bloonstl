import {useState} from "react";
import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import Votes from "../tower/Votes";
import ProsCons from "../tower/ProsCons";
import RankTitle from "../tower/RankTitle";
import FilterRanks from "../filters/FilterRanks";
import FixedDivider from "../divider/FixedDivider";
import {getMobile} from "../../lib/redux/selectors";
import TowerContainer from "../tower/TowerContainer";
import {getMonkeyTypeColor} from "../../lib/utils/utils";
import FilterDifficulty from "../filters/FilterDifficulty";
import MonkeyAbilities from "../abilities/MonkeyAbilities";
import FilterPagination from "../filters/FilterPagination";


export default function MonkeyPage({ monkey }) {
    const mobile = useSelector(getMobile);
    const [ rank, setRank ] = useState("s");
    const [ page, setPage ] = useState(1);

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

    const handleRank = (_, r) => {setPage(1); setRank(r);};
    const handlePage = (_, p) => setPage(p);

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
            <RankTitle rank={rank} ranks={ranks}/>
            <FixedDivider width={80} backgroundColor={dividerBackgroundColor}/>
            <ProsCons pros={ranks.pros} cons={ranks.cons} />
            <FixedDivider width={80} backgroundColor={dividerBackgroundColor}/>
            <MonkeyAbilities abilities={monkey.abilities} monkeyFile={monkey.filename} rank={rank} ranks={ranks}/>
            <Votes votes={ranks.votes} />
            <FilterPagination pageCount={monkey.ranks[rank].length} page={page} handlePage={handlePage} />
        </>
    );
}


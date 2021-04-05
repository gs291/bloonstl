import {useState} from "react";
import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import MonkeyDetailed from "./MonkeyDetailed";
import FilterRanks from "../filters/FilterRanks";
import FixedDivider from "../divider/FixedDivider";
import {getMobile} from "../../lib/redux/selectors";
import TowerContainer from "../tower/TowerContainer";
import {getMonkeyTypeColor} from "../../lib/utils/utils";
import RankTitle from "../../components/monkey/RankTitle";
import FilterDifficulty from "../filters/FilterDifficulty";

export default function MonkeyPage({ monkey }) {
    const mobile = useSelector(getMobile);
    const [ rank, setRank ] = useState("s");

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

    const handleRank = (r) => setRank(r);

    const dividerBackgroundColor = getMonkeyTypeColor(monkey.type);

    return (
        <>
            <TowerContainer tower={monkey} towerType="monkey"/>
            <FixedDivider width={ 80 } backgroundColor={dividerBackgroundColor}/>
            <Filters >
                <FilterRanks rank={ rank } handleRank={ handleRank } />
                <FilterDiff />
            </Filters>
            <FixedDivider width={ 80 } backgroundColor={dividerBackgroundColor}/>
            <RankTitle rank={ rank }  ranks={ monkey.ranks[rank] }/>
            <FixedDivider width={ 80 } backgroundColor={dividerBackgroundColor}/>
            <MonkeyDetailed monkey={ monkey } rank={ rank }/>
        </>
    );
}


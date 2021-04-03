import {useState} from "react";
import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import MonkeyDetailed from "./MonkeyDetailed";
import FilterRanks from "../filters/FilterRanks";
import FixedDivider from "../divider/FixedDivider";
import {getMonkeyTypeColor} from "../../lib/utils";
import {getMobile} from "../../lib/redux/selectors";
import TowerContainer from "../tower/TowerContainer";
import RankTitle from "../../components/monkey/RankTitle";
import FilterDifficulty from "../filters/FilterDifficulty";

const Filters = styled.div`
  display: flex;
  flex-direction: ${props => props.mobile ? "column-reverse" : "row"};
  width: ${props => props.mobile ? 100 : 80}%;
  justify-content: space-evenly;
  align-items: center;
`;

const FilterDiff = styled(FilterDifficulty)`
  ${props => props.mobile ? "margin-bottom: 10px;" : ""};
`;

export default function MonkeyPage({ monkey }) {
    const mobile = useSelector(getMobile);
    const [ rank, setRank ] = useState("s");

    const handleRank = (e, r) => setRank(r);

    const dividerBackgroundColor = getMonkeyTypeColor(monkey.type);

    return (
        <>
            <TowerContainer tower={monkey} towerType="monkey"/>
            <FixedDivider width={ 80 } backgroundColor={dividerBackgroundColor}/>
            <Filters mobile={mobile}>
                <FilterRanks rank={ rank } handleRank={ handleRank } />
                <FilterDiff  mobile={mobile}/>
            </Filters>
            <FixedDivider width={ 80 } backgroundColor={dividerBackgroundColor}/>
            <RankTitle rank={ rank }  ranks={ monkey.rank[rank] }/>
            <FixedDivider width={ mobile ? 80 : 40 } backgroundColor={dividerBackgroundColor}/>
            <MonkeyDetailed monkey={ monkey } rank={ rank }/>
        </>
    );
}


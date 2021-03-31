import {useState} from "react";
import {useSelector} from "react-redux";

import styled from "@emotion/styled";
import MonkeyDetailed from "./MonkeyDetailed";
import FilterRanks from "../filters/FilterRanks";
import FixedDivider from "../divider/FixedDivider";
import {getMobile} from "../../lib/redux/selectors";
import RankTitle from "../../components/monkey/RankTitle";
import FilterDifficulty from "../filters/FilterDifficulty";
import MonkeyContainer from "../../components/monkey/MonkeyContainer";

const Filters = styled.div`
  display: flex;
  flex-direction: ${props => props.mobile ? "column" : "row"};
  width: 80%;
  justify-content: space-evenly;
  ${props => props.mobile ? "align-items: center;" : ""};
`;

const FilterDiff = styled(FilterDifficulty)`
  ${props => props.mobile ? "margin-top: 20px;" : ""};
`;

export default function MonkeyPage({ monkey }) {
    const mobile = useSelector(getMobile);
    const [ rank, setRank ] = useState("s");
    const [ difficulty, setDifficulty ] = useState("medium");

    const handleDifficulty = (event) => setDifficulty(event.target.value);
    const handleRank = (e, r) => setRank(r);

    return (
        <>
            <MonkeyContainer monkey={monkey} difficulty={difficulty}/>
            <FixedDivider width={ mobile ? 100 : 80 }/>
            <Filters mobile={mobile}>
                <FilterRanks rank={ rank } handleRank={ handleRank } />
                <FilterDiff difficulty={difficulty} handleDifficulty={ handleDifficulty } mobile={mobile}/>
            </Filters>
            <FixedDivider width={ mobile ? 100 : 80 }/>
            <RankTitle rank={ rank }  ranks={ monkey.rank[rank] }/>
            <FixedDivider width={ mobile ? 100 : 40 }/>
            <MonkeyDetailed monkey={ monkey } rank={ rank }/>
        </>
    );
}


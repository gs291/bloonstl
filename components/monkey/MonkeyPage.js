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
  flex-direction: row;
  flex-wrap: wrap;
  width: 80%;
  justify-content: space-evenly;
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
            <FixedDivider width={80}/>
            <Filters>
                <FilterRanks rank={ rank } handleRank={ handleRank } />
                <FilterDifficulty difficulty={difficulty} handleDifficulty={ handleDifficulty }/>
            </Filters>
            <FixedDivider width={80}/>
            <RankTitle rank={ rank }  ranks={ monkey.rank[rank] }/>
            <FixedDivider width={50}/>
            <MonkeyDetailed monkey={ monkey } rank={ rank }/>
        </>
    );
}


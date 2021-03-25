import {useState} from "react";
import {useSelector} from "react-redux";
import {Divider} from "@material-ui/core";

import styled from "@emotion/styled";
import MonkeyDetailed from "./MonkeyDetailed";
import FilterRanks from "../filters/FilterRanks";
import {getMobile} from "../../lib/redux/selectors";
import RankTitle from "../../components/monkey/RankTitle";
import FilterDifficulty from "../filters/FilterDifficulty";
import MonkeyContainer from "../../components/monkey/MonkeyContainer";

const MediumDivider = styled(Divider)`
  width: 80%;
  background-color: #ccc;
  margin-top: 10px;
  margin-bottom: 10px;
`;

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
            <MediumDivider/>
            <RankTitle rank={ rank }  ranks={ monkey.rank[rank] }/>
            <MediumDivider/>
            <Filters>
                <FilterRanks rank={ rank } handleRank={ handleRank } />
                <FilterDifficulty difficulty={difficulty} handleDifficulty={ handleDifficulty }/>
            </Filters>
            <MediumDivider/>
            <MonkeyDetailed monkey={ monkey } rank={ rank }/>
        </>
    );
}


import {useState} from "react";
import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {
    Card,
    CardContent,
    Collapse
} from "@material-ui/core";

import Icon from "../tower/Icon";
import MonkeyDetailed from "./MonkeyDetailed";
import {getMobile} from "../../lib/redux/selectors";
import {background, card} from "../../lib/site-colors.json";
import FilterRanks from "./FilterRanks";
import RankTitle from "./RankTitle";

const CardContainer = styled(Card)`
  margin: 5px;
`;

const CardContentContainer = styled(CardContent)`
  display: flex;
  flex-direction: ${props => props.mobile ? "column" : "row"};
  
  background-color: ${ card.dark };
  color: #CCC;

  &:hover{
    cursor: pointer;
    background-color: ${ background.hover.dark };
  }
`;

const BestPath = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const rankColors = (name, hover) => {
    if (name === "s") {
        return hover ? "#FF667F" : "#FF7F7F";
    } else if (name === "a") {
        return hover ? "#FD997F" : "#FFBF7F";
    } else if (name === "b") {
        return hover ? "#FFFF7F" : "#FFDF7F";
    }
    return "#964B00";
}

function handleClick(monkey, updateMonkey, mobile, rank, expand, setExpand) {
    if (updateMonkey) {
        return updateMonkey(<MonkeyDetailed monkey={ monkey } rank={ rank } />);
    }
    if (!mobile) {
        return setExpand(!expand);
    }
}

export default function Monkey({ className, monkey, detailed , updateMonkey}) {
    const [ rank, setRank ] = useState("s");
    const [expand, setExpand] = useState(false);
    const mobile = useSelector(getMobile);

    const handleRank = (e, r) => {
        e.stopPropagation();
        setRank(r);
    }

    monkey.rank = {
        "s": { "topPath": 0, "midPath": 2, "botPath": 5 },
        "a": { "topPath": 5, "midPath": 2, "botPath": 0 },
        "b": { "topPath": 2, "midPath": 5, "botPath": 0 },
        "c": { "topPath": 0, "midPath": 2, "botPath": 5 }
    }

    return (
        <>
            <CardContainer variant="outlined" onClick={() => handleClick(monkey, updateMonkey, mobile, rank, expand, setExpand)} className={className}>
                <CardContentContainer mobile={mobile.toString()}>
                    <Icon tower={ monkey } detailed={detailed}/>
                    <BestPath>
                        <RankTitle rank={ rank }  ranks={ monkey.rank[rank] }/>
                        <FilterRanks rank={ rank } handleRank={ handleRank } />
                    </BestPath>
                    <Collapse in={ detailed || (!mobile && expand) }>
                        <MonkeyDetailed monkey={ monkey } rank={ rank }/>
                    </Collapse>
                </CardContentContainer>
            </CardContainer>
        </>
    );
}
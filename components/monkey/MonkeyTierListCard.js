import {useState} from "react";
import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {
    Card,
    CardContent,
    Collapse
} from "@material-ui/core";

import Icon from "../tower/Icon";
import RankTitle from "./RankTitle";
import {siteColors} from "../../lib/utils";
import MonkeyDetailed from "./MonkeyDetailed";
import FilterRanks from "../filters/FilterRanks";
import {getMobile} from "../../lib/redux/selectors";

const CardContainer = styled(Card)`
  margin: 5px;
`;

const CardContentContainer = styled(CardContent)`
  display: flex;
  flex-direction: ${props => props.mobile ? "column" : "row"};
  
  background-color: ${ siteColors.card.dark };
  color: #CCC;

  &:hover{
    cursor: pointer;
    background-color: ${ siteColors.background.hover.dark };
  }
`;

const BestPath = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;



export default function MonkeyTierListCard({ className, monkey, detailed }) {
    const [ rank, setRank ] = useState("s");
    const [expand, setExpand] = useState(false);
    const mobile = useSelector(getMobile);

    const handleRank = (e, r) => {
        e.stopPropagation();
        setRank(r);
    }


    return (
        <>
            <CardContainer variant="outlined" onClick={() => setExpand(!expand)} className={className}>
                <CardContentContainer mobile={mobile.toString()}>
                    <Icon tower={ monkey } detailed={detailed}/>
                    <BestPath>
                        <RankTitle rank={ rank }  ranks={ monkey.rank[rank] }/>
                        <FilterRanks rank={ rank } handleRank={ handleRank } />
                    </BestPath>
                    <Collapse in={ detailed || expand }>
                        <MonkeyDetailed monkey={ monkey } rank={ rank }/>
                    </Collapse>
                </CardContentContainer>
            </CardContainer>
        </>
    );
}
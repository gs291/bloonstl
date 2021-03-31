import { useState } from "react";
import styled from "@emotion/styled";
import {Grid} from "@material-ui/core";
import {useSelector} from "react-redux";

import {rankColors} from "../../lib/utils";
import TowerCard from "../tower/TowerCard";
import {getMobile} from "../../lib/redux/selectors";
import FiltersTierList from "../filters/FiltersTierList";


const FilterContainer = styled.div`
  margin: 10px 0;
  background-color: #1D1D1D;
  color: white;
`;

const RankTitle = styled(Grid)`
  padding-top: 5px;
  padding-bottom: 5px;
  
  background-color: ${props => rankColors(props.rank)};

  color: #000;
`;

const GridItem = styled(Grid)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default function TierListGrid({ className, monkeys, heroes }) {
    const mobile = useSelector(getMobile);
    const [state, setState] = useState({
        isDetailed: false
    });

    const handleFilter = (event) => { setState({ ...state, [event.target.name]: event.target.checked }); };

    let gridSpacing = 3;
    if (mobile) {
        gridSpacing = 6;
    }

    return (
        <>
            <FilterContainer className={className}>
                <FiltersTierList state={state} handleFilter={handleFilter} />
            </FilterContainer>
            <Grid container spacing={2} direction="column">
                <RankTitle rank="s" item>
                    S Tier
                </RankTitle>
                <GridItem item>
                    { monkeys.map(monkey => (
                        <TowerCard tower={monkey} towerType="monkey" key={monkey.id}/>
                    ))}
                </GridItem>
                <RankTitle rank="a" item>
                    A Tier
                </RankTitle>
                <GridItem item>

                </GridItem>
                <RankTitle rank="b" item>
                    B Tier
                </RankTitle>
                <GridItem item>

                </GridItem>
            </Grid>
        </>
    );
}
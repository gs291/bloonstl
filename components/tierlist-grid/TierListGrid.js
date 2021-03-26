import { useState } from "react";
import styled from "@emotion/styled";
import {Grid} from "@material-ui/core";
import {useSelector} from "react-redux";

import {getMobile} from "../../lib/redux/selectors";
import FiltersTierList from "../filters/FiltersTierList";
import MonkeyTierListCard from "../monkey/MonkeyTierListCard";


const FilterContainer = styled.div`
  margin: 10px 0;
  background-color: #1D1D1D;
  color: white;
`;

const GridItem = styled(Grid)`
  min-height: 260px;
`;


export default function TierListGrid({ className, monkeys, heroes }) {
    const mobile = useSelector(getMobile);
    const [state, setState] = useState({
        isDetailed: false
    });

    const handleFilter = (event) => { setState({ ...state, [event.target.name]: event.target.checked }); };

    let gridSpacing = 6;
    if (mobile) {
        gridSpacing = 12;
    }

    return (
        <>
            <FilterContainer className={className}>
                <FiltersTierList state={state} handleFilter={handleFilter} />
            </FilterContainer>
            <Grid container spacing={2}>
                { monkeys.map(monkey => (
                    <GridItem item xs={gridSpacing} key={ monkey.id }>
                        <MonkeyTierListCard monkey={ monkey } detailed={state.isDetailed}/>
                    </GridItem>
                ))}
            </Grid>
        </>
    );
}
import { useState } from "react";
import styled from "@emotion/styled";
import {Grid} from "@material-ui/core";
import {useSelector} from "react-redux";

import Filters from "./Filters";
import Monkey from "../monkey/Monkey";
import PageModal from "../PageModal";
import {getMobile} from "../../lib/redux/selectors";


const FilterContainer = styled.div`
  margin: 10px 0;
  background-color: #1D1D1D;
  color: white;
`;

const GridItem = styled(Grid)`
  min-height: 260px;
`;


export default function FilterGrid({ className, monkeys, heroes }) {
    const mobile = useSelector(getMobile);
    const [state, setState] = useState({
        modalOpen: false,
        Monkey: null,
        isDetailed: false
    });

    const updateMonkey = (Monkey) => {
        setState({...state,
            Monkey: Monkey,
            modalOpen: !state.modalOpen
        });
    }
    const handleModal = () => { setState({...state, modalOpen: !state.modalOpen }); };
    const handleFilter = (event) => { setState({ ...state, [event.target.name]: event.target.checked }); };

    let gridSpacing = 6;
    if (state.isDetailed || mobile) {
        gridSpacing = 12;
    }

    return (
        <>
            <FilterContainer>
                <Filters state={state} handleFilter={handleFilter} />
            </FilterContainer>
            <Grid container spacing={2}>
                { monkeys.map(monkey => (
                    <GridItem item xs={gridSpacing} key={ monkey.id }>
                        <Monkey monkey={ monkey } detailed={state.isDetailed} updateMonkey={mobile && updateMonkey}/>
                    </GridItem>
                ))}
            </Grid>
            <PageModal open={state.modalOpen} handleClose={handleModal}>
                { state.Monkey }
            </PageModal>
        </>
    );
}
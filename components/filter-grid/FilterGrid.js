import { useState } from "react";
import styled from "@emotion/styled";
import { Grid } from "@material-ui/core";

import Filters from "./Filters";
import Monkey from "../monkey/Monkey";
import PageModal from "../PageModal";


const FilterContainer = styled.div`
  margin: 10px 0;
  background-color: #1D1D1D;
  color: white;
`;

const GridItem = styled(Grid)`
  max-width: 600px;
`;


export default function FilterGrid({ className, monkeys, heroes }) {
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

    return (
        <>
            <FilterContainer>
                <Filters state={state} handleFilter={handleFilter} />
            </FilterContainer>
            <Grid container spacing={2}>
                { monkeys.map(monkey => (
                    <GridItem item key={ monkey.id }>
                        <Monkey monkey={ monkey } detailed={state.isDetailed} updateMonkey={updateMonkey}/>
                    </GridItem>
                ))}
            </Grid>
            <PageModal open={state.modalOpen} handleClose={handleModal}>
                <div>
                    { state.Monkey }
                </div>
            </PageModal>
        </>
    );
}
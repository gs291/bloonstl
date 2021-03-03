import styled from "@emotion/styled";
import {} from "@material-ui/core";
import { useState } from "react";
import Filters from "./Filters";
import Monkey from "../monkey/Monkey";




export default function FilterGrid({ className, monkeys, heroes }) {
    const [state, setState] = useState({
        isExpanded: false,
        isDetailed: false
    });

    const handleChange = (event) => {
        const newState = {
            isExpanded: (event.target.name === "isDetailed" && event.target.checked) ? false : state.isExpanded,
            isDetailed: (event.target.name === "isExpanded" && event.target.checked) ? false : state.isDetailed,
            [event.target.name]: event.target.checked
        }
        setState({ ...state, ...newState});
    };

    const Tmp = styled.div`
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    `;
    return (
        <>
            <Filters state={state} handleChange={handleChange} />
            <Tmp>
                <Monkey monkey={ monkeys[0] } expanded={state.isExpanded} detailed={state.isDetailed}/>
                <Monkey monkey={ monkeys[0] } expanded={state.isExpanded} detailed={state.isDetailed}/>
                <Monkey monkey={ monkeys[0] } expanded={state.isExpanded} detailed={state.isDetailed}/>
                <Monkey monkey={ monkeys[0] } expanded={state.isExpanded} detailed={state.isDetailed}/>
            </Tmp>
        </>
    );
}
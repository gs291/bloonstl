import {useState} from "react";
import styled from "@emotion/styled";
import {Button,
    ButtonGroup,
    FormLabel,
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup} from "@material-ui/core";

import {rankColors} from "../../lib/utils";


const RankButton  = styled(Button)`
  box-shadow: ${props => props["data-pressed"] === "true" ? "inset 0px 0px 5px #000" : "none" };
  
  background-color: ${props => rankColors(props.name)};
  
  &:hover,
  &:active,
  &:focus {
    background-color: ${props => rankColors(props.name, true)};
  }
`;

const FormRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function FilterDifficulty({ className, difficulty, handleDifficulty }) {

    return (
        <>
            <FormControl component="fieldset">
                <FormLabel component="legend">Difficulty</FormLabel>
                <RadioGroup value={difficulty} onChange={handleDifficulty}>
                    <FormRow>
                        <FormControlLabel value="easy" control={<Radio size="small"/>} label="Easy" />
                        <FormControlLabel value="medium" control={<Radio size="small" />} label="Medium" />
                        <FormControlLabel value="hard" control={<Radio size="small"/>} label="Hard" />
                        <FormControlLabel value="impoppable" control={<Radio size="small"/>} label="Impoppable" />
                    </FormRow>
                </RadioGroup>
            </FormControl>
        </>
    );
}
import styled from "@emotion/styled";
import {
    FormLabel,
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup} from "@material-ui/core";


const FormRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const FilterLabel = styled(FormLabel)`
  color: white;
`;

export default function FilterDifficulty({ className, difficulty, handleDifficulty }) {

    return (
        <>
            <FormControl component="fieldset">
                <FilterLabel component="legend" focused={false}>Difficulty Prices:</FilterLabel>
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
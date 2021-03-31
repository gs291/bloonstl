import styled from "@emotion/styled";
import {FormLabel,
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup} from "@material-ui/core";

import {useSelector} from "react-redux";
import {getMobile} from "../../lib/redux/selectors";

const FormRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const FilterLabel = styled(FormLabel)`
  color: white;
  text-align: center;
`;

export default function FilterDifficulty({ className, difficulty, handleDifficulty }) {
    const mobile = useSelector(getMobile);
    return (
        <>
            <FormControl component="fieldset">
                <FilterLabel focused={false}>Difficulty Prices:</FilterLabel>
                <RadioGroup value={difficulty} onChange={handleDifficulty}>
                    { !mobile && (
                        <FormRow>
                            <FormControlLabel value="easy" control={<Radio size="small"/>} label="Easy" />
                            <FormControlLabel value="medium" control={<Radio size="small" />} label="Medium" />
                            <FormControlLabel value="hard" control={<Radio size="small"/>} label="Hard" />
                            <FormControlLabel value="impoppable" control={<Radio size="small"/>} label="Impoppable" />
                        </FormRow>
                    )}
                    { mobile && (
                        <>
                            <FormRow>
                                <FormControlLabel value="easy" control={<Radio size="small"/>} label="Easy" />
                                <FormControlLabel value="medium" control={<Radio size="small" />} label="Medium" />
                            </FormRow>
                            <FormRow>
                                <FormControlLabel value="hard" control={<Radio size="small"/>} label="Hard" />
                                <FormControlLabel value="impoppable" control={<Radio size="small"/>} label="Impoppable" />
                            </FormRow>
                        </>
                    )}
                </RadioGroup>
            </FormControl>
        </>
    );
}
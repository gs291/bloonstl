import styled from "@emotion/styled";
import {FormLabel,
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";

import {getDifficulty, getMobile} from "../../lib/redux/selectors";
import {UPDATE_DIFFICULTY, updateFilter} from "../../lib/redux/actions";

const FormRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const FilterLabel = styled(FormLabel)`
  color: white;
  text-align: center;
`;

const DifficultyLabel = styled(FormControlLabel)`
  color: white;
`;

const Difficulty = styled(Radio)`
  color: white;
`;

export default function FilterDifficulty({ className }) {
    const mobile = useSelector(getMobile);
    const difficulty = useSelector(getDifficulty);
    const dispatch = useDispatch();

    const handleDifficulty = (e) => {
        dispatch(updateFilter(UPDATE_DIFFICULTY, e.target.value));
    }

    const easyMed = (
        <>
            <DifficultyLabel value="easy" control={<Difficulty size="small"/>} label="Easy" />
            <DifficultyLabel value="medium" control={<Difficulty size="small" />} label="Medium" />
        </>
    );

    const hardImp = (
        <>
            <DifficultyLabel value="hard" control={<Difficulty size="small"/>} label="Hard" />
            <DifficultyLabel value="impoppable" control={<Difficulty size="small"/>} label="Impoppable" />
        </>
    )

    return (
        <>
            <FormControl component="fieldset" className={className}>
                <FilterLabel focused={false}>Difficulty Prices:</FilterLabel>
                <RadioGroup value={difficulty} onChange={handleDifficulty}>
                    { !mobile && (
                        <FormRow>
                            { easyMed }
                            { hardImp }
                        </FormRow>
                    )}
                    { mobile && (
                        <>
                            <FormRow>
                                { easyMed }
                            </FormRow>
                            <FormRow>
                                { hardImp }
                            </FormRow>
                        </>
                    )}
                </RadioGroup>
            </FormControl>
        </>
    );
}
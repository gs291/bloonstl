import styled from "@emotion/styled";
import {FormLabel,
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";

import {updateDifficulty} from "../../lib/redux/actions";
import {getDifficulty, getMobile} from "../../lib/redux/selectors";

const FormRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const FilterLabel = styled(FormLabel)`
  color: white;
  text-align: center;
`;

const Difficulty = styled(FormControlLabel)`
  color: white;
`;

export default function FilterDifficulty({ className }) {
    const mobile = useSelector(getMobile);
    const difficulty = useSelector(getDifficulty);
    const dispatch = useDispatch();

    const handleDifficulty = (e) => {
        dispatch(updateDifficulty(e.target.value));
    }

    const easyMed = (
        <>
            <Difficulty value="easy" control={<Radio size="small"/>} label="Easy" />
            <Difficulty value="medium" control={<Radio size="small" />} label="Medium" />
        </>
    );

    const hardImp = (
        <>
            <Difficulty value="hard" control={<Radio size="small"/>} label="Hard" />
            <Difficulty value="impoppable" control={<Radio size="small"/>} label="Impoppable" />
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
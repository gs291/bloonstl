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

    const easyMed = (
        <>
            <FormControlLabel value="easy" control={<Radio size="small"/>} label="Easy" />
            <FormControlLabel value="medium" control={<Radio size="small" />} label="Medium" />
        </>
    );

    const hardImp = (
        <>
            <FormControlLabel value="hard" control={<Radio size="small"/>} label="Hard" />
            <FormControlLabel value="impoppable" control={<Radio size="small"/>} label="Impoppable" />
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
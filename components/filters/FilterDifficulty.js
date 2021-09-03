import styled from "@emotion/styled";
import {
    FormLabel,
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";


import siteColors from "../../lib/utils/siteColors";
import {UPDATE_DIFFICULTY, updateFilter} from "../../lib/redux/actions";
import {getDarkMode, getDifficulty, getMobile} from "../../lib/redux/selectors";

const DifficultyContainer = styled(FormControl)`
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
  transition: 0.3s;
`;

const FormRow = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;

  & :last-child {
    margin-right: 0;
  }
`;

const FilterLabel = styled(FormLabel)`
  color: inherit;
  text-align: center;
  font-size: 1.5rem
`;

const DifficultyLabel = styled(FormControlLabel)`
  color: inherit;
`;

const Difficulty = styled(Radio)`
  color: inherit;
`;

export default function FilterDifficulty({ className }) {
    const mobile = useSelector(getMobile);
    const darkMode = useSelector(getDarkMode);
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
            <DifficultyContainer component="fieldset" className={className} data-dm={darkMode}>
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
            </DifficultyContainer>
        </>
    );
}
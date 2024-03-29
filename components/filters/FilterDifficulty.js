import {styled} from "@mui/material/styles";
import {useDispatch, useSelector} from "react-redux";


import TowerText from "../tower/TowerText";
import DifficultyButton from "../button/DifficultyButton";
import {getDifficulty, getMobile} from "../../lib/redux/selectors";
import {UPDATE_DIFFICULTY, updateFilter} from "../../lib/redux/actions";


const DifficultyContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled("div")`
  margin-top: 30px;
  margin-bottom: 10px;
`;

const Row = styled("div")`
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;
`;

const Label = styled(TowerText)`
  cursor: default;
  text-align: center;
`;

const LabelCaption = styled(TowerText)`
  text-align: center;
`;


/**
 * Difficulty filter and wrapper for all difficulty buttons
 *
 * @param {Object} props Component props
 * @param {string} [props.className] class to apply to the component
 * @param {string} props.color Color for the difficulty button
 */
export default function FilterDifficulty({ className, color }) {
    const dispatch = useDispatch();
    const mobile = useSelector(getMobile);
    const difficulty = useSelector(getDifficulty);

    const handleDifficulty = (e, difficulty) => {
        dispatch(updateFilter(UPDATE_DIFFICULTY, difficulty));
    }

    const easyMed = (
        <>
            <DifficultyButton difficulty="easy" selected={difficulty === "easy"} color={color} handleChange={handleDifficulty} />
            <DifficultyButton difficulty="medium" selected={difficulty === "medium"} color={color} handleChange={handleDifficulty} />
        </>
    );

    const hardImp = (
        <>
            <DifficultyButton difficulty="hard" selected={difficulty === "hard"} color={color} handleChange={handleDifficulty} />
            <DifficultyButton difficulty="impoppable" selected={difficulty === "impoppable"} color={color} handleChange={handleDifficulty} />
        </>
    )

    return (
        <>
            <DifficultyContainer className={className}>
                <Label variant={mobile ? "h3" : "h2"}>
                    Difficulty Prices
                </Label>
                <LabelCaption variant={mobile ? "h6" : "h5"} font={true}>
                    Click on a difficulty to change the in-game gold costs!
                </LabelCaption>
                <ButtonContainer>
                    { !mobile && (
                        <Row>
                            { easyMed }
                            { hardImp }
                        </Row>
                    )}
                    { mobile && (
                        <>
                            <Row>
                                { easyMed }
                            </Row>
                            <Row>
                                { hardImp }
                            </Row>
                        </>
                    )}
                </ButtonContainer>
            </DifficultyContainer>
        </>
    );
}
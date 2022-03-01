import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Typography} from "@mui/material";

import ImageFill from "../image/ImageFill";
import siteColors from "../../lib/utils/siteColors";
import {globalOptions} from "../../lib/utils/emotionStyled";
import {getDarkMode, getMobile} from "../../lib/redux/selectors";
import {BUTTON_PREFIX, ga4SendSelectContent, SELECT_CONTENT_BUTTON} from "../../lib/utils/ga4";


const Button = styled("div", globalOptions)`
  position: relative;
  margin-left: ${props => props["data-m"] ? 2 : 3}rem;
  margin-right: ${props => props["data-m"] ? 2 : 3}rem;
  margin-bottom: ${props => props["data-m"] ? 2 : 2}rem;
  padding: 5px 5px;
  border-radius: 50%;
  border: 5px solid transparent;
  transition: 0.3s;

  background-color: ${props => props["data-s"] ? props["data-c"] : "none"};
  
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
    background-color: ${props => props["data-c"]};
    border: 5px solid ${props => props["data-c"]};
  }
`;

const DifficultyImageContainer = styled("div", globalOptions)`
  width: ${props => props["data-m"] ? 45 : 50}px;
  max-width: ${props => props["data-m"] ? 45 : 50}px;
  height: ${props => props["data-m"] ? 45 : 50}px;
  max-height: ${props => props["data-m"] ? 45 : 50}px;
  position: relative;
`;

const DifficultyText = styled(Typography, globalOptions)`
  color: ${props => props["data-s"] 
          ? props["data-c"] 
          : props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
  
  user-select: none;
  height: 30px;
  text-align: center;
  
  position: absolute;
  left: -45px;
  bottom: -30px;
  width: 150px;
`;


const GA4_DIFFICULTY_FILTER_ID = "FILTER_DIFFICULTY";

/**
 * Round difficulty button
 *
 * @param {Object} props Component props
 * @param {string} [props.className] class to apply to the component
 * @param {string} props.difficulty In-game difficulty
 * @param {boolean} props.selected Shows if the difficulty is currently selected
 * @param {string} props.color Color for the difficulty button
 * @param {function} props.handleChange The function to run when a difficulty is selected
 */
export default function DifficultyButton({ className, difficulty, selected, color, handleChange }) {
    const mobile = useSelector(getMobile);
    const darkMode = useSelector(getDarkMode);

    const handleClick = (e) => {
        handleChange(e, difficulty);
        ga4SendSelectContent(SELECT_CONTENT_BUTTON, {item_id: `${BUTTON_PREFIX}${GA4_DIFFICULTY_FILTER_ID}_${difficulty.toUpperCase()}`});
    }

    return (
        <>
            <Button
                onClick={handleClick}
                data-s={selected}
                data-c={color}
                data-dm={darkMode}
                data-m={mobile}
                className={className}
            >
                <DifficultyImageContainer data-m={mobile}>
                    <ImageFill src={`difficulty/${difficulty}.png`} alt={`Difficulty icon: ${difficulty}`} />
                </DifficultyImageContainer>
                <DifficultyText
                    variant="h5"
                    data-dm={darkMode}
                    data-c={color}
                    data-s={selected}
                >
                    {difficulty}
                </DifficultyText>
            </Button>
        </>
    );
}
import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Typography} from "@mui/material";

import ImageFill from "../image/ImageFill";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode, getMobile} from "../../lib/redux/selectors";


const Button = styled.div`
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

const DifficultyImageContainer = styled.div`
  width: ${props => props["data-m"] ? 45 : 50}px;
  max-width: ${props => props["data-m"] ? 45 : 50}px;
  height: ${props => props["data-m"] ? 45 : 50}px;
  max-height: ${props => props["data-m"] ? 45 : 50}px;
  position: relative;
`;

const DifficultyText = styled(Typography)`
  transition: 0.3s;
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

export default function DifficultyButton({ className, difficulty, selected, color, handleChange }) {
    const mobile = useSelector(getMobile);
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <Button
                onClick={e => handleChange(e, difficulty)}
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
import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Typography} from "@mui/material";

import ImageFill from "../image/ImageFill";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";


const Button = styled.div`
  position: relative;
  margin-left: 3rem;
  margin-right: 3rem;
  margin-bottom: 2rem;
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
  width: 50px;
  max-width: 50px;
  height: 50px;
  max-height: 50px;
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
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <Button
                onClick={e => handleChange(e, difficulty)}
                data-s={selected}
                data-c={color}
                data-dm={darkMode}
                className={className}
            >
                <DifficultyImageContainer>
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
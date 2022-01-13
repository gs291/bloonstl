import {useState} from "react";
import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import Ability from "./Ability";
import {rgbaHex} from "../../lib/utils/utils";
import siteColors from "../../lib/utils/siteColors";
import {globalOptions} from "../../lib/utils/emotionStyled";
import {getDarkMode, getMobile} from "../../lib/redux/selectors";
import TowerText from "../tower/TowerText";


const ParagonContainer = styled("div", globalOptions)`
  height: ${props => props["data-m"] ? "60px" : "220px"};
  width: ${props => props["data-m"] ? "100%" : "70px"};
  padding: 0.5em;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  transition: 0.3s;
  background-color: ${props => props["data-dm"] ? siteColors.paragon.dark : siteColors.paragon.light };
  border-radius: 10px;
  
  &:hover {
    cursor: pointer;
    box-shadow: -5px 5px 5px ${props => rgbaHex(props["data-dm"] ? siteColors.paragon.dark : siteColors.paragon.light, 0.5)};
  }
`;

const AbilityContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export default function Paragon({ability, fileName, tier, towerType, selected, ...rest}) {
    const mobile = useSelector(getMobile);
    const darkMode = useSelector(getDarkMode);

    const [open, setOpen] = useState(false);

    const handleClick = () => {setOpen(prevOpen => !prevOpen);}
    const handleEnter = () => {setOpen(true);};
    const handleExit = () => {setOpen(false);};

    return (
        <>
            <ParagonContainer
                onMouseEnter={handleEnter}
                onMouseLeave={handleExit}
                onClick={handleClick}
                data-m={mobile} data-dm={darkMode}
                {...rest}
            >
                <AbilityContainer>
                    <Ability ability={ability} fileName={fileName} tier={tier} towerType={towerType} selected={selected} open={open}/>
                </AbilityContainer>
            </ParagonContainer>
        </>
    );
}
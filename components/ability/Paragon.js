import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {styled} from "@mui/material/styles";

import Ability from "./Ability";
import TowerText from "../tower/TowerText";
import {rgbaHex} from "../../lib/utils/utils";
import {getMobile} from "../../lib/redux/selectors";
import {globalOptions} from "../../lib/utils/emotionStyled";


const ParagonContainer = styled("div", globalOptions)`
  height: ${props => props["data-m"] ? "60px" : "220px"};
  width: ${props => props["data-m"] ? "100%" : "70px"};
  padding: 0.5em;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  transition: 0.3s;
  border: 4px solid ${props => props["data-s"] ? props.theme.palette.ability.paragon : "transparent"};
  background-color: ${props => rgbaHex(props.theme.palette.ability.paragon, props.theme.palette.mode === "dark" ? 0.5 : 0.75) };
  border-radius: 10px;
  box-shadow: 0 0 10px 2px ${props => props.theme.palette.ability.shadow};
  
  position: relative;
  
  &:hover {
    cursor: pointer;
  }
`;

const AbilityContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const BackgroundContainer = styled("div")`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const BackgroundText = styled("div", globalOptions)`
  width: 100%;
  height: 100%;
  
  display: flex;
  flex-direction: ${props => props["data-m"] ? "row" : "column"};
  justify-content: center;
  align-items: center;
`;

const SplitText = styled("div", globalOptions)`
  width: ${props => props["data-m"] ? 40 : 100}%;
  height: ${props => props["data-m"] ? 100 : 35}%;
`;

const InfoText = styled(SplitText)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UnSelectableText = styled(TowerText)`
  user-select: none;
`;

const MiddleFiller = styled("div", globalOptions)`
  width: ${props => props["data-m"] ? 20 : 100}%;
  height: ${props => props["data-m"] ? 100 : 30}%;
`;

const DegreeContainer = styled("div", globalOptions)`
  display: flex;
  flex-direction: ${props => props["data-m"] ? "row" : "column"};
  justify-content: center;
  align-items: center;
  gap: 0 5px;
`;


/**
 * Ability Path or Level text
 *
 * @param {Object} props Component props
 * @param {Object} props.ability The database ability object
 * @param {string} props.fileName The filename for the tower
 * @param {string} props.tier The currently selected tier or tower tier
 * @param {string} props.towerType Shows if the tower is a monkey or hero
 * @param {boolean} props.selected Shows if the ability is currently selected
 */
export default function Paragon({ability, fileName, tier, towerType, selected, ...rest}) {
    const mobile = useSelector(getMobile);

    const [open, setOpen] = useState(false);
    const [touchTimeout, setTouchTimeout] = useState(false);

    const handleEnter = () => {setOpen(true);};
    const handleTimeout = () => {setOpen(true); setTouchTimeout(true);};

    const handleExit = () => {setOpen(false); setTouchTimeout(false);};

    useEffect(() => {
        const timer = touchTimeout && setTimeout(() => {
            setOpen(false);
            setTouchTimeout(false);
        }, 7000); //leaveTouchDelay from Tooltip

        return () => clearTimeout(timer);
    }, [touchTimeout]);

    return (
        <>
            <ParagonContainer
                onClick={handleEnter}
                onBlur={handleExit}
                onFocus={handleEnter}
                onMouseEnter={handleEnter}
                onMouseLeave={handleExit}
                onTouchStart={handleExit}
                onTouchEnd={handleTimeout}
                data-m={mobile}
                data-s={selected}
                {...rest}
            >
                <BackgroundContainer>
                    <BackgroundText data-m={mobile}>
                        <InfoText data-m={mobile}>
                            <UnSelectableText variant={mobile ? "subtitle2" : "caption"} data-m={mobile}>
                                PARAGON
                            </UnSelectableText>
                        </InfoText>
                        <MiddleFiller data-m={mobile} />
                        <InfoText data-m={mobile}>
                            <DegreeContainer data-m={mobile}>
                                <UnSelectableText variant="subtitle2" data-m={mobile}>
                                    DEGREE
                                </UnSelectableText>
                                <UnSelectableText variant={mobile ? "subtitle2" : "subtitle1"} data-m={mobile}>
                                    {mobile && (<>&nbsp;</>)}1
                                </UnSelectableText>
                            </DegreeContainer>
                        </InfoText>
                    </BackgroundText>
                </BackgroundContainer>
                <AbilityContainer>
                    <Ability ability={ability} fileName={fileName} tier={tier} towerType={towerType} selected={selected} open={open}/>
                </AbilityContainer>
            </ParagonContainer>
        </>
    );
}
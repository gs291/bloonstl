import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

import Ability from "./Ability";
import TowerText from "../tower/TowerText";
import {rgbaHex} from "../../lib/utils/utils";
import siteColors from "../../lib/utils/siteColors";
import {globalOptions} from "../../lib/utils/emotionStyled";
import {getDarkMode, getMobile} from "../../lib/redux/selectors";


const ParagonContainer = styled("div", globalOptions)`
  height: ${props => props["data-m"] ? "60px" : "220px"};
  width: ${props => props["data-m"] ? "100%" : "70px"};
  padding: 0.5em;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  transition: 0.3s;
  border: 4px solid ${props => props["data-s"] 
          ? props["data-dm"] ? siteColors.paragon.dark : siteColors.paragon.light
          : "transparent"
  };
  background-color: ${props => rgbaHex(props["data-dm"] ? siteColors.paragon.dark : siteColors.paragon.light, props["data-dm"] ? 0.5 : 0.75) };
  border-radius: 10px;
  box-shadow: 0 0 10px 2px ${props => props["data-dm"] ? "#2A526A" : "#000000"};
  
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

const BackgroundContainer = styled("div", globalOptions)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const BackgroundText = styled("div")`
  width: 100%;
  height: 100%;
  
  display: flex;
  flex-direction: ${props => props["data-m"] ? "row" : "column"};
  justify-content: center;
  align-items: center;
`;

const SplitText = styled("div")`
  width: ${props => props["data-m"] ? 40 : 100}%;
  height: ${props => props["data-m"] ? 100 : 35}%;
`;

const InfoText = styled(SplitText)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MiddleFiller = styled("div")`
  width: ${props => props["data-m"] ? 20 : 100}%;
  height: ${props => props["data-m"] ? 100 : 30}%;
`;

const DegreeContainer = styled("div")`
  display: flex;
  flex-direction: ${props => props["data-m"] ? "row" : "column"};
  justify-content: center;
  align-items: center;
  gap: 0 5px;
`;

// There is a bug with this in mobile. On a mobile device (not where mobile is just set = true) if this is clicked
// then waiting for the timeout causes it to close. if no other clicks were made in that time. attempting to reopen
// the paragon tooltip will not work. I (gs291) was unable to figure out what mouse/touch event needed to be added
export default function Paragon({ability, fileName, tier, towerType, selected, ...rest}) {
    const mobile = useSelector(getMobile);
    const darkMode = useSelector(getDarkMode);

    const [open, setOpen] = useState(false);
    const [touchTimeout, setTouchTimeout] = useState(false);

    const handleTimeout = () => {setTouchTimeout(true );};
    const handleEnter = () => {setOpen(true);};
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
                onMouseEnter={handleEnter}
                onMouseLeave={handleExit}
                onTouchEnd={handleTimeout}
                data-m={mobile} data-dm={darkMode}
                data-s={selected}
                {...rest}
            >
                <BackgroundContainer>
                    <BackgroundText data-m={mobile}>
                        <InfoText data-m={mobile}>
                            <TowerText variant={mobile ? "subtitle2" : "caption"} data-m={mobile} data-dm={darkMode}>
                                PARAGON
                            </TowerText>
                        </InfoText>
                        <MiddleFiller data-m={mobile} />
                        <InfoText data-m={mobile}>
                            <DegreeContainer data-m={mobile}>
                                <TowerText variant="subtitle2" data-m={mobile} data-dm={darkMode}>
                                    DEGREE
                                </TowerText>
                                <TowerText variant={mobile ? "subtitle2" : "subtitle1"} data-m={mobile} data-dm={darkMode}>
                                    {mobile && (<>&nbsp;</>)}1
                                </TowerText>
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
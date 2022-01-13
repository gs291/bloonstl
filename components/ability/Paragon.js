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
  border: 4px solid ${props => props["data-dm"] ? siteColors.paragon.dark : siteColors.paragon.light };
  background-color: ${props => rgbaHex(props["data-dm"] ? siteColors.paragon.dark : siteColors.paragon.light, 0.5) };
  border-radius: 10px;
  
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

const LeftText = styled(SplitText)`
  display: flex;
  justify-content: ${props => props["data-m"] ? "end" : "center"};
  align-items: ${props => props["data-m"] ? "center" : "center"};
`;

const RightText = styled(SplitText)`
  display: flex;
  justify-content: ${props => props["data-m"] ? "start" : "center"};
  align-items: ${props => props["data-m"] ? "center" : "center"};
`;

const MiddleFiller = styled("div")`
  width: ${props => props["data-m"] ? 20 : 100}%;
  height: ${props => props["data-m"] ? 100 : 30}%;
`;

const SidewaysText = styled(TowerText)`
  text-orientation: mixed;
  writing-mode: ${props => props["data-m"] ? "initial" : "vertical-rl"};
  opacity: ${props => props["data-dm"] ? 0.15 : 0.4};
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
                {...rest}
            >
                <BackgroundContainer>
                    <BackgroundText data-m={mobile}>
                        <LeftText data-m={mobile}>
                            <SidewaysText variant="h4" data-m={mobile} data-dm={darkMode}>
                                PARA
                            </SidewaysText>
                        </LeftText>
                        <MiddleFiller data-m={mobile} />
                        <RightText data-m={mobile}>
                            <SidewaysText variant="h4" data-m={mobile} data-dm={darkMode}>
                                GON
                            </SidewaysText>
                        </RightText>
                    </BackgroundText>
                </BackgroundContainer>
                <AbilityContainer>
                    <Ability ability={ability} fileName={fileName} tier={tier} towerType={towerType} selected={selected} open={open}/>
                </AbilityContainer>
            </ParagonContainer>
        </>
    );
}
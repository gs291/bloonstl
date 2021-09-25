import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {keyframes} from "@emotion/react";
import {useEffect, useState} from "react";
import {LinearProgress} from "@mui/material";

import TierSection from "./TierSection";
import ProConSection from "./ProConSection";
import TowerSection from "./TowerSection";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";

const delay = 7500;

const OddSection = styled.div`
  width: 100%;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transition: 0.3s;
  background-color: ${props => props["data-dm"] ? siteColors.accent.dark : siteColors.accent.light};
  border-radius: 20px;
  overflow-x: auto;
`;

const indeterminate1Keyframes = keyframes({
    "0%": {
        left: "-35%",
        right: "100%"
    },
    "100%": {
        left: "0%",
        right: "0%"
    }
});

const StyledLinearProgress = styled(LinearProgress)`
  width: 100%;
  height: 10px;

  & .MuiLinearProgress-bar1Indeterminate {
    width: auto;
    animation: ${indeterminate1Keyframes} ${delay}ms linear infinite forwards; 
  }

  & .MuiLinearProgress-bar2Indeterminate {
    display: none;
  }
`;

const getNewRandomIdx = (length) => Math.floor(Math.random() * length);

const getNewIndex = (idx, length) => {
    let newIdx = getNewRandomIdx(length);

    while (idx === newIdx) {
        newIdx = getNewRandomIdx(length);
    }

    return newIdx;
}

export default function HomePage({scrollTo, monkeys}) {
    const length = monkeys.length;
    const darkMode = useSelector(getDarkMode);
    const [idx, setIdx] = useState(0);

    useEffect(() => {
        const nextTimer = setInterval(() => {
            const newIdx = getNewIndex(idx, length);
            setIdx(newIdx);
        }, delay);

        return () => {
            clearInterval(nextTimer);
        }
    }, [])

    const monkey = monkeys[idx];

    return (
        <>
            <OddSection data-dm={darkMode} ref={scrollTo}>
                <TierSection monkey={monkey}/>
                <StyledLinearProgress variant="indeterminate" />
            </OddSection>
            <TowerSection monkey={monkey}/>
            <OddSection data-dm={darkMode}>
                <ProConSection monkey={monkey}/>
            </OddSection>
        </>
    );
}
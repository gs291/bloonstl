import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import TierSection from "./TierSection";
import ProConSection from "./ProConSection";
import TowerSection from "./TowerSection";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";
import {useEffect, useState} from "react";

const OddSection = styled.div`
  width: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.3s;
  background-color: ${props => props["data-dm"] ? siteColors.accent.dark : siteColors.accent.light};
  border-radius: 20px;
`;

const getNewRandomIdx = (length) => Math.floor(Math.random() * length);

const getNewIndex = (idx, length) => {
    let newIdx = getNewRandomIdx(length);

    while (idx === newIdx) {
        newIdx = getNewRandomIdx(length);
    }

    return newIdx;
}

const delay = 7500;
export default function HomePage({scrollTo, monkeys}) {
    const length = monkeys.length;
    const [idx, setIdx] = useState(0);
    const darkMode = useSelector(getDarkMode);

    useEffect(() => {
        let nextTimer = setInterval(() => {
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
            </OddSection>
            <TowerSection monkey={monkey}/>
            <OddSection data-dm={darkMode}>
                <ProConSection monkey={monkey}/>
            </OddSection>
        </>
    );
}
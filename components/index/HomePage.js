import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

import TierSection from "./TierSection";
import TowerSection from "./TowerSection";
import ProConSection from "./ProConSection";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";
import {globalOptions} from "../../lib/utils/emotionStyled";
import VideoSection from "./VideoSection";


const delay = 7500;

const OddSection = styled("div", globalOptions)`
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

const getNewRandomIdx = (length) => Math.floor(Math.random() * length);

const getNewIndex = (idx, length) => {
    let newIdx = getNewRandomIdx(length);

    while (idx === newIdx) {
        newIdx = getNewRandomIdx(length);
    }

    return newIdx;
}

/**
 * Home page sections below the top background/introduction
 *
 * @param {Object} props Component props
 * @param {RefObject<HTMLDivElement>|null} props.scrollTo React reference to the top of the home page sections
 * @param {Array<Object>} props.monkeys Array list of monkeys to display on the home page sections
 */
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
            <VideoSection />
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
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

import TowerSection from "./TowerSection";
import VideoSection from "./VideoSection";
import {getDarkMode} from "../../lib/redux/selectors";


const delay = 7500;

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
    const [idx, setIdx] = useState(0);

    useEffect(() => {
        const nextTimer = setInterval(() => {
            const newIdx = getNewIndex(idx, length);
            setIdx(newIdx);
        }, delay);

        return () => {
            clearInterval(nextTimer);
        }
    }, []);

    const monkey = monkeys[idx];

    return (
        <>
            <VideoSection />
            <TowerSection monkey={monkey} scrollTo={scrollTo}/>
        </>
    );
}
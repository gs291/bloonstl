import {useState} from "react";
import {useSelector} from "react-redux";

import HeroDetailed from "./HeroDetailed";
import {getMobile} from "../../lib/redux/selectors";
import FilterDifficulty from "../filters/FilterDifficulty";
import FixedDivider from "../divider/FixedDivider";
import {getHeroColor} from "../../lib/utils";
import TowerContainer from "../tower/TowerContainer";

export default function HeroPage({ hero }) {
    const mobile = useSelector(getMobile);
    const [ difficulty, setDifficulty ] = useState("medium");

    const handleDifficulty = (event) => setDifficulty(event.target.value);

    const dividerBackgroundColor = getHeroColor(hero.name);

    return (
        <>
            <TowerContainer tower={hero} towerType="hero" />
            <FixedDivider width={ mobile ? 100 : 80 } backgroundColor={dividerBackgroundColor}/>
            <FilterDifficulty difficulty={difficulty} handleDifficulty={ handleDifficulty }/>
            <FixedDivider width={ mobile ? 100 : 80 } backgroundColor={dividerBackgroundColor}/>
            <HeroDetailed hero={hero} />
        </>
    );
}


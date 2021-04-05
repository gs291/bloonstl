import {useSelector} from "react-redux";

import HeroDetailed from "./HeroDetailed";
import {getHeroColor} from "../../lib/utils";
import FixedDivider from "../divider/FixedDivider";
import {getMobile} from "../../lib/redux/selectors";
import TowerContainer from "../tower/TowerContainer";
import FilterDifficulty from "../filters/FilterDifficulty";

export default function HeroPage({ hero }) {
    const mobile = useSelector(getMobile);
    const dividerBackgroundColor = getHeroColor(hero.name);

    return (
        <>
            <TowerContainer tower={hero} towerType="hero" />
            <FixedDivider width={ 80 } backgroundColor={dividerBackgroundColor}/>
            <FilterDifficulty />
            <FixedDivider width={ 80 } backgroundColor={dividerBackgroundColor}/>
            <HeroDetailed hero={hero} />
        </>
    );
}


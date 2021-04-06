import {useSelector} from "react-redux";

import {getHeroColor} from "../../lib/utils/utils";
import FixedDivider from "../divider/FixedDivider";
import {getMobile} from "../../lib/redux/selectors";
import TowerImgInfo from "../tower/TowerImgInfo";
import HeroAbilities from "../abilities/HeroAbilities";
import FilterDifficulty from "../filters/FilterDifficulty";

export default function HeroPage({ hero }) {
    const mobile = useSelector(getMobile);
    const dividerBackgroundColor = getHeroColor(hero.name);

    return (
        <>
            <TowerImgInfo tower={hero} towerType="hero" />
            <FixedDivider width={ 80 } backgroundColor={dividerBackgroundColor}/>
            <FilterDifficulty />
            <FixedDivider width={ 80 } backgroundColor={dividerBackgroundColor}/>
            <HeroAbilities abilities={ hero.abilities } heroFile={ hero.filename }/>
        </>
    );
}


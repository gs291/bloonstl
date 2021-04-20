import TowerImgInfo from "../tower/TowerImgInfo";
import FixedDivider from "../divider/FixedDivider";
import {getHeroColor} from "../../lib/utils/utils";
import HeroAbilities from "../abilities/HeroAbilities";
import FilterDifficulty from "../filters/FilterDifficulty";

export default function HeroPage({ hero }) {
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


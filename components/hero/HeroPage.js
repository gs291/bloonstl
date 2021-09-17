import styled from "@emotion/styled";

import TowerImgInfo from "../tower/TowerImgInfo";
import FixedDivider from "../divider/FixedDivider";
import {getHeroColor} from "../../lib/utils/utils";
import HeroAbilities from "../abilities/HeroAbilities";
import FilterDifficulty from "../filters/FilterDifficulty";

const FilterDiff = styled(FilterDifficulty)`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export default function HeroPage({ hero }) {
    const dividerBackgroundColor = getHeroColor(hero.name);

    return (
        <>
            <TowerImgInfo tower={hero} towerType="hero" />
            <FixedDivider width={ 80 } backgroundColor={dividerBackgroundColor}/>
            <FilterDiff color={dividerBackgroundColor}/>
            <FixedDivider width={ 80 } backgroundColor={dividerBackgroundColor}/>
            <HeroAbilities abilities={ hero.abilities } heroFile={ hero.filename }/>
        </>
    );
}


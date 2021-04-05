import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import TowerText from "../tower/TowerText";
import siteColors from "../../lib/utils/siteColors";
import {getDifficulty} from "../../lib/redux/selectors";
import {goldCost, rankColors} from "../../lib/utils/utils";


export default function MonkeyAbilityTooltip({ ability, rank, selected }) {
    const difficulty = useSelector(getDifficulty);

    return (
        <>
            <TowerText variant="h5" textColor={selected ? rankColors(rank) : siteColors.text.dark}>
                {ability.name}
            </TowerText>
            <TowerText variant="body1" textColor={siteColors.tower.gold}>
                In-game cost:&nbsp;
                ${goldCost(ability.cost_gold, difficulty)}
            </TowerText>
            <TowerText variant="body2" textColor={siteColors.tower.description} font={1}>
                {ability.description}
            </TowerText>
        </>
    );
}
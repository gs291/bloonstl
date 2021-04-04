import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import TowerText from "../tower/TowerText";
import {goldCost, siteColors} from "../../lib/utils";
import {getDifficulty} from "../../lib/redux/selectors";


export default function MonkeyAbilityTooltip({ ability }) {
    const difficulty = useSelector(getDifficulty);

    return (
        <>
            <TowerText variant="h5">
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
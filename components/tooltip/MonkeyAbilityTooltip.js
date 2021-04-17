import {useSelector} from "react-redux";

import TowerText from "../tower/TowerText";
import siteColors from "../../lib/utils/siteColors";
import {getTierColor, goldCost} from "../../lib/utils/utils";
import {getDarkMode, getDifficulty} from "../../lib/redux/selectors";


export default function MonkeyAbilityTooltip({ ability, rank, selected }) {
    const darkMode = useSelector(getDarkMode);
    const difficulty = useSelector(getDifficulty);

    return (
        <>
            <TowerText
                variant="h5"
                textColor={selected
                    ? getTierColor(rank)
                    : darkMode ? siteColors.text.dark : siteColors.text.light}
            >
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
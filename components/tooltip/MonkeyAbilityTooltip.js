import {useSelector} from "react-redux";

import TowerText from "../tower/TowerText";
import siteColors from "../../lib/utils/siteColors";
import AbilityModifiersTooltip from "./AbilityModifiersTooltip";
import {getDarkMode, getDifficulty} from "../../lib/redux/selectors";
import {getThousandsNumber, getTierColor, goldCost} from "../../lib/utils/utils";


export default function MonkeyAbilityTooltip({ ability, tier, selected, path, pathTier }) {
    const darkMode = useSelector(getDarkMode);
    const difficulty = useSelector(getDifficulty);

    return (
        <>
            <TowerText
                variant="h5"
                textColor={
                    selected
                        ? getTierColor(tier)
                        : darkMode ? siteColors.text.dark : siteColors.text.light
                }
            >
                {ability.name}
            </TowerText>
            <TowerText variant="body1" textColor={darkMode ? siteColors.tower.gold.dark : siteColors.tower.gold.light}>
                In-game cost:&nbsp;
                ${getThousandsNumber(goldCost(ability.cost_gold, difficulty))}
            </TowerText>
            <TowerText variant="body2" textColor={darkMode ? siteColors.tower.description.dark : siteColors.tower.description.light } font={true}>
                {ability.description}
            </TowerText>
            <AbilityModifiersTooltip modifiers={ability.modifiers} />
        </>
    );
}
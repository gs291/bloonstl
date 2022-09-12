import {styled} from "@mui/material/styles";

import HeroAbilityTooltip from "./HeroAbilityTooltip";
import MonkeyAbilityTooltip from "./MonkeyAbilityTooltip";


const TooltipContainer = styled("div")`
  padding: 1em;
`;

/**
 * Full ability tooltip
 *
 * @param {Object} props Component props
 * @param {string} [props.className] class to apply to the component
 * @param {Object} props.ability The database ability object
 * @param {string} props.tier The currently selected tier or tower tier
 * @param {string} props.towerType Shows if the tower is a monkey or hero
 * @param {boolean} props.selected Shows if the ability is currently selected
 */
export default function AbilityTooltip({className, ability, tier, towerType, selected, ...rest}) {
    return (
        <>
            <TooltipContainer className={className}>
                { towerType === "monkey" && <MonkeyAbilityTooltip ability={ability} tier={tier} selected={selected} {...rest} /> }
                { towerType === "hero" && <HeroAbilityTooltip ability={ability} tier={tier} selected={selected} {...rest} /> }
            </TooltipContainer>
        </>
    );
}
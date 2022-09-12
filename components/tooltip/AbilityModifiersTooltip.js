import {useSelector} from "react-redux";
import {styled, useTheme} from "@mui/material/styles";

import TowerText from "../tower/TowerText";
import FixedDivider from "../divider/FixedDivider";
import {globalOptions} from "../../lib/utils/emotionStyled";
import {getShowTooltipModifiers} from "../../lib/redux/selectors";
import {getTierColor, parseAbilityModifiers, rgbaHex} from "../../lib/utils/utils";


const ModifierWrapper = styled("div")`
  width: 100%;
  position: relative;
`;

const ModifiersContainer = styled("div", globalOptions)`
  ${props => props["data-s"] ? "" : `
  max-height: 100px;
  overflow-y: hidden;
  `}
`;

const ShadowContainer = styled("div", globalOptions)`
  display: ${props => props["data-s"] ? "none": "block"};
  ${props => props["data-s"] ? "" : `
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: linear-gradient(180deg, transparent 0 40%, ${rgbaHex(props.theme.palette.background.tooltip, 0.75)}, ${props.theme.palette.background.tooltip});
  `}
`;

const List = styled("ul")`
  padding-left: 20px;
`;

const ListItem = styled("li", globalOptions)`
  color: ${props => props.theme.palette.text.primary}
`;

/**
 * Tooltip Ability modifiers list
 *
 * @param {Object} props Component props
 * @param {string} props.modifiers Modifiers for a specific ability
 * @param {string} props.tier The currently selected tier or tower tier
 * @param {boolean} props.selected Shows if the ability is currently selected
 */
export default function AbilityModifiersTooltip({modifiers, tier, selected, ...rest}) {
    const theme = useTheme();
    const showAllModifiers = useSelector(getShowTooltipModifiers);

    return (
        <>
            {modifiers !== "" && (
                <>
                    <FixedDivider backgroundColor={selected ? getTierColor(tier, theme) : theme.palette.text.primary}/>
                    <TowerText variant="h6" >
                        Modifiers
                    </TowerText>
                    <ModifierWrapper>
                        <ShadowContainer data-s={showAllModifiers} />
                        <ModifiersContainer data-s={showAllModifiers} {...rest}>
                            <List>
                                {parseAbilityModifiers(modifiers, null, null, true)
                                    .map((mod, idx) => (
                                        <ListItem key={idx}>
                                            <TowerText key={idx} variant="subtitle2" font={true}>
                                                {mod.text}
                                            </TowerText>

                                            {mod.more && (
                                                <List>
                                                    {mod.more.map(extra => (
                                                        <ListItem key={extra.text}>
                                                            <TowerText variant="caption" font={true}>
                                                                {extra.text}
                                                            </TowerText>
                                                        </ListItem>
                                                    ))}
                                                </List>
                                            )}
                                        </ListItem>
                                    ))
                                }
                            </List>
                        </ModifiersContainer>
                    </ModifierWrapper>
                </>
            )}
        </>
    );
}
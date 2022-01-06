import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import TowerText from "../tower/TowerText";
import FixedDivider from "../divider/FixedDivider";
import siteColors from "../../lib/utils/siteColors";
import {globalOptions} from "../../lib/utils/emotionStyled";
import {parseAbilityModifiers, rgbaHex} from "../../lib/utils/utils";
import {getDarkMode, getShowTooltipModifiers} from "../../lib/redux/selectors";

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
  background: linear-gradient(180deg, transparent 0 40%, ${rgbaHex(props["data-dm"] ? siteColors.tooltip.dark : siteColors.tooltip.light, 0.75)}, ${props["data-dm"] ? siteColors.tooltip.dark : siteColors.tooltip.light});
  `}
`;

const List = styled("ul")`
  padding-left: 20px;
`;

const ListItem = styled("li", globalOptions)`
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light}
`;

export default function AbilityModifiersTooltip({modifiers, ...rest}) {
    const darkMode = useSelector(getDarkMode);
    const showAllModifiers = useSelector(getShowTooltipModifiers);

    return (
        <>
            {modifiers !== "" && (
                <>
                    <FixedDivider />
                    <TowerText variant="h6" >
                        Modifiers
                    </TowerText>
                    <ModifierWrapper>
                        <ShadowContainer data-dm={darkMode} data-s={showAllModifiers} />
                        <ModifiersContainer data-s={showAllModifiers} {...rest}>
                            <List>
                                {parseAbilityModifiers(modifiers, null, null, true)
                                    .map((mod, idx) => (
                                        <ListItem key={idx}  data-dm={darkMode}>
                                            <TowerText key={idx} variant="subtitle2" font={true}>
                                                {mod.text}
                                            </TowerText>

                                            {mod.more && (
                                                <List>
                                                    {mod.more.map(extra => (
                                                        <ListItem key={extra.text} data-dm={darkMode}>
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
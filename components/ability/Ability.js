import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Card, CardContent} from "@mui/material";
import OfflineBoltIcon from "@mui/icons-material/OfflineBolt";

import Tooltip from "../tooltip/Tooltip";
import ImageFill from "../image/ImageFill";
import siteSizes from "../../lib/utils/siteSizes";
import siteColors from "../../lib/utils/siteColors";
import {getMobile} from "../../lib/redux/selectors";
import {getDarkMode} from "../../lib/redux/selectors";
import AbilityTooltip from "../tooltip/AbilityTooltip";
import {globalOptions} from "../../lib/utils/emotionStyled";
import {getImageUrl, getTierColor} from "../../lib/utils/utils";


const AbilityContainer = styled("div")`
  display: flex;
  flex-direction: row;
  position: relative;
`;

const CardContainer = styled(Card, globalOptions)`
  border-radius: 50%;
  background-color: ${props => props["data-dm"] ? siteColors.ability.card.dark : siteColors.ability.card.light};
  border: 4px solid ${props => props["data-s"] ? getTierColor(props.tier) : props["data-dm"] ? siteColors.ability.card.dark : siteColors.ability.card.light};
  transition: 0.3s;
  box-shadow: 0 0 10px 2px ${props => props["data-dm"] ? "#2A526A" : "#000000"};
  
  &:hover {
    cursor: pointer;
  }
`;

const CardContentContainer = styled(CardContent, globalOptions)`
  position: relative;
  width: ${props => props["data-m"] ? siteSizes.ability.mobile.width : siteSizes.ability.width};
  max-width: ${props => props["data-m"] ? siteSizes.ability.mobile.width : siteSizes.ability.width};
  height: ${props => props["data-m"] ? siteSizes.ability.mobile.height : siteSizes.ability.height};
  max-height: ${props => props["data-m"] ? siteSizes.ability.mobile.height :siteSizes.ability.height};
  padding: 0;
  transition: 0.3s;
  
  display: flex;
  justify-content: center;
  align-items: center;

  &:last-child {
    padding-bottom: 0;
  }
`;

const AbilityLevel = styled("div", globalOptions)`
  text-align: center;
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
`;

const ActivatedAbility = styled(OfflineBoltIcon, globalOptions)`
  position: absolute;
  top: -5px;
  left: 30px;

  color: ${siteColors.ability.activated};
  border-radius: 50%;
  background-color: ${props => props["data-dm"] ? siteColors.ability.card.dark : siteColors.ability.card.light};
  transition: 0.3s;
  
  &:hover {
    cursor: pointer;
  }
`;


/**
 * Full Individual Ability Component
 *
 * @param {Object} props Component props
 * @param {Object} props.ability The database ability object
 * @param {string} props.fileName The filename for the tower
 * @param {string} props.tier The currently selected tier or tower tier
 * @param {string} props.towerType Shows if the tower is a monkey or hero
 * @param {boolean} props.selected Shows if the ability is currently selected
 * @param {boolean|null} [props.open=null] Shows if the default ability tooltip open functionality will be overridden
 */
export default function Ability({ability, fileName, tier, towerType, selected, open = null, ...rest}) {
    const mobile = useSelector(getMobile);
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <AbilityContainer {...rest}>
                <Tooltip
                    {...(open ? {open: open} : null)}
                    title={
                        <AbilityTooltip
                            ability={ability}
                            tier={tier}
                            towerType={towerType}
                            selected={selected}
                            fileName={fileName}
                        />}
                    borderColor={ability.active
                        ? siteColors.ability.activated
                        : selected
                            ? getTierColor(tier)
                            : null
                    }
                    ga4ID={`ABILITY_${ability.upgrade_path}_${ability.upgrade_tier}_${ability.id}`}
                    placement={mobile ? "bottom" : "right"}
                    active={ability.active}
                >
                    <CardContainer data-s={selected} tier={tier} data-dm={darkMode}>
                        <CardContentContainer data-m={mobile}>
                            { towerType === "monkey" && (
                                <ImageFill
                                    src={ getImageUrl(fileName, ability.upgrade_path, ability.upgrade_tier) }
                                    alt={ ability.name }
                                />
                            )}
                            { towerType === "hero" && (ability.active === 1 ?
                                (
                                    <ImageFill
                                        src={ getImageUrl(fileName, ability.upgrade_path, ability.upgrade_tier) }
                                        alt={ ability.name }
                                    />
                                )
                                :
                                (
                                    <AbilityLevel data-dm={darkMode}>
                                        {ability.upgrade_tier + 1}
                                    </AbilityLevel>
                                ))}
                        </CardContentContainer>
                    </CardContainer>
                    { ability.active === 1 && (<ActivatedAbility data-dm={darkMode}/>) }
                </Tooltip>
            </AbilityContainer>
        </>
    );
}
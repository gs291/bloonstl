import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Card, CardContent} from "@material-ui/core";
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';

import Tooltip from "../tooltip/Tooltip";
import ImageFill from "../image/ImageFill";
import siteSizes from "../../lib/utils/siteSizes";
import siteColors from "../../lib/utils/siteColors";
import {getMobile} from "../../lib/redux/selectors";
import {getDarkMode} from "../../lib/redux/selectors";
import AbilityTooltip from "../tooltip/AbilityTooltip";
import {getImageUrl, getTierColor} from "../../lib/utils/utils";

const AbilityContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`;

const CardContainer = styled(Card)`
  border-radius: 50%;
  background-color: ${props => props["data-dm"] ? siteColors.card.dark : siteColors.card.light};
  border: 3px solid ${props => props["data-s"] ? getTierColor(props.rank) : props["data-dm"] ? siteColors.card.dark : siteColors.card.light};
  transition: 0.3s;
  
  &:hover {
    cursor: pointer;
  }
`;

const CardContentContainer = styled(CardContent)`
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

const AbilityLevel = styled.div`
  text-align: center;
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
`;

const ActivatedAbility = styled(OfflineBoltIcon)`
  position: absolute;
  top: -5px;
  left: 30px;

  color: ${siteColors.ability.activated};
  border-radius: 50%;
  background-color: ${props => props["data-dm"] ? siteColors.card.dark : siteColors.card.light};
  transition: 0.3s;
  
  &:hover {
    cursor: pointer;
  }
`;

export default function Ability({className, ability, fileName, rank, towerType, selected}) {
    const mobile = useSelector(getMobile);
    const darkMode = useSelector(getDarkMode);
    return (
        <>
            <AbilityContainer className={className}>
                <Tooltip
                    title={
                        <AbilityTooltip ability={ability}
                                        rank={rank}
                                        towerType={towerType}
                                        selected={selected}
                        />}
                    active={ability.active}
                >
                    <CardContainer data-s={selected} rank={rank} data-dm={darkMode}>
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
import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Card, CardContent} from "@material-ui/core";
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';

import Tooltip from "../tooltip/Tooltip";
import ImageFill from "../image/ImageFill";
import siteSizes from "../../lib/utils/siteSizes";
import siteColors from "../../lib/utils/siteColors";
import {getMobile} from "../../lib/redux/selectors";
import AbilityTooltip from "../tooltip/AbilityTooltip";
import {getImageUrl, getTierColor} from "../../lib/utils/utils";

const AbilityContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`;

const CardContainer = styled(Card)`
  background-color: ${siteColors.card.dark};
  border: 2px solid ${props => props["data-s"] ? getTierColor(props.rank) : siteColors.card.dark};
  border-radius: 50%;
  
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
  
  display: flex;
  justify-content: center;
  align-items: center;

  &:last-child {
    padding-bottom: 0;
  }
`;

const AbilityLevel = styled.div`
  text-align: center;
  color: ${siteColors.text.dark};
`;

const ActivatedAbility = styled(OfflineBoltIcon)`
  position: absolute;
  top: -5px;
  left: 30px;

  color: ${siteColors.ability.activated};
  border-radius: 50%;
  background-color: ${siteColors.card.dark};
  
  &:hover {
    cursor: pointer;
  }
`;

export default function Ability({className, ability, fileName, rank, towerType, selected}) {
    const mobile = useSelector(getMobile);
    return (
        <>
            <AbilityContainer className={className}>
                <Tooltip
                    title={
                        <AbilityTooltip ability={ability}
                                        rank={rank}
                                        towerType={towerType}
                                        data-s={selected}
                        />}
                    active={ability.active}
                >
                    <CardContainer selected={selected} rank={rank}>
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
                                    <AbilityLevel>
                                        {ability.upgrade_tier + 1}
                                    </AbilityLevel>
                                ))}
                        </CardContentContainer>
                    </CardContainer>
                    { ability.active === 1 && (<ActivatedAbility />) }
                </Tooltip>
            </AbilityContainer>
        </>
    );
}
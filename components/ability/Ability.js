import styled from "@emotion/styled";
import {Card, CardContent} from "@material-ui/core";
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';

import Tooltip from "../tooltip/Tooltip";
import ImageFill from "../image/ImageFill";
import AbilityTooltip from "../tooltip/AbilityTooltip";
import {getImageUrl, rankColors, siteColors} from "../../lib/utils";

const AbilityContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`;

const CardContainer = styled(Card)`
  background-color: ${siteColors.background.card.dark};
  border: 2px solid ${props => props.selected ? rankColors(props.rank) : siteColors.background.card.dark};
  border-radius: 50%;
  
  &:hover {
    cursor: pointer;
  }
`;

const CardContentContainer = styled(CardContent)`
  position: relative;
  width: 45px;
  max-width: 45px;
  height: 45px;
  max-height: 45px;
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
  color: white;
`;

const ActivatedAbility = styled(OfflineBoltIcon)`
  position: absolute;
  top: -5px;
  left: 30px;

  color: yellow;
  border-radius: 50%;
  background-color: ${siteColors.background.card.dark};
`;

export default function Ability({ className, ability, fileName, rank, towerType, selected}) {
    return (
        <>
            <AbilityContainer className={className}>
                <Tooltip title={<AbilityTooltip ability={ability} towerType={towerType} />} upgradeTier={ability.upgrade_tier}>
                    <CardContainer selected={selected} rank={rank}>
                        <CardContentContainer>
                            { towerType === "monkey" && (
                                <ImageFill
                                    src={ getImageUrl(fileName, ability.upgrade_path, ability.upgrade_tier) }
                                    alt={ ability.name }
                                />
                            )}
                            { towerType === "hero" &&
                                ability.active === 1 ? (
                                    <ImageFill
                                        src={ getImageUrl(fileName, ability.upgrade_path, ability.upgrade_tier) }
                                        alt={ ability.name }
                                    />
                                ) : (
                                    <AbilityLevel>
                                        {ability.upgrade_tier + 1}
                                    </AbilityLevel>
                                ) }
                        </CardContentContainer>
                    </CardContainer>
                    { ability.active === 1 && (<ActivatedAbility />) }
                </Tooltip>
            </AbilityContainer>
        </>
    );
}
import styled from "@emotion/styled";
import {Card, CardContent, CardMedia} from "@material-ui/core";

import {getImageUrl, rankColors, siteColors} from "../../lib/utils";

const AbilityContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const CardContainer = styled(Card)`
  background-color: ${siteColors.background.card.dark};
  border: 2px solid ${props => props.selected ? rankColors(props.rank) : siteColors.background.card.dark};
  
  &:hover {
    cursor: pointer;
  }
`;

const CardContentContainer = styled(CardContent)`
  padding: 0;

  &:last-child {
    padding-bottom: 0;
  }
`;

const CardMediaContainer  = styled(CardMedia)`
  min-width: 45px;
  min-height: 45px;
`;

export default function Ability({ className, ability, monkeyFile, rank, selected}) {
    return (
        <>
            <AbilityContainer className={className}>
                <CardContainer selected={selected} rank={rank}>
                    <CardContentContainer>
                        <CardMediaContainer
                            image={getImageUrl(monkeyFile, ability.upgrade_path, ability.upgrade_tier)}
                            title={ability.name}
                        />
                    </CardContentContainer>
                </CardContainer>
            </AbilityContainer>
        </>
    );
}
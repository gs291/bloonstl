import Image from "next/image";
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
  position: relative;
  width: 45px;
  max-width: 45px;
  height: 45px;
  max-height: 45px;
  padding: 0;

  &:last-child {
    padding-bottom: 0;
  }
`;

const AbilityImage  = styled(Image)`
  object-fit: scale-down;
`;

export default function Ability({ className, ability, monkeyFile, rank, selected}) {
    return (
        <>
            <AbilityContainer className={className}>
                <CardContainer selected={selected} rank={rank}>
                    <CardContentContainer>
                        <AbilityImage
                            src={ getImageUrl(monkeyFile, ability.upgrade_path, ability.upgrade_tier) }
                            layout="fill"
                            alt={ ability.name }
                        />
                    </CardContentContainer>
                </CardContainer>
            </AbilityContainer>
        </>
    );
}
import styled from "@emotion/styled";
import {Card, CardContent} from "@material-ui/core";

import ImageFill from "../image/ImageFill";
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

export default function Ability({ className, ability, monkeyFile, rank, selected}) {
    return (
        <>
            <AbilityContainer className={className}>
                <CardContainer selected={selected} rank={rank}>
                    <CardContentContainer>
                        <ImageFill
                            src={ getImageUrl(monkeyFile, ability.upgrade_path, ability.upgrade_tier) }
                            alt={ ability.name }
                        />
                    </CardContentContainer>
                </CardContainer>
            </AbilityContainer>
        </>
    );
}
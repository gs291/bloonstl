import styled from "@emotion/styled";
import {Card, CardContent, CardMedia} from "@material-ui/core";

import {getImageUrl} from "../../lib/utils";
import {background} from "../../lib/site-colors.json";

const AbilityContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const CardContainer = styled(Card)`
  background-color: ${background.hover.dark};
  border: ${props => props.selected ? "2px solid gold" : "2px solid " + background.hover.dark};

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

export default function Ability({ className, ability, monkeyFile}) {
    return (
        <>
            <AbilityContainer className={className}>
                <CardContainer selected={ability.selected}>
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
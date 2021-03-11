import styled from "@emotion/styled";
import {DoubleArrow} from "@material-ui/icons";
import {Card, CardContent, CardMedia} from "@material-ui/core";

import {getImageUrl} from "../../lib/utils";
import {background} from "../../lib/site-colors.json";

const AbilityContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const CardContainer = styled(Card)`
  margin-right: 10px;
  background-color: ${background.hover.dark};
  border: ${props => props.selected ? "2px solid gold" : "2px solid " + background.hover.dark};

  &:hover {
    cursor: pointer;
  }
`;

const CardContentContainer = styled(CardContent)`
  padding: 0;
`;

const CardMediaContainer  = styled(CardMedia)`
  min-width: 75px;
  min-height: 75px;
`;

const UpgradeArrowContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 10px;
`;

export default function Ability({ className, ability, monkeyFile}) {
    return (
        <AbilityContainer>
            <CardContainer selected={ability.selected}>
                <CardContentContainer>
                    <CardMediaContainer
                        image={getImageUrl(monkeyFile, ability.upgrade_path, ability.upgrade_tier)}
                        title={ability.name}
                    />
                </CardContentContainer>
            </CardContainer>
            { ability.upgrade_tier !== 4 && (
                <UpgradeArrowContainer>
                    <DoubleArrow />
                </UpgradeArrowContainer>
            )}
        </AbilityContainer>
    );
}
import styled from "@emotion/styled";
import {Card, CardContent, CardMedia} from "@material-ui/core";
import {getImageUrl} from "../../lib/utils";
import {DoubleArrow} from "@material-ui/icons";

const AbilityContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const CardContainer = styled(Card)`
  margin-right: 10px;
  background-color: #151515;
  border: ${props => props.selected ? "2px solid gold" : ""};

  &:hover {
    cursor: pointer;
  }
`;

const CardMediaContainer  = styled(CardMedia)`
  height: 75px;
  width: 75px;
  background-size: contain;
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
                <div>
                    <CardMediaContainer
                        image={getImageUrl(monkeyFile, ability.upgrade_path, ability.upgrade_tier)}
                        title={ability.name}
                    />
                </div>
            </CardContainer>
            { ability.upgrade_tier !== 4 && (
                <UpgradeArrowContainer>
                    <DoubleArrow />
                </UpgradeArrowContainer>
            )}
        </AbilityContainer>
    );
}
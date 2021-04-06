import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import TowerText from "./TowerText";
import siteColors from "../../lib/utils/siteColors";
import {getDifficulty} from "../../lib/redux/selectors";
import {getThousandsNumber, goldCost} from "../../lib/utils/utils";

const TowerTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export default function TowerInfo({tower}) {
    const difficulty = useSelector(getDifficulty);

    return (
        <>
            <TowerTextContainer>
                <TowerText variant={"h2"}>
                    {tower.name}
                </TowerText>
                <TowerText variant="body1" textColor={siteColors.tower.description} font={1}>
                    {tower.description}
                </TowerText>
                <br />
                <TowerText variant="body2" textColor={siteColors.tower.gold}>
                    In-game cost:&nbsp;
                    ${goldCost(tower.cost_gold, difficulty)}
                </TowerText>
                { typeof tower.cost_cash === "number" && (
                    <TowerText variant="body2" textColor={siteColors.tower.cash}>
                        Cash cost: {tower.cost_cash > 0 ? `\$${getThousandsNumber(tower.cost_cash)}` : "FREE"}
                    </TowerText>
                )}
            </TowerTextContainer>
        </>
    );
}
import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Typography} from "@material-ui/core";

import TowerText from "./TowerText";
import {goldCost, siteColors} from "../../lib/utils";
import {getDifficulty, getMobile} from "../../lib/redux/selectors";

const TowerTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function TowerInfo({tower}) {
    const mobile = useSelector(getMobile);
    const difficulty = useSelector(getDifficulty);

    return (
        <>
            <TowerTextContainer>
                <TowerText variant={mobile ? "h4" : "h2"}>
                    {tower.name}
                </TowerText>
                <TowerText variant="body1" textColor={siteColors.tower.description} text={1}>
                    {tower.description}
                </TowerText>
                <TowerText variant="body2" textColor={siteColors.tower.gold}>
                    In-game cost:&nbsp;
                    ${goldCost(tower.cost_gold, difficulty)}
                </TowerText>
                { typeof tower.cost_cash === "number" && (
                    <TowerText variant="body2" textColor={siteColors.tower.cash}>
                        Cash cost: {tower.cost_cash > 0 ? `\$${tower.cost_cash}` : "FREE"}
                    </TowerText>
                )}
            </TowerTextContainer>
        </>
    );
}
import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Typography} from "@material-ui/core";

import {goldCost, siteColors} from "../../lib/utils";
import {getDifficulty, getMobile} from "../../lib/redux/selectors";

const TowerText = styled.div`
  display: flex;
  flex-direction: column;
`;

const TowerDetail = styled(Typography)`
  color: ${props => props.textcolor ? props.textcolor : "white"};
  ${props => props.text ? `font-family: sans-serif;` : "" }
`;

export default function TowerInfo({tower}) {
    const mobile = useSelector(getMobile);
    const difficulty = useSelector(getDifficulty);

    return (
        <>
            <TowerText>
                <TowerDetail variant={mobile ? "h4" : "h2"}>
                    {tower.name}
                </TowerDetail>
                <TowerDetail variant="body1" textcolor={siteColors.tower.description} text="true">
                    {tower.description}
                </TowerDetail>
                <TowerDetail variant="caption" textcolor={siteColors.tower.gold}>
                    In-game cost:&nbsp;
                    ${goldCost(tower.cost_gold, difficulty)}
                </TowerDetail>
                { typeof tower.cost_cash === "number" && (
                    <TowerDetail variant="caption" textcolor={siteColors.tower.cash}>
                        Cash cost: {tower.cost_cash > 0 ? `\$${tower.cost_cash}` : "FREE"}
                    </TowerDetail>
                )}
            </TowerText>
        </>
    );
}
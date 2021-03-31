import styled from "@emotion/styled";
import {Typography} from "@material-ui/core";

import {goldCost} from "../../lib/utils";
import {useSelector} from "react-redux";
import {getDifficulty, getMobile} from "../../lib/redux/selectors";

const TowerText = styled.div`
  display: flex;
  flex-direction: column;
`;

const TowerDetail = styled(Typography)`
  color: white;
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
                <TowerDetail variant="body1">
                    {tower.description}
                </TowerDetail>
                <TowerDetail variant="caption">
                    ${goldCost(tower.cost_gold, difficulty)}
                </TowerDetail>
            </TowerText>
        </>
    );
}
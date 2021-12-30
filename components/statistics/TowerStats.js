import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import TowerText from "../tower/TowerText";
import StatsContainer from "./StatsContainer";
import StatItemWrapper from "./StatItemWrapper";
import {getMobile} from "../../lib/redux/selectors";
import StatsTargets from "./StatsTargets";

const ItemsContainer = styled.div`
  width: ${props => props["data-m"] ? 100 : 100}%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

export default function TowerStats({stats, defaults, targets, ...rest}) {
    const mobile = useSelector(getMobile);

    return (
        <>
            <StatsContainer title="Tower Stats" direction="column">
                <ItemsContainer data-m={mobile}>
                    <StatItemWrapper text="Damage" value={stats.damage} prevValue={defaults.damage} />
                    <StatItemWrapper text="Pierce" value={stats.pierce} prevValue={defaults.pierce} />
                    <StatItemWrapper text="Range" value={stats.range} prevValue={defaults.range} />
                    <StatItemWrapper text="Atk Spd" value={stats.attack_speed} prevValue={defaults.attack_speed} />
                    <StatItemWrapper text="Projectiles" value={stats.projectile_count} prevValue={defaults.projectile_count} />
                    <StatItemWrapper text="Type" value={stats.damage_type} prevValue={defaults.damage_type} />
                </ItemsContainer>
                <ItemsContainer>
                    <StatsTargets targets={targets} />
                </ItemsContainer>
            </StatsContainer>
        </>
    );
}
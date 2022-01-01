import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import StatsTargets from "./StatsTargets";
import StatsContainer from "./StatsContainer";
import StatItemWrapper from "./StatItemWrapper";
import {getMobile} from "../../lib/redux/selectors";
import {getMonkeyColor} from "../../lib/utils/utils";

const ItemsContainer = styled.div`
  width: ${props => props["data-m"] ? 100 : 100}%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

export default function TowerStats({stats, defaults, type, targets, ...rest}) {
    const mobile = useSelector(getMobile);

    return (
        <>
            <StatsContainer title="Tower Stats" direction="column" type={type}>
                <ItemsContainer data-m={mobile}>
                    <StatItemWrapper text="Damage" value={stats.damage} prevValue={defaults.damage} data-s={getMonkeyColor(type)} />
                    <StatItemWrapper text="Pierce" value={stats.pierce} prevValue={defaults.pierce} data-s={getMonkeyColor(type)} />
                    <StatItemWrapper text="Range" value={stats.range} prevValue={defaults.range} data-s={getMonkeyColor(type)} />
                    <StatItemWrapper text="Atk Spd" value={stats.attack_speed} prevValue={defaults.attack_speed} data-s={getMonkeyColor(type)} />
                    <StatItemWrapper text="Projectiles" value={stats.projectile_count} prevValue={defaults.projectile_count} data-s={getMonkeyColor(type)} />
                    <StatItemWrapper text="Type" value={stats.damage_type} prevValue={defaults.damage_type} data-s={getMonkeyColor(type)} />
                </ItemsContainer>
                <ItemsContainer>
                    <StatsTargets targets={targets} />
                </ItemsContainer>
            </StatsContainer>
        </>
    );
}
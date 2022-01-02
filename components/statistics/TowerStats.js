import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import StatsTargets from "./StatsTargets";
import StatsContainer from "./StatsContainer";
import StatItemWrapper from "./StatItemWrapper";
import {getMobile} from "../../lib/redux/selectors";
import {getHeroColor, getMonkeyColor} from "../../lib/utils/utils";

const ItemsContainer = styled.div`
  width: ${props => props["data-m"] ? 100 : 100}%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

export default function TowerStats({stats, defaults, type, towerType, targets, ...rest}) {
    const mobile = useSelector(getMobile);
    const color = towerType === "hero" ? getHeroColor(type) : getMonkeyColor(type);

    return (
        <>
            <StatsContainer title="Tower Stats" direction="column" type={type} towerType={towerType}>
                <ItemsContainer data-m={mobile}>
                    <StatItemWrapper text="Damage" value={stats.damage} prevValue={defaults.damage} data-s={color} />
                    <StatItemWrapper text="Pierce" value={stats.pierce} prevValue={defaults.pierce} data-s={color} />
                    <StatItemWrapper text="Range" value={stats.range} prevValue={defaults.range} data-s={color} />
                    <StatItemWrapper text="Atk Spd" value={stats.attack_speed} prevValue={defaults.attack_speed} data-s={color} />
                    <StatItemWrapper text="Projectiles" value={stats.projectile_count} prevValue={defaults.projectile_count} data-s={color} />
                    <StatItemWrapper text="Type" value={stats.damage_type} prevValue={defaults.damage_type} data-s={color} />
                </ItemsContainer>
                <ItemsContainer>
                    <StatsTargets targets={targets} />
                </ItemsContainer>
            </StatsContainer>
        </>
    );
}
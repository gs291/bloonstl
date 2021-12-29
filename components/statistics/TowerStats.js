import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import Types from "./Types";
import StatItem from "./StatItem";
import TowerText from "../tower/TowerText";
import StatsContainer from "./StatsContainer";
import {getMobile} from "../../lib/redux/selectors";

const ItemsContainer = styled.div`
  width: ${props => props["data-m"] ? 100 : 100}%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;


export default function TowerStats({stats, targets, ...rest}) {
    const mobile = useSelector(getMobile);

    return (
        <>
            <StatsContainer title="Tower Stats" direction="column">
                <ItemsContainer data-m={mobile}>
                    <StatItem text="Damage" value={stats.damage} />
                    <StatItem text="Pierce" value={stats.pierce} />
                    <StatItem text="Range" value={stats.range} />
                    <StatItem text="Atk Spd" value={stats.attack_speed} decimals={3} suffix="&nbsp;s"/>
                    <StatItem text="Projectiles" value={stats.projectile_count} />
                    <StatItem text="Type" value={stats.damage_type} counter={false} tooltip={<Types type={stats.damage_type} />}/>
                </ItemsContainer>
                <ItemsContainer>
                    {targets.map(target => (
                        <TowerText variant="body1" font={true} key={target}>
                            {target}
                        </TowerText>
                    ))}
                </ItemsContainer>
            </StatsContainer>
        </>
    );
}
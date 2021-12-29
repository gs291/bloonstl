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

const TextTooltip = ({text}) => (
    <>
        <TowerText variant="body1" font={true}>
            {text}
        </TowerText>
    </>
);

export default function TowerStats({stats, targets, ...rest}) {
    const mobile = useSelector(getMobile);

    return (
        <>
            <StatsContainer title="Tower Stats" direction="column">
                <ItemsContainer data-m={mobile}>
                    <StatItem text="Damage" value={stats.damage} tooltip={<TextTooltip text={`Damage (${stats.damage}) is the amount of health a single hit of an attack removes.`} />} />
                    <StatItem text="Pierce" value={stats.pierce} tooltip={<TextTooltip text={`Pierce (${stats.pierce}) (a.k.a Popping Power) is the number of different targets a single projectile can hit.`} />} />
                    <StatItem text="Range" value={stats.range} tooltip={<TextTooltip text={`Range (${stats.range}) is the radius of the targetable area.`} />} />
                    <StatItem text="Atk Spd" value={stats.attack_speed} decimals={3} suffix="&nbsp;s" tooltip={<TextTooltip text={`Attack Speed (${stats.attack_speed}) (a.k.a Reload time) is the number of seconds between attacks.`} />} />
                    <StatItem text="Projectiles" value={stats.projectile_count} tooltip={<TextTooltip text={`Projectile Count (${stats.projectile_count}) is the number of projectiles emitted at once.`} />} />
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
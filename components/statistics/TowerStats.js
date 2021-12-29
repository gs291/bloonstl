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

const InitialTypeText = styled(TowerText)`
  margin-top: 5px;
  margin-bottom: 10px;
`;

const TypesTooltip = ({type, prevType}) => (
    <>
        <InitialTypeText variant="subtitle1" font={true}>
            Initial tower attack type: {prevType}
        </InitialTypeText>
        <Types type={type} />
    </>
)

export default function TowerStats({stats, defaults, targets, ...rest}) {
    const mobile = useSelector(getMobile);

    return (
        <>
            <StatsContainer title="Tower Stats" direction="column">
                <ItemsContainer data-m={mobile}>
                    <StatItem text="Damage" value={stats.damage} prevValue={defaults.damage} tooltip={<TextTooltip text={`Damage (${stats.damage}) is the amount of health a single hit of an attack removes.`} />} />
                    <StatItem text="Pierce" value={stats.pierce} prevValue={defaults.pierce} tooltip={<TextTooltip text={`Pierce (${stats.pierce}) (a.k.a Popping Power) is the number of different targets a single projectile can hit.`} />} />
                    <StatItem text="Range" value={stats.range} prevValue={defaults.range} tooltip={<TextTooltip text={`Range (${stats.range}) is the radius of the targetable area.`} />} />
                    <StatItem text="Atk Spd" value={stats.attack_speed} prevValue={defaults.attack_speed} decimals={3} suffix="&nbsp;s" tooltip={<TextTooltip text={`Attack Speed (${stats.attack_speed}) (a.k.a Reload time) is the number of seconds between attacks.`} />} />
                    <StatItem text="Projectiles" value={stats.projectile_count} prevValue={defaults.projectile_count} tooltip={<TextTooltip text={`Projectile Count (${stats.projectile_count}) is the number of projectiles emitted at once.`} />} />
                    <StatItem text="Type" value={stats.damage_type} counter={false} tooltip={<TypesTooltip type={stats.damage_type} prevType={defaults.damage_type} />}/>
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
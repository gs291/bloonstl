import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import StatItem from "./StatItem";
import TowerText from "../tower/TowerText";
import StatsContainer from "./StatsContainer";
import FixedDivider from "../divider/FixedDivider";
import {getMobile} from "../../lib/redux/selectors";

const ItemsContainer = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  width: ${props => props["data-m"] ? 33 : 25}%;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 5px;
`;


export default function DamageStats({stats, ...rest}) {
    const mobile = useSelector(getMobile);

    const DamageText = (type, typeDamage, extraDamage = 0 ) => {
        const totalDamage = typeDamage + stats.damage + extraDamage;

        const typeDamageText = `${typeDamage} ${type} Damage`;

        let extraDamageText = "";
        const extraType = type.match(/Fortified\s(\w*)/);
        if (extraType) {
            extraDamageText = `${extraDamage} ${extraType[1]} Damage`;
        }

        const baseDamageText = `${stats.damage} Base Damage`;

        return (
            <>
                <TowerText variant="body1" font={true}>
                    + {typeDamageText}
                </TowerText>
                {extraDamageText !== "" && (
                    <TowerText variant="body1" font={true}>
                        + {extraDamageText}
                    </TowerText>
                )}
                <TowerText variant="body1" font={true}>
                    + {baseDamageText}
                </TowerText>
                <FixedDivider />
                <TowerText variant="body1" font={true}>
                    = {totalDamage} Total {type} Damage
                </TowerText>
            </>
        );
    }

    return (
        <>
            <StatsContainer title="Damage Stats">
                {mobile ? (
                    <>
                        <ItemsContainer data-m={mobile}>
                            <StatItem text="Camo" value={stats.camo_damage + stats.damage} tooltip={DamageText("Camo", stats.camo_damage)}/>
                            <StatItem text="Boss" value={stats.boss_damage + stats.damage} tooltip={DamageText("Boss", stats.boss_damage)}/>
                            <StatItem text="Fortified" value={stats.fortified_damage + stats.damage} tooltip={DamageText("Fortified", stats.fortified_damage)}/>
                            <StatItem text="Status" value={stats.stun_damage + stats.damage} tooltip={DamageText("Status", stats.stun_damage)}/>
                        </ItemsContainer>
                        <ItemsContainer data-m={mobile}>
                            <StatItem text="Ceramic" value={stats.ceramic_damage + stats.damage} tooltip={DamageText("Ceramic", stats.ceramic_damage)}/>
                            <StatItem text="Lead" value={stats.lead_damage + stats.damage} tooltip={DamageText("Lead", stats.lead_damage)}/>
                            <StatItem text="F Lead" value={stats.fortified_lead_damage + stats.lead_damage + stats.damage} tooltip={DamageText("Fortified Lead", stats.fortified_lead_damage, stats.lead_damage)}/>
                            <StatItem text="Stun" value={stats.stun_damage + stats.damage} tooltip={DamageText("Stun", stats.stun_damage)}/>
                        </ItemsContainer>
                        <ItemsContainer data-m={mobile}>
                            <StatItem text="Crit" value={stats.crit_damage + stats.damage} tooltip={DamageText("Crit", stats.crit_damage)}/>
                            <StatItem text="Moab" value={stats.moab_damage + stats.damage} tooltip={DamageText("Moab", stats.moab_damage)}/>
                            <StatItem text="F MOAB" value={stats.fortified_moab_damage + stats.moab_damage + stats.damage} tooltip={DamageText("Fortified MOAB", stats.fortified_moab_damage, stats.moab_damage)}/>
                        </ItemsContainer>
                    </>
                ) : (
                    <>
                        <ItemsContainer data-m={mobile}>
                            <StatItem text="Camo" value={stats.camo_damage + stats.damage} tooltip={DamageText("Camo", stats.camo_damage)}/>
                            <StatItem text="Boss" value={stats.boss_damage + stats.damage} tooltip={DamageText("Boss", stats.boss_damage)}/>
                            <StatItem text="Fortified" value={stats.fortified_damage + stats.damage} tooltip={DamageText("Fortified", stats.fortified_damage)}/>
                        </ItemsContainer>
                        <ItemsContainer data-m={mobile}>
                            <StatItem text="Ceramic" value={stats.ceramic_damage + stats.damage} tooltip={DamageText("Ceramic", stats.ceramic_damage)}/>
                            <StatItem text="Lead" value={stats.lead_damage + stats.damage} tooltip={DamageText("Lead", stats.lead_damage)}/>
                            <StatItem text="F Lead" value={stats.fortified_lead_damage + stats.lead_damage + stats.damage} tooltip={DamageText("Fortified Lead", stats.fortified_lead_damage, stats.lead_damage)}/>
                        </ItemsContainer>
                        <ItemsContainer data-m={mobile}>
                            <StatItem text="Crit" value={stats.crit_damage + stats.damage} tooltip={DamageText("Crit", stats.crit_damage)}/>
                            <StatItem text="Moab" value={stats.moab_damage + stats.damage} tooltip={DamageText("Moab", stats.moab_damage)}/>
                            <StatItem text="F MOAB" value={stats.fortified_moab_damage + stats.moab_damage + stats.damage} tooltip={DamageText("Fortified MOAB", stats.fortified_moab_damage, stats.moab_damage)}/>
                        </ItemsContainer>
                        <ItemsContainer data-m={mobile}>
                            <StatItem text="Status" value={stats.stun_damage + stats.damage} tooltip={DamageText("Status", stats.stun_damage)}/>
                            <StatItem text="Stun" value={stats.stun_damage + stats.damage} tooltip={DamageText("Stun", stats.stun_damage)}/>
                        </ItemsContainer>
                    </>
                )}
            </StatsContainer>
        </>
    );
}

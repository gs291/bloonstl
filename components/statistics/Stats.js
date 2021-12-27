import styled from "@emotion/styled";

import BaseStats from "./BaseStats";
import InfoStats from "./InfoStats";
import StatsCard from "./StatsCard";
import DamageStats from "./DamageStats";
import TowerText from "../tower/TowerText";

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px 50px;
`;

export default function Stats({stats, ...rest}) {

    return (
        <>
            <BaseStats stats={{
                "attack_speed": stats.modifiers.attack_speed,
                "range": stats.modifiers.range,
                "pierce": stats.modifiers.pierce,
                "hotkey": stats.modifiers.hotkey,
                "damage": stats.modifiers.damage,
                "damage_type": stats.modifiers.damage_type
            }}
            />

            <DamageStats stats={{
                "boss_damage": stats.modifiers.boss_damage,
                "camo_damage": stats.modifiers.camo_damage,
                "ceramic_damage": stats.modifiers.ceramic_damage,
                "crit_damage": stats.modifiers.crit_damage,
                "fortified_damage": stats.modifiers.fortified_damage,
                "fortified_lead_damage": stats.modifiers.fortified_lead_damage,
                "fortified_moab_damage": stats.modifiers.fortified_moab_damage,
                "lead_damage": stats.modifiers.lead_damage,
                "moab_damage": stats.modifiers.moab_damage,
                "stun_damage": stats.modifiers.stun_damage,
                "status_damage": stats.modifiers.status_damage
            }}
            />

            <InfoStats stats={{
                "footprint": stats.modifiers.footprint,
                "projectile_count": stats.modifiers.projectile_count,
                "duration": stats.modifiers.duration,
                "income": stats.modifiers.income,
                "cooldown": stats.modifiers.cooldown,
                "crit_occurance": stats.modifiers.crit_occurance,
                "delay": stats.modifiers.delay
            }}
            />

            {stats.targets.map(target => (
                <TowerText variant="body1" font={true} key={target}>
                    {target}
                </TowerText>
            ))}
            {stats.notes.map(note => (
                <TowerText variant="body1" font={true} key={note}>
                    note: {note}
                </TowerText>
            ))}

            <CardsContainer>
                <StatsCard stats={stats.abils} type="abils" />
                <StatsCard stats={stats.attacks} type="attacks" />
                <StatsCard stats={stats.buffs} type="buffs" />
                <StatsCard stats={stats.statuses} type="statuses" />
            </CardsContainer>
        </>
    );
}
import BaseStats from "./BaseStats";
import DamageStats from "./DamageStats";
import InfoStats from "./InfoStats";

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
                "stun_damage": stats.modifiers.stun_damage
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

        </>
    );
}
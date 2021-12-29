import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import StatNotes from "./StatNotes";
import MoreStats from "./MoreStats";
import TowerStats from "./TowerStats";
import DamageStats from "./DamageStats";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode, getMobile} from "../../lib/redux/selectors";

const AllModifiersAndNotes = styled.div`
  margin-top: 25px;
  margin-bottom: 25px;
  width: 100%;
`;

const ExtraStats = styled.div`
  display: flex;
  flex-direction: ${props => props["data-m"] ? "column" : "row"};
  gap: 20px;
  width: 100%;

  margin-top: 20px;
  margin-bottom: 20px;
`;

const StatsContainer = styled.div`
  width: 100%;
  border-radius: 10px;
  transition: 0.3s;
  border: 4px solid ${props => props["data-dm"] ? siteColors.stats.dark : siteColors.stats.light};
  background-color: ${props => props["data-dm"] ? siteColors.stats.dark : siteColors.stats.light};
`;

const DamageContainer = styled.div`
  width: ${props => props["data-m"] ? 100 : 70}%;
  border-radius: 10px;
  transition: 0.3s;
  border: 4px solid ${props => props["data-dm"] ? siteColors.stats.dark : siteColors.stats.light};
  background-color: ${props => props["data-dm"] ? siteColors.stats.dark : siteColors.stats.light};
`;

const MoreContainer = styled.div`
  width: ${props => props["data-m"] ? 100 : 30}%;
  border-radius: 10px;
  transition: 0.3s;
  border: 4px solid ${props => props["data-dm"] ? siteColors.stats.dark : siteColors.stats.light};
  background-color: ${props => props["data-dm"] ? siteColors.stats.dark : siteColors.stats.light};
`;

export default function Stats({stats, ...rest}) {
    const mobile = useSelector(getMobile);
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <AllModifiersAndNotes>
                <StatsContainer data-dm={darkMode}>
                    <TowerStats
                        stats={{
                            "attack_speed": stats.modifiers.attack_speed, "range": stats.modifiers.range,
                            "pierce": stats.modifiers.pierce, "projectile_count": stats.modifiers.projectile_count,
                            "damage": stats.modifiers.damage, "damage_type": stats.modifiers.damage_type
                        }}
                        defaults={{
                            "attack_speed": stats.defaults.attack_speed, "range": stats.defaults.range,
                            "pierce": stats.defaults.pierce, "projectile_count": stats.defaults.projectile_count,
                            "damage": stats.defaults.damage, "damage_type": stats.defaults.damage_type
                        }}
                        targets={stats.targets}
                    />
                </StatsContainer>

                <ExtraStats data-m={mobile}>
                    <DamageContainer data-m={mobile} data-dm={darkMode}>
                        <DamageStats
                            stats={{
                                "damage": stats.modifiers.damage,
                                "boss_damage": stats.modifiers.boss_damage, "status_damage": stats.modifiers.status_damage,
                                "camo_damage": stats.modifiers.camo_damage, "ceramic_damage": stats.modifiers.ceramic_damage, "crit_damage": stats.modifiers.crit_damage,
                                "fortified_damage": stats.modifiers.fortified_damage, "fortified_lead_damage": stats.modifiers.fortified_lead_damage, "fortified_moab_damage": stats.defaults.fortified_moab_damage,
                                "stun_damage": stats.modifiers.stun_damage, "lead_damage": stats.modifiers.lead_damage, "moab_damage": stats.modifiers.moab_damage,
                            }}
                            defaults={{
                                "damage": stats.defaults.damage,
                                "boss_damage": stats.defaults.boss_damage, "status_damage": stats.defaults.status_damage,
                                "camo_damage": stats.defaults.camo_damage, "ceramic_damage": stats.defaults.ceramic_damage, "crit_damage": stats.defaults.crit_damage,
                                "fortified_damage": stats.defaults.fortified_damage, "fortified_lead_damage": stats.defaults.fortified_lead_damage, "fortified_moab_damage": stats.defaults.fortified_moab_damage,
                                "stun_damage": stats.defaults.stun_damage, "lead_damage": stats.defaults.lead_damage, "moab_damage": stats.defaults.moab_damage,
                            }}
                        />
                    </DamageContainer>

                    <MoreContainer data-m={mobile} data-dm={darkMode}>
                        <MoreStats
                            stats={{
                                "footprint": stats.modifiers.footprint, "hotkey": stats.modifiers.hotkey, "duration": stats.modifiers.duration,
                                "income": stats.modifiers.income, "cooldown": stats.modifiers.cooldown,
                                "crit_occurance": stats.modifiers.crit_occurance, "delay": stats.modifiers.delay
                            }}
                            defaults={{
                                "footprint": stats.defaults.footprint, "hotkey": stats.defaults.hotkey, "duration": stats.defaults.duration,
                                "income": stats.defaults.income, "cooldown": stats.defaults.cooldown,
                                "crit_occurance": stats.defaults.crit_occurance, "delay": stats.defaults.delay
                            }}
                        />
                    </MoreContainer>
                </ExtraStats>

                {stats.notes.length > 0 && (
                    <StatsContainer data-dm={darkMode}>
                        <StatNotes notes={stats.notes} />
                    </StatsContainer>
                )}
            </AllModifiersAndNotes>
        </>
    );
}
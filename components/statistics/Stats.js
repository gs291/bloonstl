import {useSelector} from "react-redux";
import {styled} from "@mui/material/styles";

import StatNotes from "./StatNotes";
import MoreStats from "./MoreStats";
import TowerStats from "./TowerStats";
import DamageStats from "./DamageStats";
import StatsLegend from "./StatsLegend";
import StatsContainer from "./StatsContainer";
import {getMobile} from "../../lib/redux/selectors";
import {globalOptions} from "../../lib/utils/emotionStyled";
import {getHeroColor, getMonkeyColor, rgbaHex} from "../../lib/utils/utils";


const AllModifiersAndNotes = styled("div", globalOptions)`
  margin-top: 25px;
  margin-bottom: 25px;
  width: ${props => props["data-m"] ? 100 : 95}%;
`;

const ExtraStats = styled("div", globalOptions)`
  display: flex;
  flex-direction: ${props => props["data-m"] ? "column" : "row"};
  gap: 20px;
  width: 100%;

  margin-top: 20px;
  margin-bottom: 20px;
`;

const ModifierContainer = styled("div", globalOptions)`
  width: 100%;
  border-radius: 10px;
  border: 6px solid ${props =>
          props["data-t"]
                  ? rgbaHex(props["data-tow"] === "hero" 
                          ? getHeroColor(props["data-t"], props.theme) 
                          :  getMonkeyColor(props["data-t"], props.theme)
                          , props.theme.palette.mode === "dark" ? 0.65 : 1)
                  : props.theme.palette.stats.primary
  };
`;

const DamageContainer = styled(ModifierContainer)`
  width: ${props => props["data-m"] ? 100 : 70}%;
`;

const MoreContainer = styled(ModifierContainer)`
  width: ${props => props["data-m"] ? 100 : 30}%;
`;

/**
 * The tower stats component
 *  - Shows the statistics for the tower
 *
 * @param {Object} props Component props
 * @param {Object} props.stats Object containing ALL the stats of the tower
 * @param {string} props.type Shows the Hero name or monkey type
 * @param {Object|number} props.path Shows the current ability/level path
 * @param {string} [props.towerType="monkey"] Shows if the tower is a monkey or hero
 */
export default function Stats({stats, type, path, towerType = "monkey", ...rest}) {
    const mobile = useSelector(getMobile);

    return (
        <>
            <AllModifiersAndNotes data-m={mobile}>
                <StatsLegend path={path} towerType={towerType} />
                <ModifierContainer data-t={type} data-tow={towerType}>
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
                        type={type}
                        towerType={towerType}
                    />
                </ModifierContainer>

                <ExtraStats data-m={mobile}>
                    <DamageContainer data-m={mobile} data-t={type} data-tow={towerType}>
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
                            type={type}
                            towerType={towerType}
                        />
                    </DamageContainer>

                    <MoreContainer data-m={mobile} data-t={type} data-tow={towerType}>
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
                            type={type}
                            towerType={towerType}
                        />
                    </MoreContainer>
                </ExtraStats>

                {stats.notes.length > 0 && (
                    <ModifierContainer data-t={type} data-tow={towerType}>
                        <StatsContainer title="Notes" direction="column" type={type} towerType={towerType}>
                            <StatNotes notes={stats.notes} />
                        </StatsContainer>
                    </ModifierContainer>
                )}
            </AllModifiersAndNotes>
        </>
    );
}
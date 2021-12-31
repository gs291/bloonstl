import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import StatTab from "./StatTab";
import StatNotes from "./StatNotes";
import StatsTargets from "./StatsTargets";
import TowerText from "../tower/TowerText";
import {rgbaHex} from "../../lib/utils/utils";
import StatItemWrapper from "./StatItemWrapper";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";


const CardContainer = styled.div`
  width: 100%;
  max-width: 310px;
  
  display: flex;
  flex-direction: column;
`;

const Card = styled.div`
  padding: 0.5em 0.3em;
  margin-bottom: 10px;
  width: 100%;
  height: 100%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  box-shadow: -5px 5px 5px 0 ${props => rgbaHex(props["data-dm"] ? siteColors.stats[props["data-t"]].dark : siteColors.stats[props["data-t"]].light, 0.5)};
  background-color: ${props => props["data-dm"] ? siteColors.stats[props["data-t"]].dark : siteColors.stats[props["data-t"]].light};
  border: 1px solid ${props => props["data-dm"] ? siteColors.stats[props["data-t"]].border.dark : siteColors.stats[props["data-t"]].border.light};
  border-top-width: 0;
  
  position: relative;
  
  display: flex;
  flex-direction: column;

  &:before {
    content: "";
    position: absolute;
    left: -1px;
    right: 95%;
    bottom: 95%;
    top: 0;

    border-top-left-radius: 10px;
    border-top: 1px solid ${props => props["data-dm"] ? siteColors.stats[props["data-t"]].border.dark : siteColors.stats[props["data-t"]].border.light};
  }
`;

const CardContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 10px 0;
  
  padding: 0.5em 5px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: ${props => props["data-dm"] ? siteColors.stats[props["data-t"]].background.dark : siteColors.stats[props["data-t"]].background.light};
`;

const Modifiers = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px;
`;

const ModifierContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 85px;
`;

const TitleContainer = styled.div`
  width: 100%;
  margin-bottom: 10px;
  
  text-align: center;
`;

const ListItem = styled.li`
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
`;

const varToText = (variable) => variable &&
    variable
        .split('_')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');

const statCodeParser = (code) => {
    const codes = {
        "damage": "Damage", "pierce": "Pierce", "range": "Range", "attack_speed": "Atk Spd", "damage_type": "Type",
        "camo_damage": "Camo", "ceramic_damage": "Ceramic", "crit_damage": "Crit", "boss_damage": "Boss", "pierce_impact": "P Impact",
        "lead_damage": "Lead", "moab_damage": "Moab", "fortified_damage": "Fortified", "delay": "Delay", "max_per_round": "Max/Round",
        "fortified_lead_damage": "F Lead", "fortified_moab_damage": "F Moab", "status_damage": "Status",
        "stun_damage": "Stun", "hotkey": "Hotkey", "footprint": "Footprint", "income": "Income", "slow": "Slow",
        "projectile_count": "Projectiles", "duration": "Duration", "cooldown": "Cooldown", "crit_occurance": "Crit Rate",
    }

    return codes[code];
}

export default function StatsCard({stats, type, level = 1, parentBackgroundColor, ...rest}) {
    const darkMode = useSelector(getDarkMode);

    const getTitle = (type) => {
        switch (type) {
            case "abils": return "Ability";
            case "attacks": return "Attack";
            case "buffs": return "Buff";
            case "statuses": return "Status";
        }
    };

    return (
        <>
            {Object.keys(stats).map(key => (
                <CardContainer key={key}>
                    <StatTab type={type} title={getTitle(type)} level={level} parentBackgroundColor={parentBackgroundColor}/>
                    <Card data-t={type} data-dm={darkMode}>
                        <TitleContainer>
                            <TowerText variant={level === 1 ? "h5" : "h6"}>
                                {varToText(key)}
                            </TowerText>
                            {stats[key].description !== "" && (
                                <TowerText variant={level === 1 ? "subtitle2" : "caption"} font={true}>
                                    {stats[key].description}
                                </TowerText>
                            )}
                        </TitleContainer>
                        <CardContent data-t={type} data-dm={darkMode}>
                            <Modifiers>
                                {Object.keys(stats[key].modifiers).map(mod => {
                                    if (((stats[key].modifiers[mod] > 0 && mod !== "projectile_count")
                                        || (mod === "damage_type" && stats[key].modifiers[mod] !== "")
                                        || (mod === "projectile_count" && stats[key].modifiers[mod] > 1))) {
                                        return (
                                            <ModifierContainer key={mod}>
                                                <StatItemWrapper text={statCodeParser(mod)} value={stats[key].modifiers[mod]} size="small" counter={false}/>
                                            </ModifierContainer>
                                        );
                                    }
                                })}
                            </Modifiers>
                            {Object.keys(stats[key].abils).length > 0 && (
                                <StatsCard stats={stats[key].abils} level={level + 1} type="abils" parentBackgroundColor={darkMode ? siteColors.stats[type].background.dark : siteColors.stats[type].background.light} />
                            )}
                            {Object.keys(stats[key].attacks).length > 0 && (
                                <StatsCard stats={stats[key].attacks} level={level + 1} type="attacks" parentBackgroundColor={darkMode ? siteColors.stats[type].background.dark : siteColors.stats[type].background.light} />
                            )}
                            {Object.keys(stats[key].buffs).length > 0 && (
                                <StatsCard stats={stats[key].buffs} level={level + 1} type="buffs" parentBackgroundColor={darkMode ? siteColors.stats[type].background.dark : siteColors.stats[type].background.light} />
                            )}
                            {Object.keys(stats[key].statuses).length > 0 && (
                                <StatsCard stats={stats[key].statuses} level={level + 1} type="statuses" parentBackgroundColor={darkMode ? siteColors.stats[type].background.dark : siteColors.stats[type].background.light} />
                            )}
                            <StatsTargets targets={stats[key].targets} />
                            {stats[key].notes.length > 0 && (
                                <StatNotes notes={stats[key].notes} size="small"/>
                            )}
                        </CardContent>
                    </Card>
                </CardContainer>
            ))}
        </>
    );
}
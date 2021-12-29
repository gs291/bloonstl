import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import TowerText from "../tower/TowerText";
import StatItemWrapper from "./StatItemWrapper";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";

const Card = styled.div`
  padding: 0.25em 1em;
  margin-top: 10px;
  margin-bottom: 10px;
  max-width: 320px;
  border-radius: 10px;

  box-shadow: -5px 5px 5px 0 rgb(0 0 0 / 50%);
  background-color: ${props => props["data-dm"] ? siteColors.stats[props["data-t"]].dark : siteColors.stats[props["data-t"]].light};
  border: 1px solid ${props => props["data-dm"] ? siteColors.stats[props["data-t"]].border.dark : siteColors.stats[props["data-t"]].border.light};;
`;

const Modifiers = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

const ModifierContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 85px;
`;

const Type = styled(TowerText)`
  text-align: center;
  border-bottom: 1px solid;
  margin-bottom: 10px;
`;

const Title = styled(TowerText)`
  margin-bottom: 15px;
`;

const Divider = styled(TowerText)`
  margin-left: 3px;
  margin-right: 5px;
`;

const varToText = (variable) => variable &&
    variable
        .split('_')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');

const statCodeParser = (code) => {
    const codes = {
        "damage": "Damage",
        "pierce": "Pierce",
        "range": "Range",
        "attack_speed": "Atk Spd",
        "damage_type": "Type",
        "camo_damage": "Camo",
        "ceramic_damage": "Ceramic",
        "crit_damage": "Crit",
        "boss_damage": "Boss",
        "lead_damage": "Lead",
        "moab_damage": "Moab",
        "fortified_damage": "Fortified",
        "fortified_lead_damage": "F Lead",
        "fortified_moab_damage": "F Moab",
        "status_damage": "Status",
        "stun_damage": "Stun",
        "hotkey": "Hotkey",
        "footprint": "Footprint",
        "income": "Income",
        "projectile_count": "Projectiles",
        "duration": "Duration",
        "cooldown": "Cooldown",
        "crit_occurance": "Crit Rate",
        "delay": "Delay",
    }

    return codes[code];
}

export default function StatsCard({stats, type, level = 1, ...rest}) {
    const darkMode = useSelector(getDarkMode);

    const getTitle = (type) => {
        switch (type) {
            case "abils":
                return "Ability";
            case "attacks":
                return "Attack";
            case "buffs":
                return "Buff";
            case "statuses":
                return "Status";
        }
    };

    return (
        <>
            {Object.keys(stats).map(key => (
                <Card data-t={type} data-dm={darkMode} key={key}>
                    <Type variant={level === 1 ? "h5" : "h6"} font={true}>
                        {getTitle(type)}
                    </Type>
                    <Title variant={level === 1 ? "h5" : "h6"}>
                        {varToText(key)}
                    </Title>
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
                        <StatsCard stats={stats[key].abils} level={level + 1} type="abils"/>
                    )}
                    {Object.keys(stats[key].attacks).length > 0 && (
                        <StatsCard stats={stats[key].attacks} level={level + 1} type="attacks" />
                    )}
                    {Object.keys(stats[key].buffs).length > 0 && (
                        <StatsCard stats={stats[key].buffs} level={level + 1} type="buffs" />
                    )}
                    {Object.keys(stats[key].statuses).length > 0 && (
                        <StatsCard stats={stats[key].statuses} level={level + 1} type="statuses" />
                    )}
                    {stats[key].targets.map(target => (
                        <TowerText variant={level === 1 ? "body1" : "body2"} font={true} key={target}>
                            {target}
                        </TowerText>
                    ))}
                    {stats[key].notes.map(note => (
                        <TowerText variant={level === 1 ? "body1" : "body2"} font={true} key={note}>
                            note: {note}
                        </TowerText>
                    ))}
                </Card>
            ))}
        </>
    );
}
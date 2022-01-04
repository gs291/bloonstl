import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import StatTab from "./StatTab";
import StatNotes from "./StatNotes";
import StatsTargets from "./StatsTargets";
import TowerText from "../tower/TowerText";
import StatItemWrapper from "./StatItemWrapper";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode, getMobile} from "../../lib/redux/selectors";
import {getHeroColor, getMonkeyColor, getStatAttributeText, rgbaHex} from "../../lib/utils/utils";


const CardContainer = styled.div`
  width: 100%;
  ${props => props["data-m"] ? "" : "max-width: 290px"};
  
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

  box-shadow: -5px 5px 5px 0 ${props => rgbaHex(props["data-bc"] , 0.5)};
  background-color: ${props => props["data-bc"]};
  border-top-width: 0;
  
  position: relative;
  
  display: flex;
  flex-direction: column;
`;

const CardContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 10px 0;
  
  padding: ${props => props["data-m"] ? "1em 10px" : "0.5em 5px"};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: ${props => props["data-bc"]};
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

const statCodeParser = (code) => {
    const codes = {
        "damage": "Damage", "pierce": "Pierce", "range": "Range", "attack_speed": "Atk Spd", "damage_type": "Type",
        "camo_damage": "Camo", "ceramic_damage": "Ceramic", "crit_damage": "Crit", "boss_damage": "Boss", "pierce_impact": "P Impact",
        "lead_damage": "Lead", "moab_damage": "Moab", "fortified_damage": "Fortified", "delay": "Delay", "max_per_round": "Max/Round",
        "fortified_lead_damage": "F Lead", "fortified_moab_damage": "F Moab", "status_damage": "Status",
        "stun_damage": "Stun", "hotkey": "Hotkey", "footprint": "Footprint", "income": "Income", "slow": "Slow",
        "projectile_count": "Proj", "duration": "Duration", "cooldown": "Cooldown", "crit_occurance": "Crit Rate",
    }

    return codes[code];
}

export default function StatsCard({stats, type, level = 1, towerType, cardType, parentBackgroundColor, ...rest}) {
    const mobile = useSelector(getMobile);
    const darkMode = useSelector(getDarkMode);

    const getTitle = (key) => {
        switch (key) {
            case "abils": return "Ability";
            case "attacks": return "Attack";
            case "buffs": return "Buff";
            case "statuses": return "Status";
        }
    };

    const titleColor =
        rgbaHex(type
                ? towerType === "hero"
                    ? getHeroColor(type)
                    :  getMonkeyColor(type)
                : darkMode ? siteColors.page.dark : siteColors.page.light
            , darkMode ? 0.5 : 1);

    const towerVar =
        towerType === "hero"
            ? type.substring(0, 1).toLowerCase() + type.substring(1).replace(/\s+/g, '')
            : type.toLowerCase();

    const gridColor =
        type
            ? towerType === "hero"
                ? darkMode
                    ? siteColors.hero[towerVar].grid.dark
                    : siteColors.hero[towerVar].grid.light
                : darkMode
                    ? siteColors.monkeyType[towerVar].grid.dark
                    : siteColors.monkeyType[towerVar].grid.light
            : darkMode ? siteColors.page.dark : siteColors.page.light;

    const hoverColor =
        type
            ? towerType === "hero"
                ? darkMode
                    ? siteColors.hero[towerVar].hover.dark
                    : siteColors.hero[towerVar].hover.light
                : darkMode
                    ? siteColors.monkeyType[towerVar].hover.dark
                    : siteColors.monkeyType[towerVar].hover.light
            : darkMode ? siteColors.page.dark : siteColors.page.light;



    return (
        <>
            {Object.keys(stats).map(key => (
                <CardContainer key={key} data-m={mobile}>
                    <StatTab cardType={cardType} title={getTitle(cardType)} level={level} backgroundColor={titleColor} parentBackgroundColor={parentBackgroundColor}/>
                    <Card data-bc={titleColor} data-dm={darkMode} data-m={mobile}>
                        <TitleContainer>
                            <TowerText variant={level === 1 ? "h5" : "h6"}>
                                {getStatAttributeText(key)}
                            </TowerText>
                            {stats[key].description !== "" && (
                                <TowerText variant={level === 1 ? "subtitle2" : "caption"} font={true}>
                                    {stats[key].description}
                                </TowerText>
                            )}
                        </TitleContainer>
                        <CardContent data-bc={gridColor} data-dm={darkMode} data-m={mobile}>
                            <Modifiers>
                                {Object.keys(stats[key].modifiers).map(mod => {
                                    if (((stats[key].modifiers[mod] > 0 && mod !== "projectile_count")
                                        || (mod === "damage_type" && stats[key].modifiers[mod] !== "")
                                        || (mod === "projectile_count" && stats[key].modifiers[mod] > 1))) {
                                        return (
                                            <ModifierContainer key={mod}>
                                                <StatItemWrapper text={statCodeParser(mod)} value={stats[key].modifiers[mod]} size="small" counter={false} data-s={titleColor}/>
                                            </ModifierContainer>
                                        );
                                    }
                                })}
                            </Modifiers>
                            {Object.keys(stats[key].abils).length > 0 && (
                                <StatsCard stats={stats[key].abils} level={level + 1} type={type} towerType={towerType} parentBackgroundColor={gridColor} cardType="abils" />
                            )}
                            {Object.keys(stats[key].attacks).length > 0 && (
                                <StatsCard stats={stats[key].attacks} level={level + 1} type={type} towerType={towerType} parentBackgroundColor={gridColor} cardType="attacks" />
                            )}
                            {Object.keys(stats[key].buffs).length > 0 && (
                                <StatsCard stats={stats[key].buffs} level={level + 1} type={type} towerType={towerType} parentBackgroundColor={gridColor} cardType="buffs" />
                            )}
                            {Object.keys(stats[key].statuses).length > 0 && (
                                <StatsCard stats={stats[key].statuses} level={level + 1} type={type} towerType={towerType} parentBackgroundColor={gridColor} cardType="statuses" />
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
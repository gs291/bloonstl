import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import StatsContainer from "./StatsContainer";
import StatItemWrapper from "./StatItemWrapper";
import {getMobile} from "../../lib/redux/selectors";
import {globalOptions} from "../../lib/utils/emotionStyled";
import {getHeroColor, getMonkeyColor} from "../../lib/utils/utils";


const ItemsContainer = styled("div", globalOptions)`
  padding-left: 10px;
  padding-right: 10px;
  width: ${props => props["data-m"] ? 33 : 25}%;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 5px;
`;

/**
 * Statistics for the tower damages
 *
 * @param {Object} props Component props
 * @param {Object} props.stats Object containing data on all the statistics for a tower
 * @param {Object} props.defaults Object containing data on all the default statistics for a tower
 * @param {string} props.type Shows the Hero name or monkey type
 * @param {string} props.towerType Shows if the tower is a monkey or hero
 */
export default function DamageStats({stats, defaults, type, towerType, ...rest}) {
    const mobile = useSelector(getMobile);
    const color = towerType === "hero" ? getHeroColor(type) : getMonkeyColor(type);

    return (
        <>
            <StatsContainer title="Damage Stats" type={type} towerType={towerType} >
                {mobile ? (
                    <>
                        <ItemsContainer data-m={mobile}>
                            <StatItemWrapper text="Camo" value={stats.camo_damage + stats.damage} prevValue={defaults.camo_damage + defaults.damage} initialDamage={stats.camo_damage} baseDamage={stats.damage} data-s={color} />
                            <StatItemWrapper text="Boss" value={stats.boss_damage + stats.damage} prevValue={defaults.boss_damage + defaults.damage} initialDamage={stats.boss_damage} baseDamage={stats.damage} data-s={color} />
                            <StatItemWrapper text="Fortified" value={stats.fortified_damage + stats.damage} prevValue={defaults.fortified_damage + defaults.damage} initialDamage={stats.fortified_damage} baseDamage={stats.damage} data-s={color} />
                            <StatItemWrapper text="Status" value={stats.status_damage + stats.damage} prevValue={defaults.status_damage + defaults.damage} initialDamage={stats.status_damage} baseDamage={stats.damage} data-s={color} />
                        </ItemsContainer>
                        <ItemsContainer data-m={mobile}>
                            <StatItemWrapper text="Ceramic" value={stats.ceramic_damage + stats.damage} prevValue={defaults.ceramic_damage + defaults.damage} initialDamage={stats.ceramic_damage} baseDamage={stats.damage} data-s={color} />
                            <StatItemWrapper text="Lead" value={stats.lead_damage + stats.damage} prevValue={defaults.lead_damage + defaults.damage} initialDamage={stats.lead_damage} baseDamage={stats.damage} data-s={color} />
                            <StatItemWrapper text="F Lead" value={stats.fortified_lead_damage + stats.lead_damage + stats.damage} prevValue={defaults.fortified_lead_damage + defaults.lead_damage + defaults.damage} initialDamage={stats.fortified_lead_damage} baseDamage={stats.damage} extraDamage={stats.lead_damage} data-s={color} />
                            <StatItemWrapper text="Stun" value={stats.stun_damage + stats.damage} prevValue={defaults.stun_damage + defaults.damage} initialDamage={stats.stun_damage} baseDamage={stats.damage} data-s={color} />
                        </ItemsContainer>
                        <ItemsContainer data-m={mobile}>
                            <StatItemWrapper text="Crit" value={stats.crit_damage + stats.damage} prevValue={defaults.crit_damage + defaults.damage} initialDamage={stats.crit_damage} baseDamage={stats.damage} data-s={color} />
                            <StatItemWrapper text="MOAB" value={stats.moab_damage + stats.damage} prevValue={defaults.moab_damage + defaults.damage} initialDamage={stats.moab_damage} baseDamage={stats.damage} data-s={color} />
                            <StatItemWrapper text="F MOAB" value={stats.fortified_moab_damage + stats.moab_damage + stats.damage} prevValue={defaults.fortified_moab_damage + defaults.moab_damage + defaults.damage} initialDamage={stats.fortified_moab_damage} baseDamage={stats.damage} extraDamage={stats.moab_damage} data-s={color} />
                        </ItemsContainer>
                    </>
                ) : (
                    <>
                        <ItemsContainer data-m={mobile}>
                            <StatItemWrapper text="Camo" value={stats.camo_damage + stats.damage} prevValue={defaults.camo_damage + defaults.damage} initialDamage={stats.camo_damage} baseDamage={stats.damage} data-s={color} />
                            <StatItemWrapper text="Boss" value={stats.boss_damage + stats.damage} prevValue={defaults.boss_damage + defaults.damage} initialDamage={stats.boss_damage} baseDamage={stats.damage} data-s={color} />
                            <StatItemWrapper text="Fortified" value={stats.fortified_damage + stats.damage} prevValue={defaults.fortified_damage + defaults.damage} initialDamage={stats.fortified_damage} baseDamage={stats.damage} data-s={color} />
                        </ItemsContainer>
                        <ItemsContainer data-m={mobile}>
                            <StatItemWrapper text="Ceramic" value={stats.ceramic_damage + stats.damage} prevValue={defaults.ceramic_damage + defaults.damage} initialDamage={stats.ceramic_damage} baseDamage={stats.damage} data-s={color} />
                            <StatItemWrapper text="Lead" value={stats.lead_damage + stats.damage} prevValue={defaults.lead_damage + defaults.damage} initialDamage={stats.lead_damage} baseDamage={stats.damage} data-s={color} />
                            <StatItemWrapper text="F Lead" value={stats.fortified_lead_damage + stats.lead_damage + stats.damage} prevValue={defaults.fortified_lead_damage + defaults.lead_damage + defaults.damage} initialDamage={stats.fortified_lead_damage} baseDamage={stats.damage} extraDamage={stats.lead_damage} data-s={color} />
                        </ItemsContainer>
                        <ItemsContainer data-m={mobile}>
                            <StatItemWrapper text="Crit" value={stats.crit_damage + stats.damage} prevValue={defaults.crit_damage + defaults.damage} initialDamage={stats.crit_damage} baseDamage={stats.damage} data-s={color} />
                            <StatItemWrapper text="MOAB" value={stats.moab_damage + stats.damage} prevValue={defaults.moab_damage + defaults.damage} initialDamage={stats.moab_damage} baseDamage={stats.damage} data-s={color} />
                            <StatItemWrapper text="F MOAB" value={stats.fortified_moab_damage + stats.moab_damage + stats.damage} prevValue={defaults.fortified_moab_damage + defaults.moab_damage + defaults.damage} initialDamage={stats.fortified_moab_damage} baseDamage={stats.damage} extraDamage={stats.moab_damage} data-s={color}/>
                        </ItemsContainer>
                        <ItemsContainer data-m={mobile}>
                            <StatItemWrapper text="Status" value={stats.status_damage + stats.damage} prevValue={defaults.status_damage + defaults.damage} initialDamage={stats.status_damage} baseDamage={stats.damage} data-s={color} />
                            <StatItemWrapper text="Stun" value={stats.stun_damage + stats.damage} prevValue={defaults.stun_damage + defaults.damage} initialDamage={stats.stun_damage} baseDamage={stats.damage} data-s={color} />
                        </ItemsContainer>
                    </>
                )}
            </StatsContainer>
        </>
    );
}

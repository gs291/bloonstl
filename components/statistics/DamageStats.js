import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import StatsContainer from "./StatsContainer";
import StatItemWrapper from "./StatItemWrapper";
import {getMobile} from "../../lib/redux/selectors";
import {getMonkeyColor} from "../../lib/utils/utils";

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


export default function DamageStats({stats, defaults, type, ...rest}) {
    const mobile = useSelector(getMobile);

    return (
        <>
            <StatsContainer title="Damage Stats" type={type}>
                {mobile ? (
                    <>
                        <ItemsContainer data-m={mobile}>
                            <StatItemWrapper text="Camo" value={stats.camo_damage + stats.damage} prevValue={defaults.camo_damage + defaults.damage} initialDamage={stats.camo_damage} baseDamage={stats.damage} data-s={getMonkeyColor(type)} />
                            <StatItemWrapper text="Boss" value={stats.boss_damage + stats.damage} prevValue={defaults.boss_damage + defaults.damage} initialDamage={stats.boss_damage} baseDamage={stats.damage} data-s={getMonkeyColor(type)} />
                            <StatItemWrapper text="Fortified" value={stats.fortified_damage + stats.damage} prevValue={defaults.fortified_damage + defaults.damage} initialDamage={stats.fortified_damage} baseDamage={stats.damage} data-s={getMonkeyColor(type)} />
                            <StatItemWrapper text="Status" value={stats.status_damage + stats.damage} prevValue={defaults.status_damage + defaults.damage} initialDamage={stats.status_damage} baseDamage={stats.damage} data-s={getMonkeyColor(type)} />
                        </ItemsContainer>
                        <ItemsContainer data-m={mobile}>
                            <StatItemWrapper text="Ceramic" value={stats.ceramic_damage + stats.damage} prevValue={defaults.ceramic_damage + defaults.damage} initialDamage={stats.ceramic_damage} baseDamage={stats.damage} data-s={getMonkeyColor(type)} />
                            <StatItemWrapper text="Lead" value={stats.lead_damage + stats.damage} prevValue={defaults.lead_damage + defaults.damage} initialDamage={stats.lead_damage} baseDamage={stats.damage} data-s={getMonkeyColor(type)} />
                            <StatItemWrapper text="F Lead" value={stats.fortified_lead_damage + stats.lead_damage + stats.damage} prevValue={defaults.fortified_lead_damage + defaults.lead_damage + defaults.damage} initialDamage={stats.fortified_lead_damage} baseDamage={stats.damage} extraDamage={stats.lead_damage} data-s={getMonkeyColor(type)} />
                            <StatItemWrapper text="Stun" value={stats.stun_damage + stats.damage} prevValue={defaults.stun_damage + defaults.damage} initialDamage={stats.stun_damage} baseDamage={stats.damage} data-s={getMonkeyColor(type)} />
                        </ItemsContainer>
                        <ItemsContainer data-m={mobile}>
                            <StatItemWrapper text="Crit" value={stats.crit_damage + stats.damage} prevValue={defaults.crit_damage + defaults.damage} initialDamage={stats.crit_damage} baseDamage={stats.damage} data-s={getMonkeyColor(type)} />
                            <StatItemWrapper text="Moab" value={stats.moab_damage + stats.damage} prevValue={defaults.moab_damage + defaults.damage} initialDamage={stats.moab_damage} baseDamage={stats.damage} data-s={getMonkeyColor(type)} />
                            <StatItemWrapper text="F MOAB" value={stats.fortified_moab_damage + stats.moab_damage + stats.damage} prevValue={defaults.fortified_moab_damage + defaults.moab_damage + defaults.damage} initialDamage={stats.boss_damage} baseDamage={stats.damage} extraDamage={stats.moab_damage} data-s={getMonkeyColor(type)} />
                        </ItemsContainer>
                    </>
                ) : (
                    <>
                        <ItemsContainer data-m={mobile}>
                            <StatItemWrapper text="Camo" value={stats.camo_damage + stats.damage} prevValue={defaults.camo_damage + defaults.damage} initialDamage={stats.camo_damage} baseDamage={stats.damage} data-s={getMonkeyColor(type)} />
                            <StatItemWrapper text="Boss" value={stats.boss_damage + stats.damage} prevValue={defaults.boss_damage + defaults.damage} initialDamage={stats.boss_damage} baseDamage={stats.damage} data-s={getMonkeyColor(type)} />
                            <StatItemWrapper text="Fortified" value={stats.fortified_damage + stats.damage} prevValue={defaults.fortified_damage + defaults.damage} initialDamage={stats.fortified_damage} baseDamage={stats.damage} data-s={getMonkeyColor(type)} />
                        </ItemsContainer>
                        <ItemsContainer data-m={mobile}>
                            <StatItemWrapper text="Ceramic" value={stats.ceramic_damage + stats.damage} prevValue={defaults.ceramic_damage + defaults.damage} initialDamage={stats.ceramic_damage} baseDamage={stats.damage} data-s={getMonkeyColor(type)} />
                            <StatItemWrapper text="Lead" value={stats.lead_damage + stats.damage} prevValue={defaults.lead_damage + defaults.damage} initialDamage={stats.lead_damage} baseDamage={stats.damage} data-s={getMonkeyColor(type)} />
                            <StatItemWrapper text="F Lead" value={stats.fortified_lead_damage + stats.lead_damage + stats.damage} prevValue={defaults.fortified_lead_damage + defaults.lead_damage + defaults.damage} initialDamage={stats.fortified_lead_damage} baseDamage={stats.damage} extraDamage={stats.lead_damage} data-s={getMonkeyColor(type)} />
                        </ItemsContainer>
                        <ItemsContainer data-m={mobile}>
                            <StatItemWrapper text="Crit" value={stats.crit_damage + stats.damage} prevValue={defaults.crit_damage + defaults.damage} initialDamage={stats.crit_damage} baseDamage={stats.damage} data-s={getMonkeyColor(type)} />
                            <StatItemWrapper text="Moab" value={stats.moab_damage + stats.damage} prevValue={defaults.moab_damage + defaults.damage} initialDamage={stats.moab_damage} baseDamage={stats.damage} data-s={getMonkeyColor(type)} />
                            <StatItemWrapper text="F MOAB" value={stats.fortified_moab_damage + stats.moab_damage + stats.damage} prevValue={defaults.fortified_moab_damage + defaults.moab_damage + defaults.damage} initialDamage={stats.boss_damage} baseDamage={stats.damage} extraDamage={stats.moab_damage} data-s={getMonkeyColor(type)}/>
                        </ItemsContainer>
                        <ItemsContainer data-m={mobile}>
                            <StatItemWrapper text="Status" value={stats.status_damage + stats.damage} prevValue={defaults.status_damage + defaults.damage} initialDamage={stats.status_damage} baseDamage={stats.damage} data-s={getMonkeyColor(type)} />
                            <StatItemWrapper text="Stun" value={stats.stun_damage + stats.damage} prevValue={defaults.stun_damage + defaults.damage} initialDamage={stats.stun_damage} baseDamage={stats.damage} data-s={getMonkeyColor(type)} />
                        </ItemsContainer>
                    </>
                )}
            </StatsContainer>
        </>
    );
}

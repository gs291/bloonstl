import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import StatItem from "./StatItem";
import {getMobile} from "../../lib/redux/selectors";

const StatsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  
  width: 100%;
`;

const ItemsContainer = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  width: ${props => props["data-m"] ? 50 : 33}%;
`;

const Item = styled(StatItem)`
  
`;

export default function DamageStats({stats, ...rest}) {
    const mobile = useSelector(getMobile);

    return (
        <>
            <StatsContainer>
                {mobile ? (
                    <>
                        <ItemsContainer data-m={mobile}>
                            <Item text="Camo Damage" value={stats.camo_damage} />
                            <Item text="Crit Damage" value={stats.crit_damage} />
                            <Item text="Fortified Lead Damage" value={stats.fortified_lead_damage} />
                            <Item text="Stun Damage" value={stats.stun_damage} />
                            <Item text="Moab Damage" value={stats.moab_damage} />
                            <Item text="Status Damage" value={stats.stun_damage}/>
                        </ItemsContainer>
                        <ItemsContainer data-m={mobile}>
                            <Item text="Ceramic Damage" value={stats.ceramic_damage} />
                            <Item text="Fortified Damage" value={stats.fortified_damage} />
                            <Item text="Fortified MOAB Damage" value={stats.fortified_moab_damage} />
                            <Item text="Lead Damage" value={stats.lead_damage} />
                            <Item text="Boss Damage" value={stats.boss_damage} />
                        </ItemsContainer>
                    </>
                ) : (
                    <>
                        <ItemsContainer data-m={mobile}>
                            <Item text="Camo Damage" value={stats.camo_damage}/>
                            <Item text="Fortified Damage" value={stats.fortified_damage} />
                            <Item text="Stun Damage" value={stats.stun_damage}/>
                            <Item text="Status Damage" value={stats.stun_damage}/>
                        </ItemsContainer>
                        <ItemsContainer data-m={mobile}>
                            <Item text="Ceramic Damage" value={stats.ceramic_damage} />
                            <Item text="Fortified Lead Damage" value={stats.fortified_lead_damage} />
                            <Item text="Lead Damage" value={stats.lead_damage} />
                            <Item text="Boss Damage" value={stats.boss_damage} />
                        </ItemsContainer>
                        <ItemsContainer data-m={mobile}>
                            <Item text="Crit Damage" value={stats.crit_damage}/>
                            <Item text="Fortified MOAB Damage" value={stats.fortified_moab_damage} />
                            <Item text="Moab Damage" value={stats.moab_damage} />
                        </ItemsContainer>
                    </>
                )}

            </StatsContainer>
        </>
    );
}

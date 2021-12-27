import StatItem from "./StatItem";
import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {getMobile} from "../../lib/redux/selectors";

const StatsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  width: 100%;
`;

const Item = styled(StatItem)`
  
`;

const ItemsContainer = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  width: ${props => props["data-m"] ? 50 : 33}%;
`;

export default function BaseStats({stats, ...rest}) {
    const mobile = useSelector(getMobile);

    return (
        <>
            <StatsContainer>
                {mobile ? (
                    <>
                        <ItemsContainer data-m={mobile}>
                            <Item text="Attack Speed" value={stats.attack_speed} decimals={3} />
                            <Item text="Pierce" value={stats.pierce} />
                            <Item text="Type" value={stats.damage_type} />
                        </ItemsContainer>
                        <ItemsContainer data-m={mobile}>
                            <Item text="Range" value={stats.range} />
                            <Item text="Damage" value={stats.damage} />
                            <Item text="Hotkey" value={stats.hotkey} />
                        </ItemsContainer>
                    </>
                ) : (
                    <>
                        <ItemsContainer data-m={mobile}>
                            <Item text="Attack Speed" value={stats.attack_speed} decimals={3} />
                            <Item text="Damage" value={stats.damage} />
                        </ItemsContainer>
                        <ItemsContainer data-m={mobile}>
                            <Item text="Range" value={stats.range} />
                            <Item text="Type" value={stats.damage_type} />
                        </ItemsContainer>
                        <ItemsContainer data-m={mobile}>
                            <Item text="Pierce" value={stats.pierce} />
                            <Item text="Hotkey" value={stats.hotkey} />
                        </ItemsContainer>
                    </>
                )}
            </StatsContainer>
        </>
    );
}
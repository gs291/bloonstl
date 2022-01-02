import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import StatsContainer from "./StatsContainer";
import StatItemWrapper from "./StatItemWrapper";
import {getMobile} from "../../lib/redux/selectors";
import {getHeroColor, getMonkeyColor} from "../../lib/utils/utils";

const ItemsContainer = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  width: ${props => props["data-m"] ? 33 : 50}%;
  
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 5px;
`;

export default function MoreStats({stats, defaults, type, towerType, ...rest}) {
    const mobile = useSelector(getMobile);
    const color = towerType === "hero" ? getHeroColor(type) : getMonkeyColor(type);


    return (
        <>
            <StatsContainer title="More Stats" type={type} towerType={towerType}>
                {mobile ? (
                    <>
                        <ItemsContainer data-m={mobile}>
                            <StatItemWrapper text="Hotkey" value={stats.hotkey} data-s={color} />
                            <StatItemWrapper text="Duration" value={stats.duration} prevValue={defaults.duration} data-s={color} />
                        </ItemsContainer>
                        <ItemsContainer data-m={mobile}>
                            <StatItemWrapper text="Footprint" value={stats.footprint} data-s={color} />
                            <StatItemWrapper text="Delay" value={stats.delay} prevValue={defaults.delay} data-s={color} />
                        </ItemsContainer>
                        <ItemsContainer data-m={mobile}>
                            <StatItemWrapper text="Income" value={stats.income} prevValue={defaults.income} data-s={color} />
                            <StatItemWrapper text="Crit Rate" value={stats.crit_occurance} prevValue={stats.crit_occurance !== "0~0" ? 1 : 0} data-s={color} />
                        </ItemsContainer>
                    </>
                ) : (
                    <>
                        <ItemsContainer data-m={mobile}>
                            <StatItemWrapper text="Hotkey" value={stats.hotkey} data-s={color} />
                            <StatItemWrapper text="Income" value={stats.income} prevValue={defaults.income} data-s={color} />
                            <StatItemWrapper text="Delay" value={stats.delay} prevValue={defaults.delay} data-s={color} />
                        </ItemsContainer>
                        <ItemsContainer data-m={mobile}>
                            <StatItemWrapper text="Footprint" value={stats.footprint} data-s={color} />
                            <StatItemWrapper text="Duration" value={stats.duration} prevValue={defaults.duration} data-s={color} />
                            <StatItemWrapper text="Crit Rate" value={stats.crit_occurance} prevValue={stats.crit_occurance !== "0~0" ? 1 : 0} data-s={color} />
                        </ItemsContainer>
                    </>
                )}
            </StatsContainer>
        </>
    );
}

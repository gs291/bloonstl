import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import StatsContainer from "./StatsContainer";
import StatItemWrapper from "./StatItemWrapper";
import {getMobile} from "../../lib/redux/selectors";
import {getMonkeyColor} from "../../lib/utils/utils";

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

export default function MoreStats({stats, defaults, type, ...rest}) {
    const mobile = useSelector(getMobile);

    return (
        <>
            <StatsContainer title="More Stats" type={type}>
                {mobile ? (
                    <>
                        <ItemsContainer data-m={mobile}>
                            <StatItemWrapper text="Hotkey" value={stats.hotkey} data-s={getMonkeyColor(type)} />
                            <StatItemWrapper text="Duration" value={stats.duration} prevValue={defaults.duration} data-s={getMonkeyColor(type)} />
                        </ItemsContainer>
                        <ItemsContainer data-m={mobile}>
                            <StatItemWrapper text="Footprint" value={stats.footprint} data-s={getMonkeyColor(type)} />
                            <StatItemWrapper text="Delay" value={stats.delay} prevValue={defaults.delay} data-s={getMonkeyColor(type)} />
                        </ItemsContainer>
                        <ItemsContainer data-m={mobile}>
                            <StatItemWrapper text="Income" value={stats.income} prevValue={defaults.income} data-s={getMonkeyColor(type)} />
                            <StatItemWrapper text="Crit Rate" value={stats.crit_occurance} prevValue={stats.crit_occurance !== "0~0" ? 1 : 0} data-s={getMonkeyColor(type)} />
                        </ItemsContainer>
                    </>
                ) : (
                    <>
                        <ItemsContainer data-m={mobile}>
                            <StatItemWrapper text="Hotkey" value={stats.hotkey} data-s={getMonkeyColor(type)} />
                            <StatItemWrapper text="Income" value={stats.income} prevValue={defaults.income} data-s={getMonkeyColor(type)} />
                            <StatItemWrapper text="Delay" value={stats.delay} prevValue={defaults.delay} data-s={getMonkeyColor(type)} />
                        </ItemsContainer>
                        <ItemsContainer data-m={mobile}>
                            <StatItemWrapper text="Footprint" value={stats.footprint} data-s={getMonkeyColor(type)} />
                            <StatItemWrapper text="Duration" value={stats.duration} prevValue={defaults.duration} data-s={getMonkeyColor(type)} />
                            <StatItemWrapper text="Crit Rate" value={stats.crit_occurance} prevValue={stats.crit_occurance !== "0~0" ? 1 : 0} data-s={getMonkeyColor(type)} />
                        </ItemsContainer>
                    </>
                )}
            </StatsContainer>
        </>
    );
}

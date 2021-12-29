import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import StatItem from "./StatItem";
import StatsContainer from "./StatsContainer";
import {getMobile} from "../../lib/redux/selectors";

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


export default function InfoStats({stats, ...rest}) {
    const mobile = useSelector(getMobile);

    return (
        <>
            <StatsContainer title="More Stats">
                {mobile ? (
                    <>
                        <ItemsContainer data-m={mobile}>
                            <StatItem text="Hotkey" value={stats.hotkey} counter={false} />
                            <StatItem text="Duration" value={stats.duration} />
                        </ItemsContainer>
                        <ItemsContainer data-m={mobile}>
                            <StatItem text="Footprint" value={stats.footprint} counter={false} />
                            <StatItem text="Delay" value={stats.delay} />
                        </ItemsContainer>
                        <ItemsContainer data-m={mobile}>
                            <StatItem text="Income" value={stats.income} />
                            <StatItem text="Crit Occurance" value={stats.crit_occurance} counter={false}/>
                        </ItemsContainer>
                    </>
                ) : (
                    <>
                        <ItemsContainer data-m={mobile}>
                            <StatItem text="Hotkey" value={stats.hotkey} counter={false} />
                            <StatItem text="Income" value={stats.income} />
                            <StatItem text="Delay" value={stats.delay} />
                        </ItemsContainer>
                        <ItemsContainer data-m={mobile}>
                            <StatItem text="Footprint" value={stats.footprint} counter={false} />
                            <StatItem text="Duration" value={stats.duration} />
                            <StatItem text="Crit Rate" value={stats.crit_occurance} counter={false}/>
                        </ItemsContainer>
                    </>
                )}
            </StatsContainer>
        </>
    );
}

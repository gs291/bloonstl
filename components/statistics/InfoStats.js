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


export default function InfoStats({stats, ...rest}) {
    const mobile = useSelector(getMobile);

    return (
        <>
            <StatsContainer>
                {mobile ? (
                    <>
                        <ItemsContainer data-m={mobile}>
                            <StatItem text="Projectile count" value={stats.projectile_count} />
                            <StatItem text="Duration" value={stats.duration} />
                            <StatItem text="Delay" value={stats.delay} />
                        </ItemsContainer>
                        <ItemsContainer data-m={mobile}>
                            <StatItem text="Income" value={stats.income} />
                            <StatItem text="Footprint" value={stats.footprint} counter={false} />
                            <StatItem text="Crit Occurance" value={stats.crit_occurance} counter={false}/>
                        </ItemsContainer>
                    </>
                ) : (
                    <>
                        <ItemsContainer data-m={mobile}>
                            <StatItem text="Projectile count" value={stats.projectile_count} />
                            <StatItem text="Footprint" value={stats.footprint} counter={false} />
                        </ItemsContainer>
                        <ItemsContainer data-m={mobile}>
                            <StatItem text="Income" value={stats.income} />
                            <StatItem text="Delay" value={stats.delay} />
                        </ItemsContainer>
                        <ItemsContainer data-m={mobile}>
                            <StatItem text="Duration" value={stats.duration} />
                            <StatItem text="Crit Occurance" value={stats.crit_occurance} counter={false}/>
                        </ItemsContainer>
                    </>
                )}

            </StatsContainer>
        </>
    );
}

import styled from "@emotion/styled";

import StatsCard from "./StatsCard";


const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  gap: 20px 50px;
`;

export default function StatsAbilities({stats}) {

    return (
        <>
            <CardsContainer>
                <StatsCard stats={stats.abils} type="abils" />
                <StatsCard stats={stats.attacks} type="attacks" />
                <StatsCard stats={stats.buffs} type="buffs" />
                <StatsCard stats={stats.statuses} type="statuses" />
            </CardsContainer>
        </>
    );
}
import styled from "@emotion/styled";

import StatsCard from "./StatsCard";


const CardsContainer = styled("div")`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  gap: 20px;
  margin-bottom: 25px;
`;

/**
 * The stats abilities/attacks/buffs/statuses wrapper
 *
 * @param {Object} props Component props
 * @param {Object} props.stats Object containing ALL the stats of the tower
 * @param {string} props.towerType Shows if the tower is a monkey or hero
 * @param {string} props.type Shows the Hero name or monkey type
 */
export default function StatsAbilities({stats, towerType, type}) {

    return (
        <>
            <CardsContainer>
                <StatsCard stats={stats.abils} type={type} towerType={towerType} cardType="abils" />
                <StatsCard stats={stats.attacks} type={type} towerType={towerType} cardType="attacks" />
                <StatsCard stats={stats.buffs} type={type} towerType={towerType} cardType="buffs" />
                <StatsCard stats={stats.statuses} type={type} towerType={towerType} cardType="statuses" />
            </CardsContainer>
        </>
    );
}
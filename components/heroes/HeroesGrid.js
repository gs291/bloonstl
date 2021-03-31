import styled from "@emotion/styled";
import {Grid} from "@material-ui/core";

import TowerCard from "../tower/TowerCard";

const GridContainer = styled(Grid)`
  display: flex;
  flex-direction: column;
`;

const GridItem = styled(Grid)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default function HeroesGrid({ heroes }) {
    return (
        <>
            <GridContainer container spacing={2}>
                <GridItem item>
                    { heroes.map(hero => <TowerCard tower={hero} towerType="hero" key={hero.id}/>) }
                </GridItem>
            </GridContainer>
        </>
    );
}
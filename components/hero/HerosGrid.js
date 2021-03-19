import styled from "@emotion/styled";
import {Grid} from "@material-ui/core";

import Hero from "./Hero";

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
                    { heroes.map(hero => <Hero hero={hero} key={hero.id}/>) }
                </GridItem>
            </GridContainer>
        </>
    );
}
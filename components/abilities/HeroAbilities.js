import styled from "@emotion/styled";
import { PureComponent } from "react";
import {Grid} from "@material-ui/core";

import AbilityContainer from "../ability/AbilityContainer";

const GridContainer = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GridItem = styled(Grid)`
  display: flex;
  flex-direction: row;
`;

export default class HeroAbilities extends PureComponent {

    render() {
        const {className, abilities, heroFile} = this.props;

        let dividedAbilities = [ [], [], [], [], [] ];

        abilities.forEach(ability => {
            dividedAbilities[Math.floor(ability.upgrade_tier / 5)]
                .push((
                    <AbilityContainer ability={ability} fileName={heroFile} towerType="hero" key={ability.id} />
                ))
        })

        return (
            <>
                <GridContainer container spacing={2} className={className}>
                    <GridItem item>
                        { dividedAbilities[0] }
                    </GridItem>
                    <GridItem item>
                        { dividedAbilities[1] }
                    </GridItem>
                    <GridItem item>
                        { dividedAbilities[2] }
                    </GridItem>
                    <GridItem item>
                        { dividedAbilities[3] }
                    </GridItem>
                    <GridItem item>
                        { dividedAbilities[4] }
                    </GridItem>
                </GridContainer>
            </>
        );
    }
}
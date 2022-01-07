import {Grid} from "@mui/material";
import styled from "@emotion/styled";
import { PureComponent } from "react";

import AbilityContainer from "../ability/AbilityContainer";
import ShowAllAbilityModifiers from "./ShowAllAbilityModifiers";
import {getInitialTowerStats, parseAbilityModifiers} from "../../lib/utils/utils";

const GridContainer = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

const GridItem = styled(Grid)`
  display: flex;
  flex-direction: row;
`;

export default class HeroAbilities extends PureComponent {

    constructor(props){
        super(props);

        this.getAbilities = this.getAbilities.bind(this);
        this.getAbilityStats = this.getAbilityStats.bind(this);
    }

    componentDidMount() {
        this.props.setStats(this.getAbilityStats());
    }
    componentDidUpdate(_, __, ___) {
        this.props.setStats(this.getAbilityStats());
    }

    getAbilityStats() {
        const {abilities, path, defaultStats} = this.props;

        const tempStats = getInitialTowerStats(defaultStats);

        abilities.forEach(ability => {
            if (ability.upgrade_tier < path + 1) {
                tempStats.xp = tempStats.xp + ability.cost_xp;
                parseAbilityModifiers(ability.modifiers, null, tempStats);
            }
        })

        return { ...tempStats }
    }

    getAbilities() {
        const {abilities, tier, path, setPath, heroFile} = this.props;

        let dividedAbilities = [ [], [], [], [], [] ];

        abilities.forEach(ability => {
            dividedAbilities[Math.floor(ability.upgrade_tier / 5)]
                .push((
                    <AbilityContainer
                        ability={ability}
                        fileName={heroFile}
                        towerType="hero"
                        key={ability.id}
                        tier={tier}
                        selected={path + 1 > ability.upgrade_tier}
                        onClick={setPath ? () => setPath(ability.upgrade_tier) : () => {}}
                    />
                ));
        });

        return {
            "firstFiveAbilities": dividedAbilities[0],
            "secondFiveAbilities": dividedAbilities[1],
            "thirdFiveAbilities": dividedAbilities[2],
            "fourthFiveAbilities": dividedAbilities[3],
        }
    }


    render() {
        const {className, tier} = this.props;

        const { firstFiveAbilities, secondFiveAbilities, thirdFiveAbilities, fourthFiveAbilities} = this.getAbilities();

        return (
            <>
                <ShowAllAbilityModifiers tier={tier} />
                <GridContainer container spacing={2} className={className}>
                    <GridItem item>
                        { firstFiveAbilities }
                    </GridItem>
                    <GridItem item>
                        { secondFiveAbilities }
                    </GridItem>
                    <GridItem item>
                        { thirdFiveAbilities }
                    </GridItem>
                    <GridItem item>
                        { fourthFiveAbilities }
                    </GridItem>
                </GridContainer>
            </>
        );
    }
}
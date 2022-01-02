import {Grid} from "@mui/material";
import styled from "@emotion/styled";
import {PureComponent} from "react";

import AbilityContainer from "../ability/AbilityContainer";
import {
    getInitialTowerStats,
    getMonkeyAbilityParseOrder,
    parseAbilityModifiers
} from "../../lib/utils/utils";

const GridContainer = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
`;

const GridItem = styled(Grid)`
  display: flex;
  flex-direction: row;
`;

export default class MonkeyAbilities extends PureComponent {
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

    render() {
        const { className } = this.props;
        const {pathTop, pathMiddle, pathBottom} = this.getAbilities();

        return (
            <>
                <GridContainer container spacing={2} className={className}>
                    <GridItem item>
                        {pathTop}
                    </GridItem>
                    <GridItem item>
                        {pathMiddle}
                    </GridItem>
                    <GridItem item>
                        {pathBottom}
                    </GridItem>
                </GridContainer>
            </>
        );
    }

    getAbilityStats() {
        const { abilities, stats, tiers } = this.props;

        const order = getMonkeyAbilityParseOrder(tiers);

        const tempStats = getInitialTowerStats(stats);

        // This loop takes advantage to the sorted abilities obtained from the database
        // all abilities are sorted by first ascending ability path then ascending ability tier
        // i.e. sorted by index (0-5 is top path) (5-10 is middle path) (10-15 is bottom path)
        let i = 0;
        for (i; i < 3; i++) {
            let j = order[i];
            const path = j === 0 ? "top_path" : j === 5 ? "middle_path" : "bottom_path";
            const limit = j + 5;
            for(j; j < limit; j++) {
                if (abilities[j].upgrade_tier < tiers[path]) {
                    console.log(abilities[j].name);
                    tempStats.cost = tempStats.cost + abilities[j].cost_gold;
                    parseAbilityModifiers(abilities[j].modifiers, tiers, tempStats);
                }
            }
        }

        return { ...tempStats };
    }

    getAbilities() {
        const { abilities, monkeyFile, tier, tiers } = this.props;

        let pathTop = [], pathMiddle = [], pathBottom = [];

        abilities.forEach(ability => {
            if (ability.upgrade_path === 0) {
                pathTop.push(
                    <AbilityContainer ability={ability} fileName={monkeyFile} tier={tier}
                                      towerType="monkey" selected={ability.upgrade_tier < tiers.top_path} key={ability.id}
                    />);

            } else if (ability.upgrade_path === 1) {
                pathMiddle.push(
                    <AbilityContainer ability={ability} fileName={monkeyFile} tier={tier}
                                      towerType="monkey" selected={ability.upgrade_tier < tiers.middle_path} key={ability.id}
                    />);
            } else {
                pathBottom.push(
                    <AbilityContainer ability={ability} fileName={monkeyFile} tier={tier}
                                      towerType="monkey" selected={ability.upgrade_tier < tiers.bottom_path} key={ability.id}
                    />);
            }
        });
        return {
            pathTop,
            pathMiddle,
            pathBottom
        }
    }
}
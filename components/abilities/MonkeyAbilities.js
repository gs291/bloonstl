import {Grid} from "@mui/material";
import {PureComponent} from "react";
import styled from "@emotion/styled";

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
        const { abilities, stats, path } = this.props;

        const order = getMonkeyAbilityParseOrder(path);

        const tempStats = getInitialTowerStats(stats);

        // This loop takes advantage of the sorted abilities obtained from the database
        // All abilities are, first, sorted by ascending ability path then ascending ability tier
        // i.e. sorted by index (0-5 is top path) (5-10 is middle path) (10-15 is bottom path)
        let i = 0;
        for (i; i < 3; i++) {
            let j = order[i];
            const pathOrder = j === 0 ? "top_path" : j === 5 ? "middle_path" : "bottom_path";
            const limit = j + 5;
            for(j; j < limit; j++) {
                if (abilities[j].upgrade_tier < path[pathOrder]) {
                    tempStats.cost = tempStats.cost + abilities[j].cost_gold;
                    parseAbilityModifiers(abilities[j].modifiers, path, tempStats);
                }
            }
        }

        return { ...tempStats };
    }

    getAbilities() {
        const { abilities, monkeyFile, tier, path, sandbox, setPath, handlePathChange, setSnackPack } = this.props;

        let pathTop = [], pathMiddle = [], pathBottom = [];

        abilities.forEach(ability => {
            if (ability.upgrade_path === 0) {
                pathTop.push(
                    <AbilityContainer ability={ability} fileName={monkeyFile} tier={tier} towerType="monkey"
                                      onClick={sandbox ? () => handlePathChange({"top_path": ability.upgrade_tier + 1}, {setPath, setSnackPack}) : () => {}}
                                      selected={ability.upgrade_tier < path.top_path} key={ability.id}
                    />);

            } else if (ability.upgrade_path === 1) {
                pathMiddle.push(
                    <AbilityContainer ability={ability} fileName={monkeyFile} tier={tier} towerType="monkey"
                                      onClick={sandbox ? () => handlePathChange({"middle_path": ability.upgrade_tier + 1}, {setPath, setSnackPack}) : () => {}}
                                      selected={ability.upgrade_tier < path.middle_path} key={ability.id}
                    />);
            } else {
                pathBottom.push(
                    <AbilityContainer ability={ability} fileName={monkeyFile} tier={tier} towerType="monkey"
                                      onClick={sandbox ? () => handlePathChange({"bottom_path": ability.upgrade_tier + 1}, {setPath, setSnackPack}) : () => {}}
                                      selected={ability.upgrade_tier < path.bottom_path} key={ability.id}
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
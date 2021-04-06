import styled from "@emotion/styled";
import {PureComponent} from "react";
import {Grid} from "@material-ui/core";

import AbilityContainer from "../ability/AbilityContainer";

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
        this.getAbilitiesCost = this.getAbilitiesCost.bind(this);
    }
    componentDidMount() {
        this.props.updateCost(this.getAbilitiesCost());
    }
    componentDidUpdate(_, __, ___) {
        this.props.updateCost(this.getAbilitiesCost());
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

    getAbilitiesCost() {
        const { abilities, ranks } = this.props;

        let cost = 0;

        abilities.forEach(ability => {
            if (ability.upgrade_path === 0 && ability.upgrade_tier < ranks.top_path) {
                cost += ability.cost_gold;
            } else if (ability.upgrade_path === 1 && ability.upgrade_tier < ranks.middle_path) {
                cost += ability.cost_gold;
            } else if (ability.upgrade_path === 2 && ability.upgrade_tier < ranks.bottom_path){
                cost += ability.cost_gold;
            }
        });

        return cost;
    }

    getAbilities() {
        const { abilities, monkeyFile, rank, ranks } = this.props;

        let pathTop = [], pathMiddle = [], pathBottom = [];

        abilities.forEach(ability => {
            if (ability.upgrade_path === 0) {
                pathTop.push(
                    <AbilityContainer ability={ability} fileName={monkeyFile} rank={rank}
                                      towerType="monkey" selected={ability.upgrade_tier < ranks.top_path} key={ability.id}
                    />);

            } else if (ability.upgrade_path === 1) {
                pathMiddle.push(
                    <AbilityContainer ability={ability} fileName={monkeyFile} rank={rank}
                                      towerType="monkey" selected={ability.upgrade_tier < ranks.middle_path} key={ability.id}
                    />);
            } else {
                pathBottom.push(
                    <AbilityContainer ability={ability} fileName={monkeyFile} rank={rank}
                                      towerType="monkey" selected={ability.upgrade_tier < ranks.bottom_path} key={ability.id}
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
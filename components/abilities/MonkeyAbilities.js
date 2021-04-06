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

    render() {
        const { className, abilities, monkeyFile, rank, ranks, updateCost } = this.props;

        let pathTop = [], pathMid = [], pathBot = [], cost = 0;

        abilities.forEach(ability => {
            if (ability.upgrade_path === 0) {
                const selected = ability.upgrade_tier < ranks.top_path;
                pathTop.push(
                    <AbilityContainer ability={ability} fileName={monkeyFile} rank={rank}
                                      towerType="monkey" selected={selected} key={ability.id}

                    />);
                if (selected) {
                    cost += ability.cost_gold;
                }

            } else if (ability.upgrade_path === 1) {
                const selected = ability.upgrade_tier < ranks.middle_path;
                pathMid.push(
                    <AbilityContainer ability={ability} fileName={monkeyFile} rank={rank}
                                      towerType="monkey" selected={selected} key={ability.id}
                    />);
                if (selected) {
                    cost += ability.cost_gold;
                }
            } else {
                const selected = ability.upgrade_tier < ranks.bottom_path;
                pathBot.push(
                    <AbilityContainer ability={ability} fileName={monkeyFile} rank={rank}
                                      towerType="monkey" selected={selected} key={ability.id}
                    />)
                if (selected) {
                    cost += ability.cost_gold;
                }
            }
        });
        updateCost(cost);

        return (
            <>
                <GridContainer container spacing={2} className={className}>
                    <GridItem item>
                        {pathTop}
                    </GridItem>
                    <GridItem item>
                        {pathMid}
                    </GridItem>
                    <GridItem item>
                        {pathBot}
                    </GridItem>
                </GridContainer>
            </>
        );
    }
}
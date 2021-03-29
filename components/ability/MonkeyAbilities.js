import styled from "@emotion/styled";
import { PureComponent } from "react";
import {Grid} from "@material-ui/core";

import AbilityContainer from "./AbilityContainer";

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

export default class MonkeyAbilities extends PureComponent {

    render() {
        const { className, abilities, monkeyFile, rank, ranks } = this.props;

        let pathTop = [], pathMid = [], pathBot = [];

        abilities.forEach(ability => {
            if (ability.upgrade_path === 0) {
                pathTop.push(
                    <AbilityContainer ability={ability} monkeyFile={monkeyFile} rank={rank} key={ability.id}
                                      selected={ability.upgrade_tier < ranks.topPath}
                    />);
            } else if (ability.upgrade_path === 1) {
                pathMid.push(
                    <AbilityContainer ability={ability} monkeyFile={monkeyFile} rank={rank} key={ability.id}
                                      selected={ability.upgrade_tier < ranks.midPath}
                    />);
            } else {
                pathBot.push(
                    <AbilityContainer ability={ability} monkeyFile={monkeyFile} rank={rank} key={ability.id}
                                      selected={ability.upgrade_tier < ranks.botPath}
                    />) }
        });

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
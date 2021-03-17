import styled from "@emotion/styled";
import { PureComponent } from "react";
import {Grid} from "@material-ui/core";

import Ability from "./Ability";
import UpgradeArrow from "./UpgradeArrow";

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

const AbilityContainer = ({ className, ability, monkeyFile, selected}) => (
    <>
        { ability.upgrade_tier !== 0  && (
            <UpgradeArrow selected={selected}/>
        )}
        <Ability ability={ability} monkeyFile={monkeyFile} selected={selected}/>
    </>
)

export default class Abilities extends PureComponent {

    render() {
        const { className, abilities, monkeyFile } = this.props;
        let { rank } = this.props;
        let pathTop = [], pathMid = [], pathBot = [];
        rank = {};
        rank.topPathRank = 0;
        rank.midPathRank = 2;
        rank.botPathRank = 5;

        abilities.forEach(ability => {
            if (ability.upgrade_path === 0) {
                pathTop.push(
                    <AbilityContainer ability={ability}
                                      monkeyFile={monkeyFile}
                                      selected={ability.upgrade_tier < rank.topPathRank}
                                      key={ability.id}
                    />);
            } else if (ability.upgrade_path === 1) {
                pathMid.push(
                    <AbilityContainer ability={ability}
                                      monkeyFile={monkeyFile}
                                      selected={ability.upgrade_tier < rank.midPathRank}
                                      key={ability.id}
                    />);
            } else {
                pathBot.push(
                    <AbilityContainer ability={ability}
                                      monkeyFile={monkeyFile}
                                      selected={ability.upgrade_tier < rank.botPathRank}
                                      key={ability.id}
                    />)
            }
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
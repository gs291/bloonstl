import styled from "@emotion/styled";
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

const AbilityContainer = ({ className, ability, monkeyFile}) => (
    <>
        { ability.upgrade_tier !== 0  && (
            <UpgradeArrow selected={ability.selected} />
        )}
        <Ability ability={ability} monkeyFile={monkeyFile} key={ability.id} />
    </>
)

export default function Abilities({ className, abilities, monkeyFile, rank }) {
    let pathTop = [], pathMid = [], pathBot = [];
    rank = {};
    rank.topPathRank = 0;
    rank.midPathRank = 2;
    rank.botPathRank = 5;
    abilities.forEach(ability => {
       if (ability.upgrade_path === 0)      { pathTop.push({ ...ability, selected: ability.upgrade_tier < rank.topPathRank }); }
       else if (ability.upgrade_path === 1) { pathMid.push({ ...ability, selected: ability.upgrade_tier < rank.midPathRank }); }
       else                                 { pathBot.push({ ...ability, selected: ability.upgrade_tier < rank.botPathRank }); }
    });

    return (
        <>
            <GridContainer container spacing={2} className={ className }>
                <GridItem item>
                    {pathTop.map(ability => <AbilityContainer ability={ability} monkeyFile={monkeyFile} key={ability.id} /> )}
                </GridItem>
                <GridItem item>
                    {pathMid.map(ability => <AbilityContainer ability={ability} monkeyFile={monkeyFile} key={ability.id}/>)}
                </GridItem>
                <GridItem item>
                    {pathBot.map(ability => <AbilityContainer ability={ability} monkeyFile={monkeyFile} key={ability.id}/>)}
                </GridItem>
            </GridContainer>
        </>
    );
}
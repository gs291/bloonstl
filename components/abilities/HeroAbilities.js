import {Grid} from "@mui/material";
import styled from "@emotion/styled";
import { PureComponent } from "react";

import AbilityContainer from "../ability/AbilityContainer";
import ShowAllAbilityModifiers from "./ShowAllAbilityModifiers";
import {
    checkDuplicateProsCons,
    concatToStringIfMissing,
    getInitialTowerStats,
    parseAbilityModifiers
} from "../../lib/utils/utils";
import {ga4SendAbilityClick} from "../../lib/utils/ga4";

const AbilitiesContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

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
        const {abilities, path, initialPros, initialCons, defaultStats} = this.props;

        const proCons = {pros: initialPros, cons: initialCons}
        const tempStats = getInitialTowerStats(defaultStats, proCons);

        console.log(tempStats);
        abilities.forEach(ability => {
            if (ability.upgrade_tier < path + 1) {
                tempStats.xp = tempStats.xp + ability.cost_xp;
                tempStats.pros = concatToStringIfMissing(tempStats.pros, ability.pros);
                tempStats.cons = concatToStringIfMissing(tempStats.cons, ability.cons);
                parseAbilityModifiers(ability.modifiers, null, tempStats);
            }
        })

        const {pros, cons} = checkDuplicateProsCons(tempStats.pros, tempStats.cons);
        tempStats.pros = pros;
        tempStats.cons = cons;

        return { ...tempStats }
    }

    getAbilities() {
        const {abilities, tier, path, setPath, heroName, heroFile} = this.props;

        let dividedAbilities = [ [], [], [], [], [] ];

        abilities.forEach(ability => {
            const onClick = setPath
                ? () => {setPath(ability.upgrade_tier); ga4SendAbilityClick({"level_path": ability.upgrade_tier + 1}, ability, heroName, true, "hero");}
                : () => ga4SendAbilityClick(null, ability, heroName, false, "hero");
            dividedAbilities[Math.floor(ability.upgrade_tier / 5)]
                .push((
                    <AbilityContainer
                        ability={ability}
                        fileName={heroFile}
                        towerType="hero"
                        key={ability.id}
                        tier={tier}
                        selected={path + 1 > ability.upgrade_tier}
                        onClick={onClick}
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
                <AbilitiesContainer className={className}>
                    <GridContainer container spacing={2}>
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
                    <ShowAllAbilityModifiers tier={tier} />
                </AbilitiesContainer>
            </>
        );
    }
}
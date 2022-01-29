import {Grid} from "@mui/material";
import {connect} from "react-redux";
import {PureComponent} from "react";
import styled from "@emotion/styled";

import {
    checkDuplicateProsCons,
    concatToStringIfMissing,
    getInitialTowerStats,
    getMonkeyAbilityParseOrder,
    parseAbilityModifiers
} from "../../lib/utils/utils";
import Paragon from "../ability/Paragon";
import {ga4SendAbilityClick} from "../../lib/utils/ga4";
import AbilityContainer from "../ability/AbilityContainer";
import {globalOptions} from "../../lib/utils/emotionStyled";
import ShowAllAbilityModifiers from "./ShowAllAbilityModifiers";

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

const AllAbilities = styled("div", globalOptions)`
  display: flex;
  flex-direction: ${props => props["data-m"] ? "column" : "row"};
  gap: 10px 20px;
`;

class MonkeyAbilities extends PureComponent {
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
        const { abilities, stats, path } = this.props;

        const order = getMonkeyAbilityParseOrder(path);

        const proCons = {pros: path.pros, cons: path.cons}
        const tempStats = getInitialTowerStats(stats, proCons);

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
                    tempStats.xp = tempStats.xp + abilities[j].cost_xp;
                    if (!(path.top_path === 5 && path.middle_path === 5 && path.bottom_path === 5)) {
                        tempStats.pros = concatToStringIfMissing(tempStats.pros, abilities[j].pros);
                        tempStats.cons = concatToStringIfMissing(tempStats.cons, abilities[j].cons);
                        parseAbilityModifiers(abilities[j].modifiers, path, tempStats);
                    }
                }
            }
        }

        const paragon = 15;
        if (abilities.length > paragon && path.top_path === 5 && path.middle_path === 5 && path.bottom_path === 5) {
            if (abilities[paragon]) {
                tempStats.cost = tempStats.cost + abilities[paragon].cost_gold;
                tempStats.xp = tempStats.xp + abilities[paragon].cost_xp;
                tempStats.pros = concatToStringIfMissing(tempStats.pros, abilities[paragon].pros);
                tempStats.cons = concatToStringIfMissing(tempStats.cons, abilities[paragon].cons);
                parseAbilityModifiers(abilities[paragon].modifiers, path, tempStats);
            }
        }

        const {pros, cons} = checkDuplicateProsCons(tempStats.pros, tempStats.cons);
        tempStats.pros = pros;
        tempStats.cons = cons;

        return { ...tempStats };
    }

    getAbilities() {
        const { abilities, monkeyName, monkeyFile, tier, path, setPath, handlePathChange, setSnackPack } = this.props;

        let pathTop = [], pathMiddle = [], pathBottom = [], paragon = null;

        const pushAbility = (list, ability, selected, pathChange, ga4Path) => {
            const onClick = handlePathChange
                ? () => {handlePathChange(pathChange, {setPath, setSnackPack}); ga4SendAbilityClick(ga4Path, ability, monkeyName, true, "monkey");}
                : () => ga4SendAbilityClick(null, ability, monkeyName, false, "monkey");
            list.push(
                <AbilityContainer
                    ability={ability} fileName={monkeyFile} tier={tier} towerType="monkey"
                    onClick={onClick} selected={selected} key={ability.id} />
            );
        }

        abilities.forEach(ability => {
            if (ability.upgrade_path === 0) {
                pushAbility(
                    pathTop,
                    ability,
                    ability.upgrade_tier < path.top_path,
                    {"top_path": ability.upgrade_tier + 1},
                    {...path, "top_path": ability.upgrade_tier + 1}
                );
            } else if (ability.upgrade_path === 1) {
                pushAbility(
                    pathMiddle,
                    ability,
                    ability.upgrade_tier < path.middle_path,
                    {"middle_path": ability.upgrade_tier + 1},
                    {...path, "middle_path": ability.upgrade_tier + 1}
                );
            } else if (ability.upgrade_path === 2) {
                pushAbility(
                    pathBottom,
                    ability,
                    ability.upgrade_tier < path.bottom_path,
                    {"bottom_path": ability.upgrade_tier + 1},
                    {...path, "bottom_path": ability.upgrade_tier + 1}
                );
            } else if (ability.upgrade_path === 3) {
                const onClick = handlePathChange
                    ? () => {handlePathChange({"top_path": 5, "middle_path": 5, "bottom_path": 5}, {setPath, setSnackPack}); ga4SendAbilityClick({"top_path": 5, "middle_path": 5, "bottom_path": 5}, ability, monkeyName, true, "monkey");}
                    : () => ga4SendAbilityClick(null, ability, monkeyName, false, "monkey");
                paragon = (
                    <Paragon
                        ability={ability} fileName={monkeyFile} tier={tier} towerType="monkey" onClick={onClick}
                        selected={path.top_path === 5 && path.middle_path === 5 && path.bottom_path === 5} key={ability.id} />
                );
            }
        });
        return {
            pathTop,
            pathMiddle,
            pathBottom,
            paragon
        }
    }

    render() {
        const { className, tier, mobile } = this.props;
        const {pathTop, pathMiddle, pathBottom, paragon} = this.getAbilities();

        return (
            <>
                <AbilitiesContainer className={className}>
                    <AllAbilities data-m={mobile}>
                        <GridContainer container spacing={2}>
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
                        {paragon && (
                            {...paragon}
                        )}
                    </AllAbilities>
                    <ShowAllAbilityModifiers tier={tier} paragon={paragon !== null}/>
                </AbilitiesContainer>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        darkMode: state.darkMode,
        mobile: state.mobile
    };
}

export default connect(mapStateToProps)(MonkeyAbilities);

import {Grid} from "@mui/material";
import {connect} from "react-redux";
import {PureComponent} from "react";
import styled from "@emotion/styled";

import Paragon from "../ability/Paragon";
import AbilityContainer from "../ability/AbilityContainer";
import {globalOptions} from "../../lib/utils/emotionStyled";
import ShowAllAbilityModifiers from "./ShowAllAbilityModifiers";
import {
    checkDuplicateProsCons,
    concatToStringIfMissing,
    getInitialTowerStats,
    getMonkeyAbilityParseOrder,
    parseAbilityModifiers
} from "../../lib/utils/utils";

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
                    tempStats.pros = concatToStringIfMissing(tempStats.pros, abilities[j].pros);
                    tempStats.cons = concatToStringIfMissing(tempStats.cons, abilities[j].cons);
                    parseAbilityModifiers(abilities[j].modifiers, path, tempStats);
                }
            }
        }

        const {pros, cons} = checkDuplicateProsCons(tempStats.pros, tempStats.cons);
        tempStats.pros = pros;
        tempStats.cons = cons;

        return { ...tempStats };
    }

    getAbilities() {
        const { abilities, monkeyFile, tier, path, setPath, handlePathChange, setSnackPack } = this.props;

        let pathTop = [], pathMiddle = [], pathBottom = [], paragon = null;

        abilities.forEach(ability => {
            if (ability.upgrade_path === 0) {
                pathTop.push(
                    <AbilityContainer ability={ability} fileName={monkeyFile} tier={tier} towerType="monkey"
                                      onClick={handlePathChange ? () => handlePathChange({"top_path": ability.upgrade_tier + 1}, {setPath, setSnackPack}) : () => {}}
                                      selected={ability.upgrade_tier < path.top_path} key={ability.id}
                    />);

            } else if (ability.upgrade_path === 1) {
                pathMiddle.push(
                    <AbilityContainer ability={ability} fileName={monkeyFile} tier={tier} towerType="monkey"
                                      onClick={handlePathChange ? () => handlePathChange({"middle_path": ability.upgrade_tier + 1}, {setPath, setSnackPack}) : () => {}}
                                      selected={ability.upgrade_tier < path.middle_path} key={ability.id}
                    />);
            } else if (ability.upgrade_path === 2) {
                pathBottom.push(
                    <AbilityContainer ability={ability} fileName={monkeyFile} tier={tier} towerType="monkey"
                                      onClick={handlePathChange ? () => handlePathChange({"bottom_path": ability.upgrade_tier + 1}, {setPath, setSnackPack}) : () => {}}
                                      selected={ability.upgrade_tier < path.bottom_path} key={ability.id}
                    />);
            } else if (ability.upgrade_path === 3) {
                paragon = (
                    <Paragon
                        ability={ability} fileName={monkeyFile} tier={tier} towerType="monkey"
                        onClick={handlePathChange ? () => handlePathChange({"top_path": 5, "middle_path": 5, "bottom_path": 5}, {setPath, setSnackPack}) : () => {}}
                        selected={path.top_path === 5 && path.middle_path === 5 && path.bottom_path === 5} />);
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
                    <ShowAllAbilityModifiers tier={tier} />
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

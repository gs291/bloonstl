import {Grid} from "@mui/material";
import {useSelector} from "react-redux";
import {styled} from "@mui/material/styles";
import {useTheme} from "@mui/material/styles";

import FiltersTierList from "../filters/FiltersTierList";
import GridTowerContainer from "../grid/GridTowerContainer";
import {getTierColor, getTowerType} from "../../lib/utils/utils";
import {getHeroState, getMobile, getMonkeyState} from "../../lib/redux/selectors";


const FilterContainer = styled("div")`
  margin-bottom: 50px;
  border-radius: 20px;
  width: 100%;
  background-color: ${props => props.theme.palette.primary.main};
  color: ${props => props.theme.palette.text.primary};
`;

/**
 * Tier list page grid
 *
 * @param {Object} props Component props
 * @param {string} [props.className] class to apply to the component
 * @param {Object<{s: Array<Object>,a: Array<Object>, b: Array<Object>, c: Array<Object>}>} props.tiers
 *   Monkeys/Heroes split into their respective tier
 */
export default function TierListGrid({ className, tiers }) {
    const theme = useTheme();
    const mobile = useSelector(getMobile);
    const heroes = useSelector(getHeroState);
    const monkeys = useSelector(getMonkeyState);

    const colors = {
        "s": getTierColor("s", theme),
        "a": getTierColor("a", theme),
        "b": getTierColor("b", theme),
        "c": getTierColor("c", theme)
    }

    let gridSpacing = 6;
    if (mobile) {
        gridSpacing = 4;
    }

    const filterTowers = (towers) =>
        towers.filter(tower => {
            const towerType = getTowerType(tower.type);
            if (towerType === "monkey" && !monkeys) {
                return false;
            } else if (towerType === "hero" && !heroes) {
                return false;
            }
            return true;
        });

    const filteredTiers = {
        "s": filterTowers(tiers["s"]),
        "a": filterTowers(tiers["a"]),
        "b": filterTowers(tiers["b"]),
        "c": filterTowers(tiers["c"])
    }

    return (
        <>
            <FilterContainer className={className}>
                <FiltersTierList />
            </FilterContainer>
            <Grid container spacing={gridSpacing} direction="column">
                <Grid item>
                    <GridTowerContainer
                        towers={filteredTiers["s"]}
                        title="S Tier"
                        tier="s"
                        backgroundColor={theme.palette.tier.s.grid}
                        titleColor={colors.s}
                        ignoreFilter={0}
                    />
                </Grid>
                <Grid item>
                    <GridTowerContainer
                        towers={filteredTiers["a"]}
                        title="A Tier"
                        tier="a"
                        backgroundColor={theme.palette.tier.a.grid}
                        titleColor={colors.a}
                        ignoreFilter={0}
                    />
                </Grid>
                <Grid item>
                    <GridTowerContainer
                        towers={filteredTiers["b"]}
                        title="B Tier"
                        tier="b"
                        backgroundColor={theme.palette.tier.b.grid}
                        titleColor={colors.b}
                        ignoreFilter={0}
                    />
                </Grid>
                <Grid item>
                    <GridTowerContainer
                        towers={filteredTiers["c"]}
                        title="C Tier"
                        tier="c"
                        backgroundColor={theme.palette.tier.c.grid}
                        titleColor={colors.c}
                        ignoreFilter={0}
                    />
                </Grid>
            </Grid>
        </>
    );
}
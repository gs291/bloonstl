import {Grid} from "@mui/material";
import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import siteColors from "../../lib/utils/siteColors";
import FiltersTierList from "../filters/FiltersTierList";
import GridTowerContainer from "../grid/GridTowerContainer";
import {globalOptions} from "../../lib/utils/emotionStyled";
import {getTierColor, getTowerType} from "../../lib/utils/utils";
import {getDarkMode, getHeroState, getMobile, getMonkeyState} from "../../lib/redux/selectors";

const FilterContainer = styled("div", globalOptions)`
  margin-bottom: 50px;
  border-radius: 20px;
  width: 100%;
  background-color: ${props => props["data-dm"] ? siteColors.accent.dark : siteColors.accent.light};
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
  transition: 0.3s;
`;

export default function TierListGrid({ className, tiers }) {
    const mobile = useSelector(getMobile);
    const heroes = useSelector(getHeroState);
    const darkMode = useSelector(getDarkMode);
    const monkeys = useSelector(getMonkeyState);

    const colors = {
        "s": getTierColor("s"),
        "a": getTierColor("a"),
        "b": getTierColor("b"),
        "c": getTierColor("c")
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
            <FilterContainer data-dm={darkMode} className={className}>
                <FiltersTierList />
            </FilterContainer>
            <Grid container spacing={gridSpacing} direction="column">
                <Grid item>
                    <GridTowerContainer
                        towers={filteredTiers["s"]}
                        title="S Tier"
                        tier="s"
                        backgroundColor={darkMode ? siteColors.tier.s.grid.dark : siteColors.tier.s.grid.light}
                        titleColor={colors.s}
                        ignoreFilter={0}
                    />
                </Grid>
                <Grid item>
                    <GridTowerContainer
                        towers={filteredTiers["a"]}
                        title="A Tier"
                        tier="a"
                        backgroundColor={darkMode ? siteColors.tier.a.grid.dark : siteColors.tier.a.grid.light}
                        titleColor={colors.a}
                        ignoreFilter={0}
                    />
                </Grid>
                <Grid item>
                    <GridTowerContainer
                        towers={filteredTiers["b"]}
                        title="B Tier"
                        tier="b"
                        backgroundColor={darkMode ? siteColors.tier.b.grid.dark : siteColors.tier.b.grid.light}
                        titleColor={colors.b}
                        ignoreFilter={0}
                    />
                </Grid>
                <Grid item>
                    <GridTowerContainer
                        towers={filteredTiers["c"]}
                        title="C Tier"
                        tier="c"
                        backgroundColor={darkMode ? siteColors.tier.c.grid.dark : siteColors.tier.c.grid.light}
                        titleColor={colors.c}
                        ignoreFilter={0}
                    />
                </Grid>
            </Grid>
        </>
    );
}
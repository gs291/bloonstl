import styled from "@emotion/styled";
import {Grid} from "@material-ui/core";
import {useSelector} from "react-redux";

import {getTierColor} from "../../lib/utils/utils";
import siteColors from "../../lib/utils/siteColors";
import FiltersTierList from "../filters/FiltersTierList";
import GridTowerContainer from "../grid/GridTowerContainer";
import {getDarkMode, getMobile} from "../../lib/redux/selectors";

const FilterContainer = styled.div`
  margin-bottom: 20px;
  background-color: ${props => props["data-dm"] ? siteColors.filters.dark : siteColors.filters.light};
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
  transition: 0.3s;
`;

export default function TierListGrid({ className, tiers }) {
    const mobile = useSelector(getMobile);
    const darkMode = useSelector(getDarkMode);

    const colors = {
        "s": getTierColor("s"),
        "a": getTierColor("a"),
        "b": getTierColor("b"),
    }

    let gridSpacing = 6;
    if (mobile) {
        gridSpacing = 4;
    }

    return (
        <>
            <FilterContainer data-dm={darkMode} className={className}>
                <FiltersTierList />
            </FilterContainer>
            <Grid container spacing={gridSpacing} direction="column">
                <Grid item>
                    <GridTowerContainer
                        towers={tiers["s"]}
                        title="S Tier"
                        rank="s"
                        backgroundColor={siteColors.tier.s.grid.dark}
                        titleColor={colors.s}
                        keepBorder={0}
                    />
                </Grid>
                <Grid item>
                    <GridTowerContainer
                        towers={tiers["a"]}
                        title="A Tier"
                        rank="a"
                        backgroundColor={siteColors.tier.a.grid.dark}
                        titleColor={colors.a}
                        keepBorder={0}
                    />
                </Grid>
                <Grid item>
                    <GridTowerContainer
                        towers={tiers["b"]}
                        title="B Tier"
                        rank="b"
                        backgroundColor={siteColors.tier.b.grid.dark}
                        titleColor={colors.b}
                        keepBorder={0}
                    />
                </Grid>
            </Grid>
        </>
    );
}
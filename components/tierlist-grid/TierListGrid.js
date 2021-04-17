import styled from "@emotion/styled";
import {Grid} from "@material-ui/core";

import {getTierColor} from "../../lib/utils/utils";
import siteColors from "../../lib/utils/siteColors";
import FiltersTierList from "../filters/FiltersTierList";
import GridTowerContainer from "../grid/GridTowerContainer";

const FilterContainer = styled.div`
  margin-bottom: 20px;
  background-color: ${siteColors.filters.dark};
  color: ${siteColors.text.dark};
`;

export default function TierListGrid({ className, tiers }) {
    const colors = {
        "s": getTierColor("s"),
        "a": getTierColor("a"),
        "b": getTierColor("b"),
    }

    return (
        <>
            <FilterContainer className={className}>
                <FiltersTierList />
            </FilterContainer>
            <Grid container spacing={6} direction="column">
                <Grid item>
                    <GridTowerContainer
                        towers={tiers["s"]}
                        title="S Tier"
                        rank="s"
                        backgroundColor={siteColors.tier.s.grid}
                        titleColor={colors.s}
                        keepBorder={0}
                    />
                </Grid>
                <Grid item>
                    <GridTowerContainer
                        towers={tiers["a"]}
                        title="A Tier"
                        rank="a"
                        backgroundColor={siteColors.tier.a.grid}
                        titleColor={colors.a}
                        keepBorder={0}
                    />
                </Grid>
                <Grid item>
                    <GridTowerContainer
                        towers={tiers["b"]}
                        title="B Tier"
                        rank="b"
                        backgroundColor={siteColors.tier.b.grid}
                        titleColor={colors.b}
                        keepBorder={0}
                    />
                </Grid>
            </Grid>
        </>
    );
}
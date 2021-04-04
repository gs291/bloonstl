import styled from "@emotion/styled";
import {Grid} from "@material-ui/core";
import {useSelector} from "react-redux";

import GridTitle from "../grid/GridTitle";
import GridItems from "../grid/GridItems";
import TowerCard from "../tower/TowerCard";
import {getMobile} from "../../lib/redux/selectors";
import {rankColors, siteColors} from "../../lib/utils";
import FiltersTierList from "../filters/FiltersTierList";

const FilterContainer = styled.div`
  margin-bottom: 20px;
  background-color: ${ siteColors.background.filters.dark };
  color: ${siteColors.text.dark};
`;

export default function TierListGrid({ className, tiers }) {
    const mobile = useSelector(getMobile);

    let gridSpacing = 3;
    if (mobile) {
        gridSpacing = 6;
    }

    const sColor = rankColors("s");
    const aColor = rankColors("a");
    const bColor = rankColors("b");

    return (
        <>
            <FilterContainer className={className}>
                <FiltersTierList />
            </FilterContainer>
            <Grid container spacing={2} direction="column">
                <GridTitle backgroundColor={sColor}>
                    S Tier
                </GridTitle>
                <GridItems borderColor={sColor}>
                    <Grid container spacing={2}>
                        {tiers.s.map(tower => (
                            <Grid xs={gridSpacing} item key={tower.t_id}>
                                <TowerCard tower={tower}
                                           towerType={typeof tower.cost_cash === "number" ? "hero" : "monkey"}
                                           keepBorder={0}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </GridItems>
                <GridTitle backgroundColor={aColor}>
                    A Tier
                </GridTitle>
                <GridItems borderColor={aColor}>
                    <Grid container spacing={2}>
                        {tiers.a.map(tower => (
                            <Grid xs={gridSpacing} item key={tower.t_id}>
                                <TowerCard tower={tower}
                                           towerType={typeof tower.cost_cash === "number" ? "hero" : "monkey"}
                                           keepBorder={0}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </GridItems>
                <GridTitle backgroundColor={bColor}>
                    B Tier
                </GridTitle>
                <GridItems borderColor={bColor}>
                    <Grid container spacing={2}>
                        {tiers.b.map(tower => (
                            <Grid xs={gridSpacing} item key={tower.t_id}>
                                <TowerCard tower={tower}
                                           towerType={typeof tower.cost_cash === "number" ? "hero" : "monkey"}
                                           keepBorder={0}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </GridItems>
            </Grid>
        </>
    );
}
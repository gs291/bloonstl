import styled from "@emotion/styled";
import {Grid} from "@material-ui/core";
import {useSelector} from "react-redux";

import GridTitle from "../grid/GridTitle";
import GridItems from "../grid/GridItems";
import TowerCard from "../tower/TowerCard";
import {rankColors} from "../../lib/utils/utils";
import {getMobile} from "../../lib/redux/selectors";
import siteColors from "../../lib/utils/siteColors";
import FiltersTierList from "../filters/FiltersTierList";

const FilterContainer = styled.div`
  margin-bottom: 20px;
  background-color: ${ siteColors.filters.dark };
  color: ${siteColors.text.dark};
`;

const TierGrid = styled(Grid)`
  padding: 2em 1em;
`;

const SGrid = styled(TierGrid)`
  background-color: ${siteColors.rank.s.card};
`;

const AGrid = styled(TierGrid)`
  background-color: ${siteColors.rank.a.card};
`;

const BGrid = styled(TierGrid)`
  background-color: ${siteColors.rank.b.card};
`;

export default function TierListGrid({ className, tiers }) {
    const mobile = useSelector(getMobile);

    let gridSpacing = 4;
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
                    <SGrid container spacing={2}>
                        {tiers.s.map(tower => (
                            <Grid xs={gridSpacing} item key={tower.t_id}>
                                <TowerCard tower={tower}
                                           towerType={typeof tower.cost_cash === "number" ? "hero" : "monkey"}
                                           keepBorder={0}
                                />
                            </Grid>
                        ))}
                    </SGrid>
                </GridItems>
                <GridTitle backgroundColor={aColor}>
                    A Tier
                </GridTitle>
                <GridItems borderColor={aColor}>
                    <AGrid container spacing={2}>
                        {tiers.a.map(tower => (
                            <Grid xs={gridSpacing} item key={tower.t_id}>
                                <TowerCard tower={tower}
                                           towerType={typeof tower.cost_cash === "number" ? "hero" : "monkey"}
                                           keepBorder={0}
                                />
                            </Grid>
                        ))}
                    </AGrid>
                </GridItems>
                <GridTitle backgroundColor={bColor}>
                    B Tier
                </GridTitle>
                <GridItems borderColor={bColor}>
                    <BGrid container spacing={2}>
                        {tiers.b.map(tower => (
                            <Grid xs={gridSpacing} item key={tower.t_id}>
                                <TowerCard tower={tower}
                                           towerType={typeof tower.cost_cash === "number" ? "hero" : "monkey"}
                                           keepBorder={0}
                                />
                            </Grid>
                        ))}
                    </BGrid>
                </GridItems>
            </Grid>
        </>
    );
}
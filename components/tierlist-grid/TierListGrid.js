import { useState } from "react";
import styled from "@emotion/styled";
import {Grid} from "@material-ui/core";
import {useSelector} from "react-redux";

import {rankColors} from "../../lib/utils";
import TowerCard from "../tower/TowerCard";
import {getMobile} from "../../lib/redux/selectors";
import FiltersTierList from "../filters/FiltersTierList";


const FilterContainer = styled.div`
  margin: 10px 0;
  background-color: #1D1D1D;
  color: white;
`;

const RankTitle = styled(Grid)`
  margin-top: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  
  background-color: ${props => rankColors(props.rank)};

  color: #000;
`;

const GridItem = styled(Grid)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  border: 2px solid ${props => rankColors(props.rank)};
`;

export default function TierListGrid({ className, tiers }) {
    const mobile = useSelector(getMobile);
    const [state, setState] = useState({
        isDetailed: false
    });

    const handleFilter = (event) => { setState({ ...state, [event.target.name]: event.target.checked }); };

    let gridSpacing = 3;
    if (mobile) {
        gridSpacing = 6;
    }

    return (
        <>
            <FilterContainer className={className}>
                <FiltersTierList state={state} handleFilter={handleFilter} />
            </FilterContainer>
            <Grid container spacing={2} direction="column">
                <RankTitle rank="s" item>
                    S Tier
                </RankTitle>
                <GridItem rank="s" item>
                    <Grid container spacing={2}>
                        { tiers.s.map(tower => (
                            <Grid xs={gridSpacing} item key={tower.t_id}>
                                <TowerCard tower={tower} towerType={typeof tower.cost_cash === "number" ? "hero" : "monkey"}/>
                            </Grid>
                        ))}
                    </Grid>
                </GridItem>
                <RankTitle rank="a" item>
                    A Tier
                </RankTitle>
                <GridItem rank="a" item>
                    <Grid container spacing={2}>
                        { tiers.a.map(tower => (
                            <Grid xs={gridSpacing} item key={tower.t_id}>
                                <TowerCard tower={tower} towerType={typeof tower.cost_cash === "number" ? "hero" : "monkey"}/>
                            </Grid>
                        ))}
                    </Grid>
                </GridItem>
                <RankTitle rank="b" item>
                    B Tier
                </RankTitle>
                <GridItem rank="b" item>
                    <Grid container spacing={2}>
                        { tiers.b.map(tower => (
                            <Grid xs={gridSpacing} item key={tower.t_id}>
                                <TowerCard tower={tower} towerType={typeof tower.cost_cash === "number" ? "hero" : "monkey"}/>
                            </Grid>
                        ))}
                    </Grid>
                </GridItem>
            </Grid>
        </>
    );
}
import styled from "@emotion/styled";
import {Grid} from "@material-ui/core";
import {useSelector} from "react-redux";

import GridTitle from "../grid/GridTitle";
import GridItems from "../grid/GridItems";
import TowerCard from "../tower/TowerCard";
import {siteColors} from "../../lib/utils";
import {getMobile} from "../../lib/redux/selectors";


export default function HeroesGrid({ heroes }) {
    const mobile = useSelector(getMobile);

    let gridSpacing = 3;
    if (mobile) {
        gridSpacing = 6;
    }

    return (
        <>
            <Grid direction="column" container spacing={2}>
                <GridTitle backgroundColor={siteColors.heroes}>
                    Heroes
                </GridTitle>
                <GridItems borderColor={siteColors.heroes}>
                    <Grid container spacing={2}>
                        { heroes.map(hero => (
                                <Grid xs={gridSpacing} item key={hero.id}>
                                    <TowerCard tower={hero} towerType="hero" keepBorder={1}/>
                                </Grid>
                            )
                        )}
                    </Grid>
                </GridItems>
            </Grid>
        </>
    );
}
import styled from "@emotion/styled";
import {Grid} from "@material-ui/core";

import TowerCard from "../tower/TowerCard";
import {useSelector} from "react-redux";
import {getMobile} from "../../lib/redux/selectors";


export default function HeroesGrid({ heroes }) {
    const mobile = useSelector(getMobile);

    let gridSpacing = 3;
    if (mobile) {
        gridSpacing = 6;
    }

    return (
        <>
            <Grid container spacing={2}>
                { heroes.map(hero => (
                        <Grid xs={gridSpacing} item key={hero.id}>
                            <TowerCard tower={hero} towerType="hero"/>
                        </Grid>
                    )
                )}
            </Grid>
        </>
    );
}
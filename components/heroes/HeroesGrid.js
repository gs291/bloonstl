import styled from "@emotion/styled";
import {Grid} from "@material-ui/core";

import TowerCard from "../tower/TowerCard";
import {useSelector} from "react-redux";
import {getMobile} from "../../lib/redux/selectors";
import {getMonkeyTypeColor} from "../../lib/utils";

const HeroTitle = styled(Grid)`
  padding-top: 5px;
  padding-bottom: 5px;
  
  background-color: #004A7D;
  color: #000;
`;

export default function HeroesGrid({ heroes }) {
    const mobile = useSelector(getMobile);

    let gridSpacing = 3;
    if (mobile) {
        gridSpacing = 6;
    }

    return (
        <>
            <Grid direction="column" container spacing={2}>
                <HeroTitle item>
                    Heroes
                </HeroTitle>
                <Grid item>
                    <Grid container spacing={2}>
                        { heroes.map(hero => (
                                <Grid xs={gridSpacing} item key={hero.id}>
                                    <TowerCard tower={hero} towerType="hero"/>
                                </Grid>
                            )
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}
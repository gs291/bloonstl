import {Grid} from "@material-ui/core";

import siteColors from "../../lib/utils/siteColors";
import GridTowerContainer from "../grid/GridTowerContainer";


export default function HeroesGrid({ heroes }) {

    return (
        <>
            <Grid direction="column" container>
                <Grid item>
                    <GridTowerContainer
                        towers={heroes}
                        title="Heroes"
                        backgroundColor={siteColors.heroes.grid}
                        titleColor={siteColors.heroes.color}
                        keepBorder={1}
                    />
                </Grid>
            </Grid>
        </>
    );
}
import {Grid} from "@mui/material";
import {useTheme} from "@mui/material/styles";

import GridTowerContainer from "../grid/GridTowerContainer";


/**
 * Grid to display all the heroes
 *
 * @param {Object} props Component props
 * @param {Array<Object>} props.heroes Array list of all the heroes
 */
export default function HeroesGrid({ heroes }) {
    const theme = useTheme();

    return (
        <>
            <Grid direction="column" container>
                <Grid item>
                    <GridTowerContainer
                        towers={heroes}
                        title="Towers"
                        backgroundColor={theme.palette.tower.heroes.grid}
                        titleColor={theme.palette.tower.heroes.color}
                        ignoreFilter={1}
                    />
                </Grid>
            </Grid>
        </>
    );
}
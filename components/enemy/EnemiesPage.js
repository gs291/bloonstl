import {Grid} from "@mui/material";
import {useTheme} from "@mui/material/styles";

import GridTowerContainer from "../grid/GridTowerContainer";


/**
 * The '/bloons' page component
 *
 * @param {Object} props Component props
 * @param {Object} props.bloons Object containing the bloons/blimps
 * @param {Object} props.bosses Object containing the blimp bosses
 */
export default function EnemiesPage({bloons, bosses}) {
    const theme = useTheme();

    return (
        <>
            <Grid direction="column" container>
                <Grid item>
                    <GridTowerContainer
                        towers={{bloons, bosses}}
                        title="Bloons & Blimps"
                        type="bloon"
                        backgroundColor={theme.palette.tower.type.heroes.grid}
                        titleColor={theme.palette.tower.type.heroes.color}
                        ignoreFilter={1}
                    />
                </Grid>
            </Grid>
        </>
    );
}
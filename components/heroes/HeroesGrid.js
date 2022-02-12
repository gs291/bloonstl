import {Grid} from "@mui/material";
import {useSelector} from "react-redux";

import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";
import GridTowerContainer from "../grid/GridTowerContainer";


/**
 * Grid to display all the heroes
 *
 * @param {Object} props Component props
 * @param {Array<Object>} props.heroes Array list of all the heroes
 */
export default function HeroesGrid({ heroes }) {
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <Grid direction="column" container>
                <Grid item>
                    <GridTowerContainer
                        towers={heroes}
                        title="Towers"
                        backgroundColor={darkMode
                            ? siteColors.heroes.grid.dark
                            : siteColors.heroes.grid.light
                        }
                        titleColor={siteColors.heroes.color}
                        ignoreFilter={1}
                    />
                </Grid>
            </Grid>
        </>
    );
}
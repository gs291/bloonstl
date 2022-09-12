import {Grid} from "@mui/material";
import {useSelector} from "react-redux";
import {useTheme} from '@mui/material/styles';

import {getMobile} from "../../lib/redux/selectors";
import {getMonkeyColor} from "../../lib/utils/utils";
import GridTowerContainer from "../grid/GridTowerContainer";


/**
 * Grid to display all the monkeys
 *
 * @param {Object} props Component props
 * @param {Array<Object>} props.primary Array list of all the primary monkeys
 * @param {Array<Object>} props.military Array list of all the military monkeys
 * @param {Array<Object>} props.magic Array list of all the magic monkeys
 * @param {Array<Object>} props.support Array list of all the support monkeys
 */
export default function MonkeysGrid({primary, military, magic, support}) {
    const theme = useTheme();
    const mobile = useSelector(getMobile);

    let gridSpacing = 6;
    if (mobile) {
        gridSpacing = 4;
    }

    return (
        <>
            <Grid direction="column" container spacing={gridSpacing}>
                <Grid item>
                    <GridTowerContainer
                        towers={primary}
                        title="Primary"
                        backgroundColor={theme.palette.tower.type.primary.grid}
                        titleColor={getMonkeyColor("Primary", theme)}
                        ignoreFilter={1}
                    />
                </Grid>
                <Grid item>
                    <GridTowerContainer
                        towers={military}
                        title="Military"
                        backgroundColor={theme.palette.tower.type.military.grid}
                        titleColor={getMonkeyColor("Military", theme)}
                        ignoreFilter={1}
                    />
                </Grid>
                <Grid item>
                    <GridTowerContainer
                        towers={magic}
                        title="Magic"
                        backgroundColor={theme.palette.tower.type.magic.grid}
                        titleColor={getMonkeyColor("Magic", theme)}
                        ignoreFilter={1}
                    />
                </Grid>
                <Grid item>
                    <GridTowerContainer
                        towers={support}
                        title="Support"
                        backgroundColor={theme.palette.tower.type.support.grid}
                        titleColor={getMonkeyColor("Support", theme)}
                    ignoreFilter={1}
                    />
                </Grid>
            </Grid>
        </>
    );
}
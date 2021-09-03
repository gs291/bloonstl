import {Grid} from "@material-ui/core";
import {useSelector} from "react-redux";

import siteColors from "../../lib/utils/siteColors";
import {getMonkeyColor} from "../../lib/utils/utils";
import GridTowerContainer from "../grid/GridTowerContainer";
import {getDarkMode, getMobile} from "../../lib/redux/selectors";


export default function MonkeysGrid({ primary, military, magic, support }) {
    const mobile = useSelector(getMobile);
    const darkMode = useSelector(getDarkMode);

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
                        backgroundColor={darkMode
                            ? siteColors.monkeyType.primary.grid.dark
                            : siteColors.monkeyType.primary.grid.light
                        }
                        titleColor={getMonkeyColor("Primary")}
                        ignoreFilter={1}
                    />
                </Grid>
                <Grid item>
                    <GridTowerContainer
                        towers={military}
                        title="Military"
                        backgroundColor={darkMode
                            ? siteColors.monkeyType.military.grid.dark
                            : siteColors.monkeyType.military.grid.light
                        }
                        titleColor={getMonkeyColor("Military")}
                        ignoreFilter={1}
                    />
                </Grid>
                <Grid item>
                    <GridTowerContainer
                        towers={magic}
                        title="Magic"
                        backgroundColor={darkMode
                            ? siteColors.monkeyType.magic.grid.dark
                            : siteColors.monkeyType.magic.grid.light
                        }
                        titleColor={getMonkeyColor("Magic")}
                        ignoreFilter={1}
                    />
                </Grid>
                <Grid item>
                    <GridTowerContainer
                        towers={support}
                        title="Support"
                        backgroundColor={darkMode
                            ? siteColors.monkeyType.support.grid.dark
                            : siteColors.monkeyType.support.grid.light
                        }
                        titleColor={getMonkeyColor("Support")}
                    ignoreFilter={1}
                    />
                </Grid>
            </Grid>
        </>
    );
}
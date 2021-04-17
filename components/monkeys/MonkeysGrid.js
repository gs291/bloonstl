import {Grid} from "@material-ui/core";
import {useSelector} from "react-redux";

import siteColors from "../../lib/utils/siteColors";
import {getMobile} from "../../lib/redux/selectors";
import {getMonkeyTypeColor} from "../../lib/utils/utils";
import GridTowerContainer from "../grid/GridTowerContainer";


export default function MonkeysGrid({ primary, military, magic, support }) {
    const mobile = useSelector(getMobile);
    const primaryColor = getMonkeyTypeColor("Primary");
    const militaryColor = getMonkeyTypeColor("Military");
    const magicColor = getMonkeyTypeColor("Magic");
    const supportColor = getMonkeyTypeColor("Support");

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
                        backgroundColor={siteColors.monkeyType.primary.grid}
                        titleColor={primaryColor}
                        keepBorder={1}
                    />
                </Grid>
                <Grid item>
                    <GridTowerContainer
                        towers={military}
                        title="Military"
                        backgroundColor={siteColors.monkeyType.military.grid}
                        titleColor={militaryColor}
                        keepBorder={1}
                    />
                </Grid>
                <Grid item>
                    <GridTowerContainer
                        towers={magic}
                        title="Magic"
                        backgroundColor={siteColors.monkeyType.magic.grid}
                        titleColor={magicColor}
                        keepBorder={1}
                    />
                </Grid>
                <Grid item>
                    <GridTowerContainer
                        towers={support}
                        title="Support"
                        backgroundColor={siteColors.monkeyType.support.grid}
                        titleColor={supportColor}
                        keepBorder={1}
                    />
                </Grid>
            </Grid>
        </>
    );
}
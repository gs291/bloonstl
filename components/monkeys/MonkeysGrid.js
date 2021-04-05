import styled from "@emotion/styled";
import {Grid} from "@material-ui/core";
import {useSelector} from "react-redux";

import GridItems from "../grid/GridItems";
import GridTitle from "../grid/GridTitle";
import TowerCard from "../tower/TowerCard";
import {getMonkeyTypeColor} from "../../lib/utils";
import {getMobile} from "../../lib/redux/selectors";


export default function MonkeysGrid({ primary, military, magic, support }) {
    const mobile = useSelector(getMobile);

    let gridSpacing = 3;
    if (mobile) {
        gridSpacing = 6;
    }

    const primaryColor = getMonkeyTypeColor("Primary");
    const militaryColor = getMonkeyTypeColor("Military");
    const magicColor = getMonkeyTypeColor("Magic");
    const supportColor = getMonkeyTypeColor("Support");

    return (
        <>
            <Grid direction="column" container spacing={2}>
                <GridTitle backgroundColor={primaryColor}>
                    Primary
                </GridTitle>
                <GridItems borderColor={primaryColor}>
                    <Grid container spacing={2}>
                        { primary.map(monkey => (
                            <Grid xs={gridSpacing} item key={monkey.id}>
                                <TowerCard tower={monkey} towerType="monkey" keepBorder={1}/>
                            </Grid>
                            )
                        )}
                    </Grid>
                </GridItems>
                <GridTitle backgroundColor={militaryColor}>
                    Military
                </GridTitle>
                <GridItems borderColor={militaryColor}>
                    <Grid container spacing={2}>
                        { military.map(monkey => (
                                <Grid xs={gridSpacing} item key={monkey.id}>
                                    <TowerCard tower={monkey} towerType="monkey" keepBorder={1}/>
                                </Grid>
                            )
                        )}
                    </Grid>
                </GridItems>
                <GridTitle backgroundColor={magicColor}>
                    Magic
                </GridTitle>
                <GridItems borderColor={magicColor}>
                    <Grid container spacing={2}>
                        { magic.map(monkey => (
                                <Grid xs={gridSpacing} item key={monkey.id}>
                                    <TowerCard tower={monkey} towerType="monkey" keepBorder={1}/>
                                </Grid>
                            )
                        )}
                    </Grid>
                </GridItems>
                <GridTitle backgroundColor={supportColor}>
                    Support
                </GridTitle>
                <GridItems borderColor={supportColor}>
                    <Grid container spacing={2}>
                        { support.map(monkey => (
                                <Grid xs={gridSpacing} item key={monkey.id}>
                                    <TowerCard tower={monkey} towerType="monkey" keepBorder={1}/>
                                </Grid>
                            )
                        )}
                    </Grid>
                </GridItems>
            </Grid>
        </>
    );
}
import styled from "@emotion/styled";
import {Grid} from "@material-ui/core";
import {useSelector} from "react-redux";

import TowerCard from "../tower/TowerCard";
import {getMonkeyTypeColor} from "../../lib/utils";
import {getMobile} from "../../lib/redux/selectors";


const GridItem = styled(Grid)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const MonkeyType = styled(Grid)`
  padding-top: 5px;
  padding-bottom: 5px;
  
  background-color: ${props => getMonkeyTypeColor(props.type)
};
  color: #000;
`;



export default function MonkeysGrid({ primary, military, magic, support }) {
    const mobile = useSelector(getMobile);

    let gridSpacing = 3;
    if (mobile) {
        gridSpacing = 6;
    }

    return (
        <>
            <Grid direction="column" container spacing={2}>
                <MonkeyType type="Primary" item>
                    Primary
                </MonkeyType>
                <GridItem item>
                    <Grid container spacing={2}>
                        { primary.map(monkey => (
                            <Grid xs={gridSpacing} item key={monkey.id}>
                                <TowerCard tower={monkey} towerType="monkey"/>
                            </Grid>
                            )
                        )}
                    </Grid>
                </GridItem>
                <MonkeyType type="Military" item>
                    Military
                </MonkeyType>
                <GridItem item>
                    <Grid container spacing={2}>
                        { military.map(monkey => (
                                <Grid xs={gridSpacing} item key={monkey.id}>
                                    <TowerCard tower={monkey} towerType="monkey"/>
                                </Grid>
                            )
                        )}
                    </Grid>
                </GridItem>
                <MonkeyType type="Magic" item>
                    Magic
                </MonkeyType>
                <GridItem item>
                    <Grid container spacing={2}>
                        { magic.map(monkey => (
                                <Grid xs={gridSpacing} item key={monkey.id}>
                                    <TowerCard tower={monkey} towerType="monkey"/>
                                </Grid>
                            )
                        )}
                    </Grid>
                </GridItem>
                <MonkeyType name="Support" item>
                    Support
                </MonkeyType>
                <GridItem item>
                    <Grid container spacing={2}>
                        { support.map(monkey => (
                                <Grid xs={gridSpacing} item key={monkey.id}>
                                    <TowerCard tower={monkey} towerType="monkey"/>
                                </Grid>
                            )
                        )}
                    </Grid>
                </GridItem>
            </Grid>
        </>
    );
}
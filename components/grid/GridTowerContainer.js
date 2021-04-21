import styled from "@emotion/styled";
import {Grid} from "@material-ui/core";
import {useSelector} from "react-redux";

import GridTitle from "./GridTitle";
import GridItems from "./GridItems";
import TowerCard from "../tower/TowerCard";
import {hexToRgb} from "../../lib/utils/utils";
import {getDarkMode, getMobile} from "../../lib/redux/selectors";


const TowerGrid = styled(Grid)`
  border-radius: 20px;
  border: 6px solid rgba(${props => hexToRgb(props["data-tc"])}, ${props => props["data-dm"] ? 0.75 : 1});
`;


export default function GridTowerContainer({towers, title, rank, backgroundColor, titleColor, ignoreFilter, }) {
    const mobile = useSelector(getMobile);
    const darkMode = useSelector(getDarkMode);

    let gridSpacing = 4;
    if (mobile) {
        gridSpacing = 6;
    }

    return (
        <>
            <TowerGrid container direction="column" data-tc={titleColor} data-bc={backgroundColor} data-dm={darkMode}>
                <GridTitle backgroundColor={titleColor}>
                    {title}
                </GridTitle>
                <GridItems backgroundColor={backgroundColor} borderColor={titleColor}>
                    <Grid container spacing={1}>
                        {towers.map(tower => (
                            <Grid xs={gridSpacing} item key={tower.id}>
                                <TowerCard tower={tower}
                                           towerType={typeof tower.cost_cash === "number" ? "hero" : "monkey"}
                                           rank={rank} ignoreFilter={ignoreFilter}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </GridItems>
            </TowerGrid>
        </>
    );
}
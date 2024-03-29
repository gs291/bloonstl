import {Grid} from "@mui/material";
import {useSelector} from "react-redux";
import {styled} from "@mui/material/styles";

import GridTitle from "./GridTitle";
import GridItems from "./GridItems";
import TowerCard from "../tower/TowerCard";
import EnemyCard from "../enemy/EnemyCard";
import {rgbaHex} from "../../lib/utils/utils";
import {getMobile} from "../../lib/redux/selectors";
import {globalOptions} from "../../lib/utils/emotionStyled";


const TowerGrid = styled(Grid, globalOptions)`
  border-radius: 20px;
  border: 6px solid ${props => rgbaHex(props["data-tc"], props.theme.palette.mode === "dark" ? 0.75 : 1)};
  box-shadow: 10px 10px 10px ${props => props["data-bc"]};
`;

/**
 * Grid to show the supplied towers
 *
 * @param {Object} props Component props
 * @param {Array<Object>} props.towers Array list of the towers to be applied in the grid
 * @param {string} props.title Text to be set in the title
 * @param {string} props.backgroundColor Color to be applied to the grid
 * @param {string} props.titleColor Color to be applied to the title
 * @param {number} props.ignoreFilter Shows if the filters should be ignored
 */
export default function GridTowerContainer({towers, title, backgroundColor, titleColor, ignoreFilter, type="tower"}) {
    const mobile = useSelector(getMobile);

    let gridSpacing = 4;
    if (mobile) {
        gridSpacing = 6;
    }

    return (
        <>
            <TowerGrid container direction="column" data-tc={titleColor} data-bc={backgroundColor}>
                <GridTitle backgroundColor={titleColor}>
                    {title}
                </GridTitle>
                <GridItems backgroundColor={backgroundColor} borderColor={titleColor}>
                    <Grid container spacing={1}>
                        {type === "bloon" ? (
                            <>
                                {towers.bloons.map(bloon => (
                                    <Grid xs={gridSpacing} item key={bloon.id}>
                                        <EnemyCard enemy={bloon} type="grid" ignoreFilter={ignoreFilter} />
                                    </Grid>
                                ))}
                                {towers.bosses.filter(boss => boss.type === 0).map(boss => (
                                    <Grid xs={gridSpacing} item key={boss.id}>
                                        <EnemyCard enemy={boss} type="grid" ignoreFilter={ignoreFilter} />
                                    </Grid>
                                ))}
                            </>
                        ) : (
                            <>
                                {towers.map(tower => (
                                    <Grid xs={gridSpacing} item key={tower.id}>
                                        <TowerCard tower={tower}
                                                   towerType={typeof tower.cost_cash === "number" ? "hero" : "monkey"}
                                                   ignoreFilter={ignoreFilter}
                                        />
                                    </Grid>
                                ))}
                            </>
                        )}

                    </Grid>
                </GridItems>
            </TowerGrid>
        </>
    );
}
import styled from "@emotion/styled";
import {Grid} from "@material-ui/core";
import {useSelector} from "react-redux";

import GridTitle from "./GridTitle";
import GridItems from "./GridItems";
import TowerCard from "../tower/TowerCard";
import {getMobile} from "../../lib/redux/selectors";


const TowerGrid = styled(Grid)`
  border-radius: 20px;
  background-color: ${props => props["data-tc"]};
  border: 6px solid ${props => props["data-tc"]};
  filter: drop-shadow(5px 5px 5px ${props => props["data-bc"]});
  transition: 0.3s;
  
  &:hover {
    filter: drop-shadow(10px 10px 5px ${props => props["data-bc"]});
  }
`;


export default function GridTowerContainer({towers, title, rank, backgroundColor, titleColor, keepBorder}) {
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
                        {towers.map(tower => (
                            <Grid xs={gridSpacing} item key={tower.id}>
                                <TowerCard tower={tower}
                                           towerType={typeof tower.cost_cash === "number" ? "hero" : "monkey"}
                                           rank={rank} keepBorder={keepBorder}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </GridItems>
            </TowerGrid>
        </>
    );
}
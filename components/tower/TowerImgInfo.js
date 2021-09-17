import styled from "@emotion/styled";
import {Grid} from "@material-ui/core";
import {useSelector} from "react-redux";

import Icon from "../tower/Icon";
import TowerInfo from "./TowerInfo";
import {getMobile} from "../../lib/redux/selectors";
import VerticalDivider from "../divider/VerticalDivider";
import {getHeroColor, getMonkeyColor} from "../../lib/utils/utils";

const TowerContainer = styled(Grid)`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export default function TowerImgInfo({tower, towerType}) {
    const mobile = useSelector(getMobile);
    let backgroundColor, gridSpacing = 5;

    if (mobile) {
        gridSpacing = 12
    }

    if (towerType === "monkey") {
        backgroundColor = getMonkeyColor(tower.type);
    } else if (towerType === "hero") {
        backgroundColor = getHeroColor(tower.name);
    }

    return (
        <>
            <TowerContainer container
                            spacing={2}
                            justifyContent="center"
                            direction={mobile ? "column" : "row"}
                            alignItems="center"
            >
                <Grid item xs={gridSpacing}>
                    <Icon tower={tower} />
                </Grid>
                { !mobile && (<VerticalDivider backgroundColor={backgroundColor} />)}
                <Grid item xs={gridSpacing}>
                    <TowerInfo tower={tower}/>
                </Grid>
            </TowerContainer>
        </>
    );
}
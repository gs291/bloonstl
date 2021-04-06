import styled from "@emotion/styled";
import {Grid} from "@material-ui/core";
import {useSelector} from "react-redux";

import Icon from "../tower/Icon";
import TowerInfo from "./TowerInfo";
import {getMobile} from "../../lib/redux/selectors";
import VerticalDivider from "../divider/VerticalDivider";
import {getHeroColor, getMonkeyTypeColor} from "../../lib/utils/utils";

const TowerContainer = styled(Grid)`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export default function TowerImgInfo({tower, towerType}) {
    const mobile = useSelector(getMobile);
    let backgroundColor;

    if (towerType === "monkey") {
        backgroundColor = getMonkeyTypeColor(tower.type);
    } else if (towerType === "hero") {
        backgroundColor = getHeroColor(tower.name);
    }

    return (
        <>
            <TowerContainer container
                            spacing={2}
                            justify="center"
                            direction={mobile ? "column" : "row"}
                            alignItems="center"
            >
                <Grid item xs={mobile ? 6 : 4}>
                    <Icon tower={ tower } />
                </Grid>
                { !mobile && (<VerticalDivider backgroundColor={ backgroundColor } />)}
                <Grid item xs={mobile ? 6 : 4}>
                    <TowerInfo tower={ tower }/>
                </Grid>
            </TowerContainer>
        </>
    );
}
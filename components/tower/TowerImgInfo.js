import styled from "@emotion/styled";
import {Grid} from "@material-ui/core";
import {useSelector} from "react-redux";

import Icon from "../tower/Icon";
import TowerInfo from "./TowerInfo";
import {getMobile} from "../../lib/redux/selectors";
import VerticalDivider from "../divider/VerticalDivider";
import {getHeroColor, getMonkeyTypeColor} from "../../lib/utils/utils";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function TowerContainer({tower, towerType}) {
    const mobile = useSelector(getMobile);
    let backgroundColor;

    if (towerType === "monkey") {
        backgroundColor = getMonkeyTypeColor(tower.type, true);
    } else if (towerType === "hero") {
        backgroundColor = getHeroColor(tower.name, true);
    }

    return (
        <>
            <Grid container
                  spacing={2}
                  justify="center"
                  direction="row"
            >
                <Grid item xs={4}>
                    <Icon tower={ tower } />
                </Grid>
                <VerticalDivider backgroundColor={ backgroundColor } />
                <Grid item xs={4}>
                    <TowerInfo tower={ tower }/>
                </Grid>
            </Grid>
        </>
    );
}
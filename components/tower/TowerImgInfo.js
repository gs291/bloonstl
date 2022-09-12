import {Grid} from "@mui/material";
import {useSelector} from "react-redux";
import {styled} from "@mui/material/styles";
import {useTheme} from "@mui/material/styles";

import Icon from "../tower/Icon";
import TowerInfo from "./TowerInfo";
import {getMobile} from "../../lib/redux/selectors";
import VerticalDivider from "../divider/VerticalDivider";
import {getHeroColor, getMonkeyColor} from "../../lib/utils/utils";


const TowerContainer = styled(Grid)`
  margin-top: 10px;
  margin-bottom: 10px;
`;

/**
 * Individual tower image and information component
 *
 * @param {Object} props Component props
 * @param {Object} props.tower Object containing the tower
 * @param {string} props.towerType Shows if the tower is a monkey or hero
 */
export default function TowerImgInfo({tower, towerType}) {
    const theme = useTheme();
    const mobile = useSelector(getMobile);
    let backgroundColor, gridSpacing = 5;

    if (mobile) {
        gridSpacing = 12
    }

    if (towerType === "monkey") {
        backgroundColor = getMonkeyColor(tower.type, theme);
    } else if (towerType === "hero") {
        backgroundColor = getHeroColor(tower.name, theme);
    }

    return (
        <>
            <TowerContainer
                container
                spacing={2}
                justifyContent="center"
                direction={mobile ? "column" : "row"}
                alignItems="center"
            >
                <Grid item xs={gridSpacing}>
                    <Icon tower={tower} towerType={towerType} priority={true} />
                </Grid>
                { !mobile && (<VerticalDivider backgroundColor={backgroundColor} />)}
                <Grid item xs={gridSpacing}>
                    <TowerInfo tower={tower}/>
                </Grid>
            </TowerContainer>
        </>
    );
}
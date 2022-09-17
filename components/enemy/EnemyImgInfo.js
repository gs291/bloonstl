import {Grid} from "@mui/material";
import {useSelector} from "react-redux";
import {styled} from "@mui/material/styles";
import {useTheme} from "@mui/material/styles";

import Icon from "../tower/Icon";
import EnemyInfo from "./EnemyInfo";
import {getMobile} from "../../lib/redux/selectors";
import VerticalDivider from "../divider/VerticalDivider";


const BloonContainer = styled(Grid)`
  margin-top: 10px;
  margin-bottom: 10px;
`;

/**
 * Individual enemy image and information component
 *
 * @param {Object} props Component props
 * @param {Object} props.enemy Object containing the enemy
 */
export default function EnemyImgInfo({enemy}) {
    const theme = useTheme();
    const mobile = useSelector(getMobile);
    let gridSpacing = 5;
    const backgroundColor = theme.palette.bloon[enemy.varName].color;

        if (mobile) {
        gridSpacing = 12
    }

    return (
        <>
            <BloonContainer
                container
                spacing={2}
                justifyContent="center"
                direction={mobile ? "column" : "row"}
                alignItems="center"
            >
                <Grid item xs={gridSpacing}>
                    <Icon tower={{name: enemy.name, filename: `${enemy.varName}.png`}} towerType="monkey" priority={true} />
                </Grid>
                { !mobile && (<VerticalDivider backgroundColor={backgroundColor} />)}
                <Grid item xs={gridSpacing}>
                    <EnemyInfo enemy={enemy}/>
                </Grid>
            </BloonContainer>
        </>
    );
}
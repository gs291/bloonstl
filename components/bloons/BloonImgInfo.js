import {Grid} from "@mui/material";
import {useSelector} from "react-redux";
import {styled} from "@mui/material/styles";
import {useTheme} from "@mui/material/styles";

import Icon from "../tower/Icon";
import BloonInfo from "./BloonInfo";
import {getMobile} from "../../lib/redux/selectors";
import VerticalDivider from "../divider/VerticalDivider";


const BloonContainer = styled(Grid)`
  margin-top: 10px;
  margin-bottom: 10px;
`;

/**
 * Individual bloon image and information component
 *
 * @param {Object} props Component props
 * @param {Object} props.tower Object containing the tower
 * @param {string} props.towerType Shows if the tower is a monkey or hero
 */
export default function BloonImgInfo({bloon}) {
    const theme = useTheme();
    const mobile = useSelector(getMobile);
    let gridSpacing = 5;
    const backgroundColor = theme.palette.tier.s.color;

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
                    <Icon tower={{name: bloon.name, filename: `${bloon.varName}.png`}} towerType="monkey" priority={true} />
                </Grid>
                { !mobile && (<VerticalDivider backgroundColor={backgroundColor} />)}
                <Grid item xs={gridSpacing}>
                    <BloonInfo bloon={bloon}/>
                </Grid>
            </BloonContainer>
        </>
    );
}
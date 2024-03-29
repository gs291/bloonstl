import {styled} from "@mui/material/styles";
import {useTheme} from "@mui/material/styles";

import TowerText from "../tower/TowerText";
import {rgbaHex} from "../../lib/utils/utils";
import {globalOptions} from "../../lib/utils/emotionStyled";


const LegendContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
`;

const ColorContainer = styled("div")`
  display: flex;
  flex-direction: row;
  gap: 10px;
  flex-wrap: wrap;
`;

const ColorItem = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ColorText = styled(TowerText)`
  margin-left: 5px;
`;

const ColorLegend = styled("div", globalOptions)`
  width: 7.5px;
  height: 7.5px;
  border-radius: 50%;
  background-color: ${props => props["data-t"] === "green" ? props.theme.palette.stats.pros : props.theme.palette.stats.cons };
`;


/**
 * The small use case stat wrapper for specific statistics
 *
 * @param {Object} props Component props
 * @param {Object|number} props.path Shows the current ability/level path
 * @param {string} props.towerType Shows if the tower is a monkey or hero
 */
export default function StatsLegend({path, towerType}) {
    const theme = useTheme();

    return (
        <>
            <LegendContainer>
                <div>
                    <TowerText variant="caption" font={true} textColor={rgbaHex(theme.palette.text.primary, 0.5)} >
                        *Stats modified by
                        {towerType === "hero" ? " path level" : " ability path"}
                        :
                        &nbsp;
                        {towerType === "hero" ? (path+1) : `${path.top_path}-${path.middle_path}-${path.bottom_path}`}
                        *
                    </TowerText>
                </div>
                <ColorContainer>
                    <ColorItem>
                        <ColorLegend data-t="green" />
                        <ColorText variant="caption" font={true} textColor={rgbaHex(theme.palette.text.primary, 0.5)} >
                            = Stat Upgraded
                        </ColorText>
                    </ColorItem>
                    <ColorItem>
                        <ColorLegend data-t="red" />
                        <ColorText variant="caption" font={true} textColor={rgbaHex(theme.palette.text.primary, 0.5)} >
                            = Stat Downgraded
                        </ColorText>
                    </ColorItem>
                </ColorContainer>
            </LegendContainer>
        </>
    );
}
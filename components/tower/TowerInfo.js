import {useSelector} from "react-redux";
import {styled} from "@mui/material/styles";
import {useTheme} from "@mui/material/styles";

import Counter from "./Counter";
import TowerText from "./TowerText";
import {getMobile} from "../../lib/redux/selectors";
import {getThousandsNumber, rgbaHex} from "../../lib/utils/utils";


const TowerTextContainer = styled("div")`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const TierCostContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TowerCosts = styled("div")`
  margin-top:  ${props => props["data-m"] ? 10 : 20}px;
  margin-left: ${props => props["data-m"] ? 0 : "20px"};
  flex: 66%;
`;

/**
 * Full individual tower information component
 *
 * @param {Object} props Component props
 * @param {Object} props.tower Object containing the tower
 */
export default function TowerInfo({tower}) {
    const theme = useTheme();
    const mobile = useSelector(getMobile);

    return (
        <>
            <TowerTextContainer>
                <TowerText variant={mobile ? "h3" : "h2"} component="h1">
                    {tower.name}
                </TowerText>
                <TowerText variant="subtitle1" textColor={rgbaHex(theme.palette.text.primary, 0.5)} font={true}  component="h2">
                    {tower.description}
                </TowerText>
                <TierCostContainer data-m={mobile}>
                    <TowerCosts data-m={mobile}>
                        <TowerText variant={mobile ? "h5" : "h6"} textColor={theme.palette.text.gold}>
                            In-game cost:&nbsp;$<Counter cost={tower.cost_gold} />
                        </TowerText>
                        { typeof tower.cost_cash === "number" && (
                            <TowerText variant={mobile ? "h5" : "h6"} textColor={theme.palette.text.cash}>
                                Cash cost: {tower.cost_cash > 0 ? `\$${getThousandsNumber(tower.cost_cash)}` : "FREE"}
                            </TowerText>
                        )}
                    </TowerCosts>
                </TierCostContainer>
            </TowerTextContainer>
        </>
    );
}
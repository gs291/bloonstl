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
  margin-top:  ${props => props["data-m"] ? 10 : 20}px;
`;

const TowerCosts = styled("div")``;

const DefaultText = styled(TowerText)`
  cursor: default;
`;

const NameText = styled(DefaultText)`
  margin-bottom: 10px;
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
                <NameText variant={mobile ? "h3" : "h2"} component="h1">
                    {tower.name}
                </NameText>
                <TowerText variant={mobile ? "h6" : "h5"} textColor={rgbaHex(theme.palette.text.primary, 0.5)} font={true}  component="h2">
                    {tower.description}
                </TowerText>
                <TierCostContainer data-m={mobile}>
                    <TowerCosts data-m={mobile}>
                        <DefaultText variant={mobile ? "h6" : "h5"} textColor={theme.palette.text.gold}>
                            In-game cost:&nbsp;$<Counter cost={tower.cost_gold} />
                        </DefaultText>
                        { typeof tower.cost_cash === "number" && (
                            <DefaultText variant={mobile ? "h6" : "h5"} textColor={theme.palette.text.cash}>
                                Cash cost: {tower.cost_cash > 0 ? `\$${getThousandsNumber(tower.cost_cash)}` : "FREE"}
                            </DefaultText>
                        )}
                    </TowerCosts>
                </TierCostContainer>
            </TowerTextContainer>
        </>
    );
}
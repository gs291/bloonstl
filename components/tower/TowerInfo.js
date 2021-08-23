import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import Counter from "./Counter";
import TowerText from "./TowerText";
import TierTitle from "./TierTitle";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode, getMobile} from "../../lib/redux/selectors";
import {getThousandsNumber, rgbaHex} from "../../lib/utils/utils";

const TowerTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const TierCostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TowerTier = styled(TierTitle)`
  flex: 33%;
`;

const TowerCosts = styled.div`
  margin-left: ${props => props["data-m"] ? 0 : "20px"};
  flex: 66%;
`;

export default function TowerInfo({tower}) {
    const mobile = useSelector(getMobile);
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <TowerTextContainer>
                <TowerText variant={"h2"} component="div">
                    {tower.name}
                </TowerText>
                <TowerText variant="body1" textColor={rgbaHex(darkMode ? siteColors.text.dark: siteColors.text.light, 0.5)} font={1}>
                    {tower.description}
                </TowerText>
                <TierCostContainer data-m={mobile}>
                    <TowerTier tier={tower.tier} showText={true}/>
                    <TowerCosts data-m={mobile}>
                        <TowerText variant="body1" textColor={darkMode ? siteColors.tower.gold.dark : siteColors.tower.gold.light}>
                            In-game cost:&nbsp;$<Counter cost={tower.cost_gold} />
                        </TowerText>
                        { typeof tower.cost_cash === "number" && (
                            <TowerText variant="body1" textColor={darkMode ? siteColors.tower.cash.dark : siteColors.tower.cash.light}>
                                Cash cost: {tower.cost_cash > 0 ? `\$${getThousandsNumber(tower.cost_cash)}` : "FREE"}
                            </TowerText>
                        )}
                    </TowerCosts>
                </TierCostContainer>
            </TowerTextContainer>
        </>
    );
}
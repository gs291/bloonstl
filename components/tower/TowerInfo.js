import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import Counter from "./Counter";
import TowerText from "./TowerText";
import RankTitle from "./RankTitle";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";
import {getThousandsNumber, rgbaHex} from "../../lib/utils/utils";

const TowerTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const RankCostContainer = styled.div`
  display: flex;
`;

export default function TowerInfo({tower}) {
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <TowerTextContainer>
                <TowerText variant={"h2"}>
                    {tower.name}
                </TowerText>
                <TowerText variant="body1" textColor={rgbaHex(darkMode ? siteColors.text.dark: siteColors.text.light, 0.5)} font={1}>
                    {tower.description}
                </TowerText>
                <RankCostContainer>
                    <RankTitle rank={tower.tier} />
                    <div>
                        <TowerText variant="body2" textColor={siteColors.tower.gold}>
                            In-game cost:&nbsp;$<Counter cost={tower.cost_gold} />
                        </TowerText>
                        { typeof tower.cost_cash === "number" && (
                            <TowerText variant="body2" textColor={siteColors.tower.cash}>
                                Cash cost: {tower.cost_cash > 0 ? `\$${getThousandsNumber(tower.cost_cash)}` : "FREE"}
                            </TowerText>
                        )}
                    </div>
                </RankCostContainer>
            </TowerTextContainer>
        </>
    );
}
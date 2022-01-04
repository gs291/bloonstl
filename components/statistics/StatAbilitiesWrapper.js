import {useSelector} from "react-redux";
import styled from "@emotion/styled";

import TowerText from "../tower/TowerText";
import StatsAbilities from "./StatsAbilities";
import FixedDivider from "../divider/FixedDivider";
import {getMobile} from "../../lib/redux/selectors";

const Title = styled(TowerText)`
  margin-top: 10px;
  margin-bottom: 30px;
  text-align: center;
  cursor: default;
`;

const TitleOnTop = styled(TowerText)`
  margin-top: 10px;
  text-align: center;
  cursor: default;
`;

export default function StatAbilitiesWrapper({stats, towerType, type, dividerBackgroundColor}) {
    const mobile = useSelector(getMobile);

    return (
        <>
            {stats && ((Object.keys(stats.abils).length > 0
                || Object.keys(stats.attacks).length > 0
                || Object.keys(stats.buffs).length > 0
                || Object.keys(stats.statuses).length > 0)) && (
                <>
                    <FixedDivider width={100} backgroundColor={dividerBackgroundColor}/>
                    <TitleOnTop variant={mobile ? "h5" : "h4"}>
                        Ability Path
                    </TitleOnTop>
                    <Title variant={mobile ? "h5" : "h4"}>
                        Abilities / Attacks / Buffs / Statuses
                    </Title>
                    <StatsAbilities stats={stats} towerType={towerType} type={type}/>
                </>
            )}
        </>
    );
}
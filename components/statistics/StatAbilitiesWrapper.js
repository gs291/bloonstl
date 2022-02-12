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

/**
 * Ability statistics wrapper
 *
 * @param {Object} props Component props
 * @param {Object} props.stats Object containing data on all the statistics for a tower
 * @param {string} props.type Shows the Hero name or monkey type
 * @param {string} props.towerType Shows if the tower is a monkey or hero
 * @param {string} props.dividerBackgroundColor Color to set the divider
 */
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
                    <TitleOnTop variant={mobile ? "h4" : "h3"}>
                        Ability Path
                    </TitleOnTop>
                    <Title variant={mobile ? "h6" : "h5"}>
                        Abilities / Attacks / Buffs / Statuses
                    </Title>
                    <StatsAbilities stats={stats} towerType={towerType} type={type}/>
                </>
            )}
        </>
    );
}
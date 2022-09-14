import {useSelector} from "react-redux";
import {styled} from "@mui/material/styles";

import TowerText from "../tower/TowerText";
import StatsAbilities from "./StatsAbilities";
import FixedDivider from "../divider/FixedDivider";
import {getMobile} from "../../lib/redux/selectors";


const Title = styled(TowerText)`
  margin-top: 10px;
  margin-bottom: 30px;
  text-align: center;
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
                    <TitleOnTop variant={mobile ? "h3" : "h2"}>
                        Ability Path
                    </TitleOnTop>
                    <Title variant={mobile ? "h6" : "h5"} font>
                        Abilities / Attacks / Buffs / Statuses
                    </Title>
                    <StatsAbilities stats={stats} towerType={towerType} type={type}/>
                </>
            )}
        </>
    );
}
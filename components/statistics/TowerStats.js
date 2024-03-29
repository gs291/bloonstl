import {useSelector} from "react-redux";
import {styled} from "@mui/material/styles";
import {useTheme} from "@mui/material/styles";

import StatsContainer from "./StatsContainer";
import StatItemWrapper from "./StatItemWrapper";
import {getMobile} from "../../lib/redux/selectors";
import {globalOptions} from "../../lib/utils/emotionStyled";
import {getHeroColor, getMonkeyColor} from "../../lib/utils/utils";


const ItemsContainer = styled("div", globalOptions)`
  width: ${props => props["data-m"] ? 100 : 100}%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

/**
 * The main tower stats component
 *
 * @param {Object} props Component props
 * @param {Object} props.stats Object containing ALL the stats of the tower
 * @param {Object} props.defaults Object containing ALL the default stats of the tower
 * @param {string} props.type Shows the Hero name or monkey type
 * @param {string} props.towerType Shows if the tower is a monkey or hero
 */
export default function TowerStats({stats, defaults, type, towerType, ...rest}) {
    const theme = useTheme();
    const mobile = useSelector(getMobile);
    const color = towerType === "hero" ? getHeroColor(type, theme) : getMonkeyColor(type, theme);

    return (
        <>
            <StatsContainer title="Tower Stats" direction="column" type={type} towerType={towerType}>
                <ItemsContainer data-m={mobile}>
                    <StatItemWrapper text="Damage" value={stats.damage} prevValue={defaults.damage} data-s={color} />
                    <StatItemWrapper text="Pierce" value={stats.pierce} prevValue={defaults.pierce} data-s={color} />
                    <StatItemWrapper text="Range" value={stats.range} prevValue={defaults.range} data-s={color} />
                    <StatItemWrapper text="Atk Spd" value={stats.attack_speed} prevValue={defaults.attack_speed} data-s={color} />
                    <StatItemWrapper text="Proj" value={stats.projectile_count} prevValue={defaults.projectile_count} data-s={color} />
                    <StatItemWrapper text="Type" value={stats.damage_type} prevValue={defaults.damage_type} data-s={color} />
                </ItemsContainer>
            </StatsContainer>
        </>
    );
}
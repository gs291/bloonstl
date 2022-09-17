import {useSelector} from "react-redux";
import {styled} from "@mui/material/styles";
import {useTheme} from "@mui/material/styles";

import StatsContainer from "./StatsContainer";
import StatItemWrapper from "./StatItemWrapper";
import {getMobile} from "../../lib/redux/selectors";
import {globalOptions} from "../../lib/utils/emotionStyled";


const ItemsContainer = styled("div", globalOptions)`
  width: ${props => props["data-m"] ? 100 : 100}%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

/**
 * The main enemy stats component
 *
 * @param {Object} props Component props
 * @param {Object} props.enemy Object containing the enemy stats
 */
export default function EnemyStats({enemy, tier, ...rest}) {
    const theme = useTheme();
    const mobile = useSelector(getMobile);
    const color = theme.palette.bloon[enemy.varName].color;

    const type = typeof enemy.type === "number" ? "boss" : "bloon";

    const rbe = parseInt(type === "bloon" ? enemy.rbe : (enemy.rbe !== null ? enemy.rbe[tier] : '0'));
    const hp = parseInt(type === "bloon" ? enemy.hp : (enemy.hp !== null ? enemy.hp[tier] : '0'));
    const speed = parseFloat(type === "bloon" ? enemy.speed : (enemy.speed !== null ? enemy.speed[tier] : '0'));

    return (
        <>
            <StatsContainer title="Bloon Stats" direction="column">
                <ItemsContainer data-m={mobile}>
                    <StatItemWrapper text="RBE" value={rbe} prevValue={rbe} data-s={color} />
                    <StatItemWrapper text="HP" value={hp} prevValue={hp} data-s={color} />
                    <StatItemWrapper text="Speed" value={speed} prevValue={speed} data-s={color} />
                </ItemsContainer>
            </StatsContainer>
        </>
    );
}
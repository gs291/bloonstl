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
 * The main bloon stats component
 *
 * @param {Object} props Component props
 * @param {Object} props.bloon Object containing the bloon stats
 */
export default function BloonStats({bloon, tier, ...rest}) {
    const theme = useTheme();
    const mobile = useSelector(getMobile);
    const color = theme.palette.bloon[bloon.varName].color;

    const type = typeof bloon.type === "number" ? "boss" : "bloon";

    const rbe = parseInt(type === "bloon" ? bloon.rbe : (bloon.rbe !== null ? bloon.rbe[tier] : '0'));
    const hp = parseInt(type === "bloon" ? bloon.hp : (bloon.hp !== null ? bloon.hp[tier] : '0'));
    const speed = parseFloat(type === "bloon" ? bloon.speed : (bloon.speed !== null ? bloon.speed[tier] : '0'));

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
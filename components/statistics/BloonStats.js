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
 * The main tower stats component
 *
 * @param {Object} props Component props
 * @param {Object} props.bloon Object containing ALL the stats of the tower
 */
export default function BloonStats({bloon, ...rest}) {
    const theme = useTheme();
    const mobile = useSelector(getMobile);
    const color = theme.palette.tier.s.color;

    return (
        <>
            <StatsContainer title="Bloon Stats" direction="column">
                <ItemsContainer data-m={mobile}>
                    <StatItemWrapper text="RBE" value={bloon.rbe} prevValue={bloon.rbe} data-s={color} />
                    <StatItemWrapper text="HP" value={bloon.hp} prevValue={bloon.hp} data-s={color} />
                    <StatItemWrapper text="Speed" value={bloon.speed} prevValue={bloon.speed} data-s={color} />
                </ItemsContainer>
            </StatsContainer>
        </>
    );
}
import {useSelector} from "react-redux";
import {styled} from "@mui/material/styles";

import BossSpecialItem from "./BossSpecialItem";
import {getMobile} from "../../lib/redux/selectors";

const BossSpecialComponent = styled("div")`
  display: flex;
  flex-direction: ${props => props["data-m"] ? "column" : "row"};
  gap: 15px;
  width: 100%;
`;



/**
 * The Bloon (boss) component for its special move
 *
 * @param {Object} props Component props
 * @param {Object} props.special Object containing the special move for the boss
 * @param {Object} props.tier The boss tier level
 */
export default function BossSpecial({special, tier}) {
    const mobile = useSelector(getMobile);

    console.log("yo", special);
    return (
        <>
            <BossSpecialComponent data-m={mobile}>
                <BossSpecialItem title={special.name[0]} value={special.rbe[tier]} />
                <BossSpecialItem title={special.name[1]} value={special.hp[tier]} />
            </BossSpecialComponent>
        </>
    );
}
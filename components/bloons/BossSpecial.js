import {useSelector} from "react-redux";
import {styled} from "@mui/material/styles";

import {getMobile} from "../../lib/redux/selectors";
import {parseBossSpecial} from "../../lib/utils/utils";

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
 * @param {Object} props.bloon Object containing the boss
 */
export default function BossSpecial({special}) {
    const mobile = useSelector(getMobile);

    const parsedSpecial = parseBossSpecial(special);

    return (
        <>
            <BossSpecialComponent data-m={mobile}>

            </BossSpecialComponent>
        </>
    );
}
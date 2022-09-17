import {useSelector} from "react-redux";
import {styled} from "@mui/material/styles";

import TowerText from "../tower/TowerText";
import {getMobile} from "../../lib/redux/selectors";
import {parseBossSpecial} from "../../lib/utils/utils";


const ItemContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 100%;
`;

const SpecialTitle = styled(TowerText)`
  border-bottom: 2px solid;
`;

/**
 * The Bloon (boss) component for its special move
 *
 * @param {Object} props Component props
 * @param {string} props.title The title to display for the special move
 * @param {String} props.value The code to parse for the title
 */
export default function BossSpecialItem({title, value}) {
    const mobile = useSelector(getMobile);

    const parsedSpecial = parseBossSpecial(value);

    return (
        <>
            <ItemContainer data-m={mobile}>
                <SpecialTitle variant="h5">
                    {title}
                </SpecialTitle>
                {parsedSpecial.map(value => (
                    <TowerText key={value} variant="h6" font={true}>
                        {value}
                    </TowerText>
                ))}
            </ItemContainer>
        </>
    );
}
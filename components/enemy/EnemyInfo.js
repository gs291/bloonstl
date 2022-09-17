import {useSelector} from "react-redux";
import {styled} from "@mui/material/styles";
import {useTheme} from "@mui/material/styles";

import TowerText from "../tower/TowerText";
import {getMobile} from "../../lib/redux/selectors";


const TowerTextContainer = styled("div")`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const DefaultText = styled(TowerText)`
  cursor: default;
`;

const NameText = styled(DefaultText)`
  margin-bottom: 10px;
`;

/**
 * Full individual enemy information component
 *
 * @param {Object} props Component props
 * @param {Object} props.enemy Object containing the enemy
 */
export default function EnemyInfo({enemy}) {
    const theme = useTheme();
    const mobile = useSelector(getMobile);

    return (
        <>
            <TowerTextContainer>
                <NameText variant={mobile ? "h3" : "h2"} component="h1">
                    {enemy.name}
                </NameText>
            </TowerTextContainer>
        </>
    );
}
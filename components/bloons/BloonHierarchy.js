import {useSelector} from "react-redux";
import {styled} from "@mui/material/styles";

import EnemyCard from "../enemy/EnemyCard";
import TowerText from "../tower/TowerText";
import {getEnemyName} from "../../lib/utils/utils";
import {getMobile} from "../../lib/redux/selectors";
import {globalOptions} from "../../lib/utils/emotionStyled";

const HierarchyContainer = styled("div")`
  display: flex;
  flex-direction: ${props => props["data-m"] ? "column" : "row"};
  gap: 15px;
  width: 100%;
`;

const Spawn = styled("div", globalOptions)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${props => props["data-m"] ? 100 : 50}%;
  padding: 10px 20px;
  border-radius: 20px;
  border: 1px solid ${props => props.theme.palette.bloon[props["data-c"]].color};
`;

const HierarchyText = styled(TowerText)`
  margin-bottom: 20px;
`;

const BloonCardContainer = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const StyledEnemyCard = styled(EnemyCard)`
  width: ${props => props["data-m"] ? 100 : 50}%;
`;

/**
 * The Bloon hierarchy showing the children and parent of the enemy
 *
 * @param {Object} props Component props
 * @param {Object} props.bloon Object containing the enemy
 */
export default function BloonHierarchy({bloon}) {
    const mobile = useSelector(getMobile);

    return (
        <>
            <HierarchyContainer data-m={mobile}>
                <Spawn data-c={bloon.varName} data-m={mobile}>
                    <HierarchyText variant="h4">
                        Children
                    </HierarchyText>
                    <BloonCardContainer>
                        {typeof bloon.children === "string" && bloon.children !== "" && bloon.children.split(',').map(child => {
                            const splitChild = child.split('-');
                            return (
                                <StyledEnemyCard
                                    key={splitChild[0]} data-m={mobile}
                                    enemy={{varName: splitChild[0], name: getEnemyName[splitChild[0]]}}
                                    quantity={parseInt(splitChild[1])}
                                />
                            );
                        })}
                    </BloonCardContainer>
                </Spawn>
                <Spawn data-c={bloon.varName} data-m={mobile}>
                    <HierarchyText variant="h4">
                        Parents
                    </HierarchyText>
                    <BloonCardContainer>
                        {typeof bloon.parent === "string" && bloon.parent !== "" && bloon.parent.split(',').map(parent => {
                            const splitParent = parent.split('-');
                            return (
                                <StyledEnemyCard
                                    key={splitParent[0]} data-m={mobile}
                                    enemy={{varName: splitParent[0], name: getEnemyName[splitParent[0]]}}
                                    quantity={parseInt(splitParent[1])}
                                />
                            );
                        })}
                    </BloonCardContainer>
                </Spawn>
            </HierarchyContainer>
        </>
    );
}
import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import TowerText from "../tower/TowerText";
import FixedDivider from "../divider/FixedDivider";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";
import {parseAbilityModifiers} from "../../lib/utils/utils";

const ModifiersContainer = styled.div`
  margin-top: 5px;
`;

const List = styled.ul`
  padding-left: 20px;
  
  margin-top: 5px;
  margin-bottom: 5px;
`;

const ListItem = styled.li`
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light}
`;

export default function AbilityModifiersTooltip({modifiers, ...rest}) {
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            {modifiers !== "" && (
                <>
                    <FixedDivider />
                    <TowerText variant="h6" >
                        Modifiers
                    </TowerText>
                    <ModifiersContainer {...rest}>
                        <List>
                            {parseAbilityModifiers(modifiers, null, null, true)
                                .map((mod, idx) => (
                                    <ListItem key={idx}  data-dm={darkMode}>
                                        <TowerText key={idx} variant="subtitle2" font={true}>
                                            {mod.text}
                                        </TowerText>

                                        {mod.more && (
                                            <List>
                                                {mod.more.map(extra => (
                                                    <ListItem key={extra.text} data-dm={darkMode}>
                                                        <TowerText variant="caption" font={true}>
                                                            {extra.text}
                                                        </TowerText>
                                                    </ListItem>
                                                ))}
                                            </List>
                                        )}
                                    </ListItem>
                                ))
                            }
                        </List>
                    </ModifiersContainer>
                </>
            )}
        </>
    );
}
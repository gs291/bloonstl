import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import TowerText from "../tower/TowerText";
import StatsContainer from "./StatsContainer";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";

const ListItem = styled.li`
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
`;

export default function StatNotes({notes, ...rest}) {
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <StatsContainer title="Notes" direction="column">
                <ul>
                    {notes.map(note => (
                        <ListItem key={note} data-dm={darkMode}>
                            <TowerText variant="body1" font={true} key={note}>
                                {note}
                            </TowerText>
                        </ListItem>
                    ))}
                </ul>
            </StatsContainer>
        </>
    );
}
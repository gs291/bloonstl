import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import TowerText from "../tower/TowerText";
import siteColors from "../../lib/utils/siteColors";
import {globalOptions} from "../../lib/utils/emotionStyled";
import {getDarkMode, getMobile} from "../../lib/redux/selectors";

const NoteContainer = styled("ul", globalOptions)`
  width: 100%;

  padding-left: ${props => props["data-s"] === "medium" ? 40 : 25}px;
`;

const ListItem = styled("li", globalOptions)`
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
`;

export default function StatNotes({notes, size = "medium", ...rest}) {
    const mobile = useSelector(getMobile);
    const darkMode = useSelector(getDarkMode);

    if (mobile) {
        size = "small";
    }
    return (
        <>
            <NoteContainer data-s={size}>
                {notes.map(note => (
                    <ListItem key={note} data-dm={darkMode}>
                        <TowerText variant={size === "medium" ? "body2" : "caption"} font={true} key={note}>
                            {note}
                        </TowerText>
                    </ListItem>
                ))}
            </NoteContainer>
        </>
    );
}
import {useSelector} from "react-redux";
import {styled} from "@mui/material/styles";

import TowerText from "../tower/TowerText";
import {getMobile} from "../../lib/redux/selectors";
import {globalOptions} from "../../lib/utils/emotionStyled";


const NoteContainer = styled("ul", globalOptions)`
  width: 100%;

  padding-left: ${props => props["data-s"] === "medium" ? 40 : 25}px;
  padding-right: ${props => props["data-s"] === "medium" ? 40 : 25}px;
`;

const ListItem = styled("li")`
  color: ${props => props.theme.palette.text.primary};
`;

/**
 * The stat notes component
 *
 * @param {Object} props Component props
 * @param {Array<string>} props.notes Array list of notes for the stat
 * @param {string} [props.size="medium"] Shows how big the stat notes should be
 */
export default function StatNotes({notes, size = "medium", ...rest}) {
    const mobile = useSelector(getMobile);

    if (mobile) {
        size = "small";
    }
    return (
        <>
            <NoteContainer data-s={size}>
                {notes.map(note => (
                    <ListItem key={note}>
                        <TowerText variant={size === "medium" ? "body2" : "caption"} font={true} key={note}>
                            {note}
                        </TowerText>
                    </ListItem>
                ))}
            </NoteContainer>
        </>
    );
}
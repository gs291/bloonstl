import {useSelector} from "react-redux";
import {styled} from "@mui/material/styles";

import {getDarkMode} from "../../lib/redux/selectors";


export const List = styled("ul")`
  color: ${props => props.theme.palette.text.primary};
`;

/**
 * Legal unordered list
 *
 * @param {Object} props Component props
 * @param {any} props.children Children supplied to the unordered list item
 */
export default function LegalUList({children, ...rest}) {
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <List
                { ...rest }
            >
                {children}
            </List>
        </>
    );
}
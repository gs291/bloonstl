import {useSelector} from "react-redux";
import {styled} from "@mui/material/styles";

import {getDarkMode} from "../../lib/redux/selectors";


export const List = styled("ol")`
  counter-reset: item ${props => props.start};
  color: ${props => props.theme.palette.text.primary};
`;


/**
 * Legal ordered list
 *
 * @param {Object} props Component props
 * @param {any} props.children Children supplied to the ordered list item
 */
export default function LegalOList({children, ...rest}) {
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
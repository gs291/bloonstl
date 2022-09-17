import {styled} from "@mui/material/styles";


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
import {styled} from "@mui/material/styles";


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
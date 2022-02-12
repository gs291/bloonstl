import styled from "@emotion/styled";


export const ListItem = styled("li")`
  display: block;
  margin-bottom: 20px;

  &:before {
    content: counters(item, ".") " ";
    counter-increment: item
  }

  & > p {
    display: inline;
    margin-left: 10px;
  }
`;

/**
 * Legal list item  (<li>)
 *
 * @param {Object} props Component props
 * @param {any} props.children Children supplied to the list item
 */
export default function LegalListItem({children, ...rest}) {

    return (
        <>
            <ListItem
                { ...rest }
            >
                {children}
            </ListItem>
        </>
    );
}
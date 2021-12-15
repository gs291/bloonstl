import styled from "@emotion/styled";

export const ListItem = styled.li`
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
import styled from "@emotion/styled";
import {Grid} from "@material-ui/core";

const GridItem = styled(Grid)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  
  margin-bottom: 10px;

  border: 4px solid ${props => props.bordercolor};
  color: #000;
`;

export default function GridItems({ className, children, borderColor}) {
    return (
        <>
            <GridItem bordercolor={borderColor} className={className} item>
                { children }
            </GridItem>
        </>
    );
}
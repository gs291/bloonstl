import styled from "@emotion/styled";
import {Grid} from "@material-ui/core";

const Title = styled(Grid)`
  padding-top: 5px;
  padding-bottom: 5px;
  
  background-color: ${props => props.backgroundcolor};
  color: #000;
`;

export default function GridTitle({ className, children, backgroundColor}) {
    return (
        <>
            <Title backgroundcolor={backgroundColor} className={className} item>
                { children }
            </Title>
        </>
    );
}
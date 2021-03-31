import styled from "@emotion/styled";
import {Divider} from "@material-ui/core";

const VDivider = styled(Divider)`
  margin-left: 10px;
  margin-right: 10px;
  
  background-color: ${props => props.backgroundcolor ? props.backgroundcolor : "white"};
`;

export default function VerticalDivider({ backgroundColor }) {
    return (
        <>
            <VDivider backgroundcolor={backgroundColor} flexItem orientation="vertical" />
        </>
    );
}
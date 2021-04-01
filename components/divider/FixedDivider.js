import styled from "@emotion/styled";
import {Divider} from "@material-ui/core";

const FDivider = styled(Divider)`
  width: ${props => props.width}%;
  margin-top: 10px;
  margin-bottom: 10px;

  background-color: ${props => props.backgroundcolor ? props.backgroundcolor : "white"};
`;

export default function FixedDivider({ width, backgroundColor }) {
    return (
      <>
          <FDivider width={width} backgroundcolor={backgroundColor} />
      </>
    );
}
import styled from "@emotion/styled";
import {Divider} from "@material-ui/core";

const FDivider = styled(Divider)`
  width: ${props => props.width}%;
  background-color: #ccc;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export default function FixedDivider({ width }) {
    return (
      <>
          <FDivider width={width} />
      </>
    );
}
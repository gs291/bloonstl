import styled from "@emotion/styled";
import {Divider} from "@material-ui/core";

import siteColors from "../../lib/utils/siteColors";

const FDivider = styled(Divider)`
  width: ${props => props["data-w"]}%;
  margin-top: 10px;
  margin-bottom: 10px;

  background-color: ${props => props["data-bc"] ? props["data-bc"] : siteColors.text.dark};
`;

export default function FixedDivider({ width, backgroundColor }) {

    return (
      <>
          <FDivider data-w={width} data-bc={backgroundColor}/>
      </>
    );
}
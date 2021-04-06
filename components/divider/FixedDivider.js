import styled from "@emotion/styled";
import {Divider} from "@material-ui/core";

import siteColors from "../../lib/utils/siteColors";

export default function FixedDivider({ width, backgroundColor }) {
    const FDivider = styled(Divider)`
      width: ${width}%;
      margin-top: 10px;
      margin-bottom: 10px;
    
      background-color: ${backgroundColor ? backgroundColor : siteColors.text.dark};
    `;

    return (
      <>
          <FDivider />
      </>
    );
}
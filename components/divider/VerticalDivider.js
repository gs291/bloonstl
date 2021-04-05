import styled from "@emotion/styled";
import {Divider} from "@material-ui/core";

import siteColors from "../../lib/utils/siteColors";

export default function VerticalDivider({ backgroundColor }) {
    const VDivider = styled(Divider)`
      margin-left: 10px;
      margin-right: 10px;
      
      background-color: ${backgroundColor ? backgroundColor : siteColors.text.dark};
    `;

    return (
        <>
            <VDivider flexItem orientation="vertical" />
        </>
    );
}
import styled from "@emotion/styled";
import {Divider} from "@material-ui/core";

import siteColors from "../../lib/utils/siteColors";

const VDivider = styled(Divider)`
  margin-left: 10px;
  margin-right: 10px;
  
  background-color: ${props => props["data-bc"] ? props["data-bc"] : siteColors.text.dark};
`;

export default function VerticalDivider({ backgroundColor }) {

    return (
        <>
            <VDivider flexItem orientation="vertical" data-bc={backgroundColor}/>
        </>
    );
}
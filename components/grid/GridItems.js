import styled from "@emotion/styled";
import {Grid} from "@material-ui/core";

import siteColors from "../../lib/utils/siteColors";

const GridItem = styled(Grid)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  
  margin-bottom: 10px;

  border: 4px solid ${props => props["data-bc"]};
  color: ${siteColors.text.gridTitle.dark};
`;

export default function GridItems({ className, children, borderColor}) {

    return (
        <>
            <GridItem className={className} data-bc={borderColor} item>
                { children }
            </GridItem>
        </>
    );
}
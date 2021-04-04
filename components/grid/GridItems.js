import styled from "@emotion/styled";
import {Grid} from "@material-ui/core";

import {siteColors} from "../../lib/utils";

export default function GridItems({ className, children, borderColor}) {
    const GridItem = styled(Grid)`
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      
      margin-bottom: 10px;
    
      border: 4px solid ${borderColor};
      color: ${siteColors.text.gridTitle.dark};
    `;

    return (
        <>
            <GridItem className={className} item>
                { children }
            </GridItem>
        </>
    );
}
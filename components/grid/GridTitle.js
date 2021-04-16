import styled from "@emotion/styled";
import {Grid, Typography} from "@material-ui/core";

import siteColors from "../../lib/utils/siteColors";

const Title = styled(Grid)`
  padding-top: 5px;
  padding-bottom: 5px;
  
  background-color: ${props => props["data-bc"]};
  color: ${siteColors.text.gridTitle.dark};
`;

export default function GridTitle({ className, children, backgroundColor}) {

    return (
        <>
            <Title className={className} data-bc={backgroundColor} item>
                <Typography variant="h4">
                    { children }
                </Typography>
            </Title>
        </>
    );
}
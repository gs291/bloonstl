import styled from "@emotion/styled";
import {Grid, Typography} from "@material-ui/core";

import siteColors from "../../lib/utils/siteColors";

const Title = styled(Grid)`
  padding-top: 30px;
  padding-bottom: 30px;
  
  text-align: center;
  background-color: ${props => props["data-bc"]};
  color: ${siteColors.text.gridTitle.dark};
`;

export default function GridTitle({ className, children, backgroundColor}) {

    return (
        <>
            <Title className={className} data-bc={backgroundColor} item>
                <Typography variant="h3">
                    { children }
                </Typography>
            </Title>
        </>
    );
}
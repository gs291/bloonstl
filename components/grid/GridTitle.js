import styled from "@emotion/styled";
import {Grid, Typography} from "@material-ui/core";

import {siteColors} from "../../lib/utils";

export default function GridTitle({ className, children, backgroundColor}) {
    const Title = styled(Grid)`
      padding-top: 5px;
      padding-bottom: 5px;
      
      background-color: ${backgroundColor};
      color: ${siteColors.text.gridTitle.dark};
    `;

    return (
        <>
            <Title className={className} item>
                <Typography variant="h4">
                    { children }
                </Typography>
            </Title>
        </>
    );
}
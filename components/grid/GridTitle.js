import styled from "@emotion/styled";
import {Grid, Typography} from "@material-ui/core";

export default function GridTitle({ className, children, backgroundColor}) {
    const Title = styled(Grid)`
      padding-top: 5px;
      padding-bottom: 5px;
      
      background-color: ${backgroundColor};
      color: #000;
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
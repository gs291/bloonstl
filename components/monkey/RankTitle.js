import styled from "@emotion/styled";
import {Grid, Typography} from "@material-ui/core";

import {rankColors} from "../../lib/utils";

const Rank = styled(Typography)`
  color: ${props => rankColors(props.name)};
`;

export default function RankTitle ({ className, rank, ranks }) {
    return (
        <>
            <Grid container
                  spacing={6}
                  direciton="row"
                  alignItems="center"
                  justify="center"
                  className={className}>
                <Grid item>
                    <Rank variant="h1" name={rank}>
                        { rank }
                    </Rank>
                </Grid>
                <Grid item>
                    <Rank variant="h4" component="h2" name={rank}>
                        { ranks.top_path }
                        &nbsp;-&nbsp;
                        { ranks.middle_path }
                        &nbsp;-&nbsp;
                        { ranks.bottom_path }
                    </Rank>
                </Grid>
            </Grid>
        </>
    );
}
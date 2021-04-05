import styled from "@emotion/styled";
import {Typography} from "@material-ui/core";

import {rankColors} from "../../lib/utils";

const Rank = styled(Typography)`
  color: ${props => rankColors(props.name)};
`;

export default function RankTitle ({ className, rank, ranks }) {
    return (
        <>
            <Rank variant="h4" component="h1" name={rank} className={className}>
                { ranks.top_path }
                &nbsp;-&nbsp;
                { ranks.middle_path }
                &nbsp;-&nbsp;
                { ranks.bottom_path }
            </Rank>
        </>
    );
}
import styled from "@emotion/styled";
import {Typography} from "@material-ui/core";

import {rankColors} from "./Monkey";

const Rank = styled(Typography)`
  color: ${props => rankColors(props.name)};
`;

export default function RankTitle ({ rank, ranks }) {
    return (
        <>
            <Rank variant="h4" component="h1" name={rank}>
                { ranks.topPath }
                &nbsp;-&nbsp;
                { ranks.midPath }
                &nbsp;-&nbsp;
                { ranks.botPath }
            </Rank>
        </>
    );
}
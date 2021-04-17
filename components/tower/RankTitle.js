import styled from "@emotion/styled";
import {Typography} from "@material-ui/core";

import {getTierColor} from "../../lib/utils/utils";

const Rank = styled(Typography)`
  color: ${props => getTierColor(props.name)};
  transition: 0.3s;
`;

const RankContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const RankItem = styled.div`
  padding: 15px;
`;

export default function RankTitle ({ className, rank, ranks }) {
    return (
        <>
            <RankContainer>
                <RankItem>
                    <Rank variant="h1" name={rank}>
                        { rank }
                    </Rank>
                </RankItem>
                <RankItem>
                    <Rank variant="h4" component="h2" name={rank}>
                        { ranks.top_path }
                        &nbsp;-&nbsp;
                        { ranks.middle_path }
                        &nbsp;-&nbsp;
                        { ranks.bottom_path }
                    </Rank>
                </RankItem>
            </RankContainer>
        </>
    );
}
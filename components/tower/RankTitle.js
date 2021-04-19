import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Typography} from "@material-ui/core";

import {getTierColor, hexToRgb} from "../../lib/utils/utils";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";

const Rank = styled(Typography)`
  color: ${props => getTierColor(props.name)};
  ${props => !props["data-dm"] && `text-shadow: 5px 5px 10px ${siteColors.text.light}`};
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
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <RankContainer>
                <RankItem>
                    <Rank variant="h1" name={rank} data-dm={darkMode}>
                        { rank }
                    </Rank>
                </RankItem>
                <RankItem>
                    <Rank variant="h4" component="h2" name={rank} data-dm={darkMode}>
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
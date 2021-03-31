import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Divider, Typography} from "@material-ui/core";

import Icon from "../tower/Icon";
import {goldCost} from "../../lib/utils";
import {getDifficulty} from "../../lib/redux/selectors";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const MonkeyText = styled.div`
  display: flex;
  flex-direction: column;
`;

const VerticalDivider = styled(Divider)`
  margin-left: 10px;
  margin-right: 10px;
`;

export default function MonkeyContainer({monkey}) {
    const difficulty = useSelector(getDifficulty);

    return (
        <>
            <ContentContainer>
                <Icon tower={ monkey } />
                <VerticalDivider flexItem orientation="vertical" />
                <MonkeyText>
                    <Typography variant="h3">
                        {monkey.name}
                    </Typography>
                    <Typography variant="body1">
                        {monkey.description}
                    </Typography>
                    <Typography variant="caption">
                        ${goldCost(monkey.cost_gold, difficulty)}
                    </Typography>
                </MonkeyText>
            </ContentContainer>
        </>
    );
}
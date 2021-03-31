import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Typography} from "@material-ui/core";

import Icon from "../tower/Icon";
import {getMonkeyTypeColor, goldCost} from "../../lib/utils";
import {getDifficulty} from "../../lib/redux/selectors";
import VerticalDivider from "../divider/VerticalDivider";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const MonkeyText = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function MonkeyContainer({monkey}) {
    const difficulty = useSelector(getDifficulty);

    return (
        <>
            <ContentContainer>
                <Icon tower={ monkey } />
                <VerticalDivider backgroundColor={getMonkeyTypeColor(monkey.type)} />
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
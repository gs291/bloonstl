import styled from "@emotion/styled";
import {Divider, Typography} from "@material-ui/core";

import Icon from "../tower/Icon";
import {goldCost} from "../../lib/utils";

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

export default function HeroContainer({hero, difficulty}) {

    return (
        <>
            <ContentContainer>
                <Icon tower={ hero } />
                <VerticalDivider flexItem orientation="vertical" />
                <MonkeyText>
                    <Typography variant="h3">
                        {hero.name}
                    </Typography>
                    <Typography variant="body1">
                        {hero.description}
                    </Typography>
                    <Typography variant="caption">
                        ${goldCost(hero.cost_gold, difficulty)}
                    </Typography>
                </MonkeyText>
            </ContentContainer>
        </>
    );
}
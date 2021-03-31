import styled from "@emotion/styled";
import {Divider, Typography} from "@material-ui/core";

import Icon from "../tower/Icon";
import {getHeroColor, goldCost} from "../../lib/utils";
import VerticalDivider from "../divider/VerticalDivider";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const MonkeyText = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function HeroContainer({hero, difficulty}) {

    return (
        <>
            <ContentContainer>
                <Icon tower={ hero } />
                <VerticalDivider backgroundColor={getHeroColor(hero.name)} />
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
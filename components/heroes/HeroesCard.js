import styled from "@emotion/styled";
import {Card, CardContent, Link} from "@material-ui/core";

import Icon from "../tower/Icon";
import {getTowerLink, siteColors} from "../../lib/utils";

const CardContainer = styled(Card)`
  margin: 5px;

  background-color: ${ siteColors.card.dark };

  &:hover{
    cursor: pointer;
    background-color: ${ siteColors.background.hover.dark };
  }
`;

export default function HeroesCard({hero}) {
    return (
        <>
            <Link href={`/hero/${getTowerLink(hero)}`}>
                <CardContainer >
                    <CardContent>
                        <Icon tower={ hero } />
                    </CardContent>
                </CardContainer>
            </Link>
        </>
    );
}
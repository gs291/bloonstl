import styled from "@emotion/styled";
import {Card, CardContent} from "@material-ui/core";

import Icon from "../tower/Icon";
import { siteColors } from "../../lib/utils";

const CardContainer = styled(Card)`
  margin: 5px;

  background-color: ${ siteColors.background.card.dark };

  &:hover{
    cursor: pointer;
    background-color: ${ siteColors.background.hover.dark };
  }
`;

export default function Hero({hero}) {
    return (
        <>
            <CardContainer>
                <CardContent>
                    <Icon tower={ hero } />
                </CardContent>
            </CardContainer>
        </>
    );
}
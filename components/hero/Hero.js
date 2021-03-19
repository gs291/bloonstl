import styled from "@emotion/styled";
import {Card, CardContent} from "@material-ui/core";

import {background} from "../../lib/site-colors.json";
import Icon from "../tower/Icon";

const CardContainer = styled(Card)`
  margin: 5px;

  background-color: ${ background.card.dark };

  &:hover{
    cursor: pointer;
    background-color: ${ background.hover.dark };
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
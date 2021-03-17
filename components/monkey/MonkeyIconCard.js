import styled from "@emotion/styled";
import {Card, CardContent} from "@material-ui/core";

import Icon from "../tower/Icon";
import {background} from "../../lib/site-colors.json";

const CardContainer = styled(Card)`
  margin: 5px;

  background-color: ${ background.card.dark };

  &:hover{
    cursor: pointer;
    background-color: ${ background.hover.dark };
  }
`;

export default function MonkeyIconCard({monkey}) {
    return (
        <>
            <CardContainer>
                <CardContent>
                    <Icon tower={ monkey } />
                </CardContent>
            </CardContainer>
        </>
    );
}
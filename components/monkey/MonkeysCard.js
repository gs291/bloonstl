import styled from "@emotion/styled";
import {Card, CardContent} from "@material-ui/core";

import Icon from "../tower/Icon";
import {getMonkeyTypeColor} from "./MonkeysGrid";

const CardContainer = styled(Card)`
  margin: 5px;

  background-color: ${props => getMonkeyTypeColor(props.type)};

  &:hover{
    cursor: pointer;
    background-color: ${ props => getMonkeyTypeColor(props.type, true) };
  }
`;

export default function MonkeyIconCard({monkey, type}) {
    return (
        <>
            <CardContainer type={type}>
                <CardContent>
                    <Icon tower={ monkey } />
                </CardContent>
            </CardContainer>
        </>
    );
}
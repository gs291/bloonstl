import styled from "@emotion/styled";
import {Card, CardContent, Link} from "@material-ui/core";

import Icon from "../tower/Icon";
import {getMonkeyLink, getMonkeyTypeColor} from "../../lib/utils";

const CardContainer = styled(Card)`
  margin: 5px;

  background-color: ${props => getMonkeyTypeColor(props.type)};

  &:hover{
    cursor: pointer;
    background-color: ${ props => getMonkeyTypeColor(props.type, true) };
  }
`;

export default function MonkeysCard({monkey, type}) {
    return (
        <>
            <Link href={`/monkey/${getMonkeyLink(monkey)}`}>
                <a>
                    <CardContainer type={type}>
                        <CardContent>
                            <Icon tower={ monkey } />
                        </CardContent>
                    </CardContainer>
                </a>
            </Link>
        </>
    );
}
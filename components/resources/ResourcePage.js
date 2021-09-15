import styled from "@emotion/styled";

import GraphQL from "../api/GraphQL";
import Keybindings from "../keybinds/Keybindings";
import FixedDivider from "../divider/FixedDivider";
import {getTowerLink} from "../../lib/utils/utils";
import TableOfContents from "../table-of-contents/TableOfContents";

const KeybindingsComponent = styled(Keybindings)`
  margin-top: 50px;
  margin-bottom: 50px;
`;

const GraphQlComponent = styled(GraphQL)`
  margin-top: 30px;
`;


export default function ResourcesPage({ api }) {
    const toc = [
        {
            "href": getTowerLink("Keybindings"),
            "title": "Keybindings Helper"
        },
        {
            "href": getTowerLink("GraphQL"),
            "title": "API Documentation"
        }
    ];

    return (
        <>
            <TableOfContents tags={toc}/>
            <KeybindingsComponent tag={toc[0]}/>
            <FixedDivider width={100} />
            <GraphQlComponent api={api} tag={toc[1]}/>
        </>
    );
}

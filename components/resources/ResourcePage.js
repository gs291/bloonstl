import styled from "@emotion/styled";

import GitHub from "./GitHub";
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
  margin-top: 50px;
  margin-bottom: 50px;
`;

const GitHubComponent = styled(GitHub)`
  margin-top: 50px;
`;

/**
 * Resources page
 *
 * @param {Object} props Component props
 * @param {Object} props.api Object containing all the information about the GraphQL API
 */
export default function ResourcesPage({api}) {
    const toc = [
        {
            "href": getTowerLink("Keybindings"),
            "title": "Keybindings Helper"
        },
        {
            "href": getTowerLink("GraphQL"),
            "title": "API Documentation"
        },
        {
            "href": getTowerLink("GitHub"),
            "title": "GitHub Information"
        }
    ];

    return (
        <>
            <TableOfContents tags={toc}/>
            <KeybindingsComponent tag={toc[0]}/>
            <FixedDivider width={100} />
            <GraphQlComponent api={api} tag={toc[1]}/>
            <FixedDivider width={100} />
            <GitHubComponent tag={toc[2]}/>
        </>
    );
}

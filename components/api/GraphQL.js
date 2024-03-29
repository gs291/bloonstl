import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {styled} from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";


import ApiItem from "../api/ApiItem";
import TowerText from "../tower/TowerText";
import FixedDivider from "../divider/FixedDivider";
import {getMobile} from "../../lib/redux/selectors";
import {EXPAND_PREFIX, SELECT_CONTENT_EXPAND, ga4SendSelectContent} from "../../lib/utils/ga4";


const GraphQLContainer = styled("div")`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Information = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  width: 100%;
`;

const Title = styled(TowerText)`
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: center;
`;

const Description = styled(TowerText)`
  text-align: center;
`;

const Link = styled('a')`
  font-family: monospace;
  font-size: 1.25rem;
  line-break: anywhere;
  text-decoration: underline;
  color: ${props => props.theme.palette.text.primary};
`;

const ExpanderContainer = styled("div")`
  width: 100%;
`;

const Expander = styled(Accordion)`
  background-color: ${props => props.theme.palette.background.default};
  ${props => {
      const rgb = props.theme.palette.mode === "dark" ? '255 255 255' : '0 0 0';
      return `box-shadow: 0px 2px 10px -1px rgb(${rgb} / 20%), 0px 1px 3px 0px rgb(${rgb} / 14%), 0px 1px 3px 0px rgb(${rgb} / 12%);`;
  }}
`;

const ExpandMore = styled(ExpandMoreIcon)`
  color: ${props => props.theme.palette.text.primary};
`;

const ExpanderSummary = styled(AccordionSummary)``;

const ExpandedDetails = styled(AccordionDetails)`
  flex-direction: column;

  padding-top: 20px;
  padding-bottom: 20px;
  background-color: ${props => props.theme.palette.background.default};
`;


const GA4_GRAPHQL_EXPAND_ID = "GRAPHQL_EXPAND";

/**
 * GraphQL API object table item
 *
 * @param {Object} props Component props
 * @param {string} [props.className] class to apply to the component
 * @param {Object<{queries: Object, objects: Object}>} props.api All data about the GraphQL API
 * @param {Object<{href: string, title: string}>} props.tag Tag used for table of contents
 */
export default function GraphQL({className, api, tag}) {
    const mobile = useSelector(getMobile);
    const [path, setPath] = useState("");

    useEffect(() => {
        if (window) {
            setPath(`${window.location.protocol}//${window.location.host}/api/graphql`)
        }
    }, [])

    const handleClick = () =>  ga4SendSelectContent(SELECT_CONTENT_EXPAND, {
        item_id: `${EXPAND_PREFIX}${GA4_GRAPHQL_EXPAND_ID}`,
        expand: "main"
    });

    return (
        <>
            <GraphQLContainer className={className} id={tag.href}>
                <Information>
                    <Title variant={mobile ? "h3" : "h2"} component="h2">
                        GraphQL API
                    </Title>
                    <Title variant={mobile ? "h3" : "h2"} component="h2">
                        Documentation
                    </Title>
                </Information>
                <Information>
                    <Description variant="h6" font={true}>
                        Expand below to get information on the GraphQL API endpoint located at:
                    </Description>
                    <Link href={path}>
                        {path}
                    </Link>
                </Information>

                <ExpanderContainer>
                    <Expander>
                        <ExpanderSummary
                            expandIcon={<ExpandMore />}
                            onClick={handleClick}
                        >
                            <TowerText variant="h5">Queries and Objects</TowerText>
                        </ExpanderSummary>
                        <ExpandedDetails>
                            <ApiItem api={api.queries} type="queries"/>
                            <FixedDivider width={100} />
                            <ApiItem api={api.objects} type="obj"/>
                        </ExpandedDetails>
                    </Expander>
                </ExpanderContainer>
            </GraphQLContainer>
        </>
    );
}

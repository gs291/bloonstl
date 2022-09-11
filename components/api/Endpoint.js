import styled from "@emotion/styled";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";

import TowerText from "../tower/TowerText";
import {rgbaHex} from "../../lib/utils/utils";
import {EXPAND_PREFIX, SELECT_CONTENT_EXPAND, ga4SendSelectContent} from "../../lib/utils/ga4";


const EndpointContainer = styled("div")`
  width: 100%;
  margin-bottom: 40px;
`;

const MethodName = styled("div")`
  display: flex;
  flex-direction: row;
`;

const Name = styled(TowerText)`
  margin-left: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Description = styled(TowerText)`
  margin-top: 15px;
  margin-bottom: 15px;
`;

const BoldText = styled(TowerText)`
  font-weight: bold;
`;

const CodeContainer = styled("div")`
  padding: 1em;
  margin-bottom: 20px;

  border: 1px solid #CCC;
  border-radius: 10px;
`;

const Code = styled("div")`
  white-space: pre-wrap;
  font-family: monospace;
`;

const CodeText = styled(TowerText)`
  font-family: monospace;
`;

const LanguageType = styled("div")`
  max-width: 85px;
  margin-bottom: 10px;
  padding: 0.5em;
  
  border-radius: 5px;
  background-color: ${props => rgbaHex(props.theme.palette.primary.main, 0.6)};
  text-align: center;
`;

const Expander = styled(Accordion)`
  background-color: unset;
  border: 1px solid ${rgbaHex("#CCCCCC", 0.1)};
`;

const ExpandMore = styled(ExpandMoreIcon)`
  color: ${props => props.theme.palette.text.primary};
`;

const ExpanderSummary = styled(AccordionSummary)`
  background-color: ${props => props.theme.palette.background.default};
`;

const ExpandedDetails = styled(AccordionDetails)`
  flex-direction: column;

  padding-top: 20px;  
  padding-bottom: 20px;
  background-color: ${props => props.theme.palette.background.default};
`;


const GA4_GRAPHQL_ENDPOINT_EXPAND_ID = "GRAPHQL_EXPAND";

/**
 * GraphQL API Item
 *
 * @param {Object} props Component props
 * @param {Object} props.item Object containing information about the API endpoint
 */
export default function Endpoint({item}) {
    const handleClick = () =>  ga4SendSelectContent(SELECT_CONTENT_EXPAND, {
        item_id: `${EXPAND_PREFIX}${GA4_GRAPHQL_ENDPOINT_EXPAND_ID}`,
        expand: item.name
    });

    return (
       <>
           <EndpointContainer>
               <MethodName>
                   <TowerText textColor={"#2DABE8"} variant="h4">
                       {item.request.method}
                   </TowerText>
                   <Name variant="h4" font={true}>
                       {item.name}
                   </Name>
               </MethodName>
               <Description variant="body1" font={true}>
                   {item.description}
               </Description>
               <div>
                   <BoldText variant="body1" font={true}>
                       SCHEMA DEFINITION
                   </BoldText>
                   <CodeContainer>
                       <LanguageType>
                           <BoldText variant="body2" font={true}>
                               graphql
                           </BoldText>
                       </LanguageType>
                       <Code>
                           <CodeText variant="body2" font={true} dangerouslySetInnerHTML={{__html: item.request["def"]}} />
                       </Code>
                   </CodeContainer>

                   <Expander>
                       <ExpanderSummary
                           expandIcon={<ExpandMore />}
                           onClick={handleClick}
                       >
                           <TowerText variant="subtitle2">QUERY EXAMPLE</TowerText>
                       </ExpanderSummary>
                       <ExpandedDetails>
                           <BoldText variant="body1" font={true}>
                               QUERY
                           </BoldText>
                           <CodeContainer>
                               <LanguageType>
                                   <BoldText variant="body2" font={true}>
                                       graphql
                                   </BoldText>
                               </LanguageType>
                               <Code>
                                   <CodeText variant="body2" font={true}>
                                       {item.request.body.query}
                                   </CodeText>
                               </Code>
                           </CodeContainer>

                           <BoldText variant="body1" font={true}>
                               VARIABLES
                           </BoldText>
                           <CodeContainer>
                               <LanguageType>
                                   <BoldText variant="body2" font={true}>
                                       json
                                   </BoldText>
                               </LanguageType>
                               <Code>
                                   <CodeText variant="body2" font={true}>
                                       {item.request.body.variables}
                                   </CodeText>
                               </Code>
                           </CodeContainer>
                       </ExpandedDetails>
                   </Expander>
               </div>
           </EndpointContainer>
       </>
    );
}
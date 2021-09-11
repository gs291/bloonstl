import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import TowerText from "../tower/TowerText";
import {rgbaHex} from "../../lib/utils/utils";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";

const EndpointContainer = styled.div`
  width: 100%;
  margin-bottom: 40px;
`;

const MethodName = styled.div`
  display: flex;
  flex-direction: row;
`;

const Name = styled(TowerText)`
  margin-left: 20px;
`;

const Description = styled(TowerText)`
  margin-top: 15px;
  margin-bottom: 15px;
`;

const BoldText = styled(TowerText)`
  font-weight: bold;
`;

const CodeContainer = styled.div`
  padding: 1em;
  margin-bottom: 20px;

  border: 1px solid #CCC;
  border-radius: 10px;
`;

const Code = styled.div`
  white-space: pre-wrap;
  font-family: monospace;
`;

const CodeText = styled(TowerText)`
  font-family: monospace;
`;

const LanguageType = styled.div`
  max-width: 85px;
  margin-bottom: 10px;
  padding: 0.5em;
  
  border-radius: 5px;
  background-color: ${props => rgbaHex(props["data-dm"] ? siteColors.accent.dark : siteColors.accent.light, 0.6)};
  text-align: center;
  
  transition: 0.3s;
`;

export default function Endpoint({item}) {
    const darkMode = useSelector(getDarkMode);

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
                       QUERY
                   </BoldText>
                   <CodeContainer>
                       <LanguageType data-dm={darkMode}>
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
                       <LanguageType data-dm={darkMode}>
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
               </div>
           </EndpointContainer>
       </>
    );
}
import styled from "@emotion/styled";

import TowerText from "../tower/TowerText";

const EndpointContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
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

  border: 1px solid #ccc;
  border-radius: 10px;
`;

const Code = styled.div`
  white-space: pre-wrap;
  font-family: monospace;
`;

const LanguageType = styled.div`
  max-width: 85px;
  margin-bottom: 10px;
  padding: 0.5em;
  
  border-radius: 5px;
  background-color: #ccc;
  text-align: center;
`;

export default function Endpoint({item}) {


    return (
       <>
           <EndpointContainer>
               <MethodName>
                   <TowerText textColor={"#FFB400"} variant="h4">
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
                       <LanguageType>
                           <BoldText variant="body2" font={true}>
                               graphql
                           </BoldText>
                       </LanguageType>
                       <Code>
                           {item.request.body.query}
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
                           {item.request.body.variables}
                       </Code>
                   </CodeContainer>
               </div>
           </EndpointContainer>
       </>
    );
}
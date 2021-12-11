import styled from "@emotion/styled";

import Endpoint from "./Endpoint";
import FieldTable from "./FieldTable";
import TowerText from "../tower/TowerText";

const TitleDescContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

const Title = styled(TowerText)`
  margin-bottom: 10px;
`;


export default function ApiItem({ api, type }) {

    return (
        <>
            <TitleDescContainer>
                <Title variant="h3">
                    {api.title}
                </Title>
                <TowerText variant="h6" font={true}>
                    {api.description}
                </TowerText>
            </TitleDescContainer>

            {api.items.map(item => (
                <div key={item.name}>
                    {type === "obj" && (<FieldTable row={item}/>)}
                    {type === "queries" && (<Endpoint item={item}/>)}
                </div>
            ))}
        </>
    );
}
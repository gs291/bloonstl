import styled from "@emotion/styled";

import Endpoint from "./Endpoint";
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

export default function Queries({ queries }) {

    return (
        <>
            <TitleDescContainer>
                <Title variant="h3">
                    {queries.title}
                </Title>
                <TowerText variant="h6" font={true}>
                    {queries.description}
                </TowerText>
            </TitleDescContainer>

            {queries.items.map(item => (
                <Endpoint item={item} key={item.name}/>
            ))}
        </>
    );
}
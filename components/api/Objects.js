import styled from "@emotion/styled";

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


export default function Objects({ objs }) {

    return (
        <>
            <TitleDescContainer>
                <Title variant="h3" font={true}>
                    {objs.title}
                </Title>
                <TowerText variant="h6" font={true}>
                    {objs.description}
                </TowerText>
            </TitleDescContainer>

            {objs.items.map(row => (
                <FieldTable row={row} key={row.name}/>
            ))}
        </>
    );
}
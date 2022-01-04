import styled from "@emotion/styled";

import TowerText from "../tower/TowerText";

const Number = styled.div`
  margin-bottom: 5px;
  width: 100%;
  
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const TotalContainer = styled.div`
  width: 100%;
  min-width: ${props => props["data-m"] ? 175 : 225}px;
  display: flex;
  flex-direction: column;
`;

const TotalText = styled(TowerText)`
  width: ${props => props["data-w"]}%;
  text-align: right;
`;

const TotalNumber = styled(TowerText)`
  margin-left: 15px;
  width: ${props => props["data-w"]}%;
`;

export default function StatNumbers({rows, widthLeft = 50, widthRight = 50}) {

    return (
        <>
            <TotalContainer>
                {rows.map(row => (
                    <Number key={row.title}>
                        <TotalText variant="body1" data-w={widthLeft}>{row.title}</TotalText>
                        <TotalNumber variant="body1" font={true} data-w={widthRight}>{row.text}</TotalNumber>
                    </Number>
                ))}
            </TotalContainer>
        </>
    );
}
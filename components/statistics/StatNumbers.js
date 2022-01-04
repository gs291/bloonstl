import styled from "@emotion/styled";

import TowerText from "../tower/TowerText";
import {useSelector} from "react-redux";
import {getMobile} from "../../lib/redux/selectors";

const Number = styled.div`
  margin-top: ${props => props["data-e"] ? 7.5 : 0}px;
  margin-bottom: ${props => props["data-m"] ? 0 : 5}px;
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
    const mobile = useSelector(getMobile);

    return (
        <>
            <TotalContainer>
                {rows.map(row => (
                    <Number key={row.title} data-e={row.title === "Total"} data-m={mobile}>
                        <TotalText variant="body1" data-w={widthLeft}>{row.title}</TotalText>
                        <TotalNumber variant="body1" font={true} data-w={widthRight}>{row.text}</TotalNumber>
                    </Number>
                ))}
            </TotalContainer>
        </>
    );
}
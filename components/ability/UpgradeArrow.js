import styled from "@emotion/styled";
import {DoubleArrow} from "@material-ui/icons";

const UpgradeArrowContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

`;

const Arrow = styled(DoubleArrow)`
  color: ${props => props.selected ? "gold" : "white"};
`;

export default function UpgradeArrow({ className, selected }) {
    return (
        <>
            <UpgradeArrowContainer className={className}>
                <Arrow selected={selected}/>
            </UpgradeArrowContainer>
        </>
    );
}
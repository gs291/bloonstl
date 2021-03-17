import styled from "@emotion/styled";
import {DoubleArrow} from "@material-ui/icons";

import {rankColors} from "../monkey/Monkey";

const UpgradeArrowContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

`;

const Arrow = styled(DoubleArrow)`
  color: ${props => props.selected ? rankColors(props.rank) : "white"};
`;

export default function UpgradeArrow({ className, rank, selected }) {
    return (
        <>
            <UpgradeArrowContainer className={className}>
                <Arrow selected={selected} rank={rank}/>
            </UpgradeArrowContainer>
        </>
    );
}
import styled from "@emotion/styled";
import {DoubleArrow} from "@material-ui/icons";

import {rankColors} from "../../lib/utils/utils";
import siteColors from "../../lib/utils/siteColors";

const UpgradeArrowContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

`;

const Arrow = styled(DoubleArrow)`
  color: ${props => props.selected ? rankColors(props.rank) : siteColors.text.dark};
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
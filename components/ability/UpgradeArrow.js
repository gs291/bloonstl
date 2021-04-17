import styled from "@emotion/styled";
import {DoubleArrow} from "@material-ui/icons";

import {getTierColor} from "../../lib/utils/utils";
import siteColors from "../../lib/utils/siteColors";

const UpgradeArrowContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

`;

const Arrow = styled(DoubleArrow)`
  color: ${props => props["data-s"] ? getTierColor(props.rank) : siteColors.text.dark};
`;

export default function UpgradeArrow({ className, rank, selected }) {
    return (
        <>
            <UpgradeArrowContainer className={className}>
                <Arrow data-s={selected} rank={rank}/>
            </UpgradeArrowContainer>
        </>
    );
}
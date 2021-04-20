import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {DoubleArrow} from "@material-ui/icons";

import {getTierColor} from "../../lib/utils/utils";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";

const UpgradeArrowContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

`;

const Arrow = styled(DoubleArrow)`
  color: ${props => 
          props["data-s"] 
                  ? getTierColor(props.rank) 
                  : props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
  transition: 0.3s;
`;

export default function UpgradeArrow({ className, rank, selected }) {
    const darkMode = useSelector(getDarkMode);
    return (
        <>
            <UpgradeArrowContainer className={className}>
                <Arrow data-s={selected} rank={rank} data-dm={darkMode}/>
            </UpgradeArrowContainer>
        </>
    );
}
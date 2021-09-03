import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import TierSection from "./TierSection";
import VoteSection from "./VoteSection";
import TowerSection from "./TowerSection";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";

const OddSection = styled.div`
  width: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.3s;
  background-color: ${props => props["data-dm"] ? siteColors.accent.dark : siteColors.accent.light};
  border-radius: 20px;
`;

export default function HomePage({scrollTo}) {
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <OddSection data-dm={darkMode} ref={scrollTo}>
                <TierSection />
            </OddSection>
            <TowerSection />
            <OddSection data-dm={darkMode}>
                <VoteSection />
            </OddSection>
        </>
    );
}
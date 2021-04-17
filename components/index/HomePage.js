import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import TopSection from "./TopSection";
import TierSection from "./TierSection";
import VoteSection from "./VoteSection";
import TowerSection from "./TowerSection";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";


const OddTierSection = styled(TierSection)`
  transition: 0.3s;
  background-color: ${props => props["data-dm"] ? siteColors.odd.dark : siteColors.odd.light};
`;

const OddVoteSection = styled(VoteSection)`
  transition: 0.3s;
  background-color: ${props => props["data-dm"] ? siteColors.odd.dark : siteColors.odd.light};
`;

export default function HomePage({ }) {
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <TopSection />
            <OddTierSection data-dm={darkMode}/>
            <TowerSection />
            <OddVoteSection data-dm={darkMode}/>
        </>
    );
}
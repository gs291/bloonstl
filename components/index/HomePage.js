import styled from "@emotion/styled";
import {useSelector, connect} from "react-redux";
import {Component, createRef, useRef} from "react";

import TopSection from "./TopSection";
import TierSection from "./TierSection";
import VoteSection from "./VoteSection";
import TowerSection from "./TowerSection";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";


const OddTierSection = styled(TierSection)`
  transition: 0.3s;
  background-color: ${props => props["data-dm"] ? siteColors.odd.dark : siteColors.odd.light};
  border-radius: 20px;
`;

const OddVoteSection = styled(VoteSection)`
  transition: 0.3s;
  background-color: ${props => props["data-dm"] ? siteColors.odd.dark : siteColors.odd.light};
  border-radius: 20px;
`;

export default function HomePage({ }) {
    const darkMode = useSelector(getDarkMode);
    const tierSection = useRef(null);

    return (
        <>
            <TopSection scrollTo={tierSection}/>
            <OddTierSection scrollTo={tierSection} data-dm={darkMode}/>
            <TowerSection />
            <OddVoteSection data-dm={darkMode}/>
        </>
    );
}
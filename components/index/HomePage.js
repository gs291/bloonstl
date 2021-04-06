import styled from "@emotion/styled";

import TopSection from "./TopSection";
import TierSection from "./TierSection";
import VoteSection from "./VoteSection";
import TowerSection from "./TowerSection";
import siteColors from "../../lib/utils/siteColors";


const OddTierSection = styled(TierSection)`
  background-color: ${siteColors.background.odd.dark};
`;

const OddVoteSection = styled(VoteSection)`
  background-color: ${siteColors.background.odd.dark};
`;

export default function HomePage({ }) {
    return (
        <>
            <TopSection />
            <OddTierSection />
            <TowerSection />
            <OddVoteSection />
        </>
    );
}
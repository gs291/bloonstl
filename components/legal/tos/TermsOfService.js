import styled from "@emotion/styled";

import UserData from "./UserData";
import ContactUs from "./ContactUs";
import Disclaimer from "./Disclaimer";
import Submissions from "./Submissions";
import Advertisers from "./Advertisers";
import Corrections from "./Corrections";
import GoverningLaw from "./GoverningLaw";
import Miscellaneous from "./Miscellaneous";
import TowerText from "../../tower/TowerText";
import SiteManagement from "./SiteManagement";
import Indemnification from "./Indemnification";
import AgreementToTerms from "./AgreementToTerms";
import PrivacyPolicyTOS from "./PrivacyPolicyTOS";
import DisputeResolution from "./DisputeResolution";
import TermAndTermination from "./TermAndTermination";
import UserRepresentations from "./UserRepresentations";
import ContributionLicense from "./ContributionLicense";
import ProhibitedActivities from "./ProhibitedActivities";
import LimitationsOfLiability from "./LimitationsOfLiability";
import TableOfContents from "../../table-of-contents/TableOfContents";
import ThirdPartWebsiteAndContent from "./ThirdPartWebsiteAndContent";
import UserGeneratedContributions from "./UserGeneratedContributions";
import ModificationsAndInterruptions from "./ModificationsAndInterruptions";
import CaliforniaUsersAndResidents from "./CaliforniaUsersAndResidents";


export const ToSTitle = styled(TowerText)`
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const ToSText = styled(TowerText)`
  margin-bottom: 20px;
`;

const ToSContainer = styled.div`
  
`;

const tags = [
    { "title": "AGREEMENT TO TERMS", "href": "agreement-to-terms" },
    { "title": "USER REPRESENTATIONS", "href": "user-representations" },
    { "title": "PROHIBITED ACTIVITIES", "href": "prohibited-activities" },
    { "title": "USER GENERATED CONTRIBUTIONS", "href": "user-generated-contributions" },
    { "title": "CONTRIBUTION LICENSE", "href": "contribution-license" },
    { "title": "SUBMISSIONS", "href": "submissions" },
    { "title": "THIRD-PARTY WEBSITE AND CONTENT", "href": "third-party-website-and-content" },
    { "title": "ADVERTISERS", "href": "advertisers" },
    { "title": "SITE MANAGEMENT", "href": "site-management" },
    { "title": "PRIVACY POLICY", "href": "privacy-policy" },
    { "title": "TERM AND TERMINATION", "href": "term-and-termination" },
    { "title": "MODIFICATIONS AND INTERRUPTIONS", "href": "modifications-and-interruptions" },
    { "title": "GOVERNING LAW", "href": "governing-law" },
    { "title": "DISPUTE RESOLUTION", "href": "dispute-resolution" },
    { "title": "CORRECTIONS", "href": "corrections" },
    { "title": "DISCLAIMER", "href": "disclaimer" },
    { "title": "LIMITATIONS OF LIABILITY", "href": "limitations-of-liability" },
    { "title": "INDEMNIFICATION", "href": "indemnification" },
    { "title": "USER DATA", "href": "user-data" },
    { "title": "CALIFORNIA USERS AND RESIDENTS", "href": "california-users-and-residents" },
    { "title": "MISCELLANEOUS", "href": "miscellaneous" },
    { "title": "CONTACT US", "href": "contact-us" },
]

export default function TermsOfService({}) {

    return (
        <>
            <TableOfContents tags={tags} />

            <ToSContainer>
                <AgreementToTerms tag={tags[0]}/>
                <UserRepresentations tag={tags[1]}/>
                <ProhibitedActivities tag={tags[2]}/>
                <UserGeneratedContributions tag={tags[3]}/>
                <ContributionLicense tag={tags[4]} />
                <Submissions tag={tags[5]} />
                <ThirdPartWebsiteAndContent tag={tags[6]} />
                <Advertisers tag={tags[7]} />
                <SiteManagement tag={tags[8]} />
                <PrivacyPolicyTOS tag={tags[9]} />
                <TermAndTermination tag={tags[10]} />
                <ModificationsAndInterruptions tag={tags[11]} />
                <GoverningLaw tag={tags[12]} />
                <DisputeResolution tag={tags[13]} />
                <Corrections tag={tags[14]} />
                <Disclaimer tag={tags[15]} />
                <LimitationsOfLiability tag={tags[16]} />
                <Indemnification tag={tags[17]} />
                <UserData tag={tags[18]} />
                <CaliforniaUsersAndResidents tag={tags[19]} />
                <Miscellaneous tag={tags[20]} />
                <ContactUs tag={tags[21]} />
            </ToSContainer>
        </>
    );
}
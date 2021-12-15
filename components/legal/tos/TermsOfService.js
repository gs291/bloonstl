import styled from "@emotion/styled";

import UserData from "./UserData";
import ContactUs from "./ContactUs";
import Disclaimer from "./Disclaimer";
import Advertisers from "./Advertisers";
import GoverningLaw from "./GoverningLaw";
import Miscellaneous from "./Miscellaneous";
import TowerText from "../../tower/TowerText";
import Indemnification from "./Indemnification";
import AgreementToTerms from "./AgreementToTerms";
import TermAndTermination from "./TermAndTermination";
import UserRepresentations from "./UserRepresentations";
import ContributionLicense from "./ContributionLicense";
import ProhibitedActivities from "./ProhibitedActivities";
import LimitationsOfLiability from "./LimitationsOfLiability";
import TableOfContents from "../../table-of-contents/TableOfContents";
import ThirdPartWebsiteAndContent from "./ThirdPartWebsiteAndContent";
import UserGeneratedContributions from "./UserGeneratedContributions";
import CaliforniaUsersAndResidents from "./CaliforniaUsersAndResidents";
import LegalText from "../LegalText";
import LegalTitle from "../LegalTitle";

const ToSContainer = styled.div`
  width: 100%;
  margin-top: 50px;
`;

const tags = [
    { "title": "AGREEMENT TO TERMS", "href": "agreement-to-terms" },
    { "title": "USER REPRESENTATIONS", "href": "user-representations" },
    { "title": "PROHIBITED ACTIVITIES", "href": "prohibited-activities" },
    { "title": "USER GENERATED CONTRIBUTIONS", "href": "user-generated-contributions" },
    { "title": "CONTRIBUTION LICENSE", "href": "contribution-license" },
    { "title": "THIRD-PARTY WEBSITE AND CONTENT", "href": "third-party-website-and-content" },
    { "title": "ADVERTISERS", "href": "advertisers" },
    { "title": "TERM AND TERMINATION", "href": "term-and-termination" },
    { "title": "GOVERNING LAW", "href": "governing-law" },
    { "title": "DISCLAIMER", "href": "disclaimer" },
    { "title": "LIMITATIONS OF LIABILITY", "href": "limitations-of-liability" },
    { "title": "INDEMNIFICATION", "href": "indemnification" },
    { "title": "USER DATA", "href": "user-data" },
    { "title": "CALIFORNIA USERS AND RESIDENTS", "href": "california-users-and-residents" },
    { "title": "MISCELLANEOUS", "href": "miscellaneous" },
    { "title": "CONTACT US", "href": "contact-us" },
];

export default function TermsOfService({}) {

    return (
        <>
            <LegalTitle variant="body1" font={true}>
                <strong>
                    Last updated December 15, 2021
                </strong>
            </LegalTitle>

            <TableOfContents tags={tags} />

            <ToSContainer>
                <AgreementToTerms               tag={tags[0]}/>
                <UserRepresentations            tag={tags[1]}/>
                <ProhibitedActivities           tag={tags[2]}/>
                <UserGeneratedContributions     tag={tags[3]}/>
                <ContributionLicense            tag={tags[4]} />
                <ThirdPartWebsiteAndContent     tag={tags[5]} />
                <Advertisers                    tag={tags[6]} />
                <TermAndTermination             tag={tags[7]} />
                <GoverningLaw                   tag={tags[8]} />
                <Disclaimer                     tag={tags[9]} />
                <LimitationsOfLiability         tag={tags[10]} />
                <Indemnification                tag={tags[11]} />
                <UserData                       tag={tags[12]} />
                <CaliforniaUsersAndResidents    tag={tags[13]} />
                <Miscellaneous                  tag={tags[14]} />
                <ContactUs                      tag={tags[15]} />
                <LegalText variant="caption" font={true}>
                    This terms of service was created using Termly's Terms and Conditions Generator.
                </LegalText>
            </ToSContainer>
        </>
    );
}
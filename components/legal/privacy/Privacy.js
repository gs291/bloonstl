import styled from "@emotion/styled";

import Updates from "./Updates";
import Controls from "./Controls";
import ContactUs from "./ContactUs";
import LegalText from "../LegalText";
import InfoMinors from "./InfoMinors";
import LegalTitle from "../LegalTitle";
import InfoStorage from "./InfoStorage";
import SocialLogins from "./SocialLogins";
import PrivacyRights from "./PrivacyRights";
import InternationalInfo from "./InternationalInfo";
import InformationSharing from "./InformationSharing";
import CookiesAndTracking from "./CookiesAndTracking";
import CaliforniaResidents from "./CaliforniaResidents";
import InformationCollection from "./InformationCollection";
import ReviewUpdateDeleteData from "./ReviewUpdateDeleteData";
import TableOfContents from "../../table-of-contents/TableOfContents";

export const GDPRList = styled("ol")`
  counter-reset: item ${props => props.start};
`;

export const GDPRItem = styled("li")`
  display: block;
  
  &:before {
    content: counters(item, ".") " ";
    counter-increment: item
  }
  
  & > p {
    display: inline;
    margin-left: 10px;
  }
`;

const PrivacyContainer = styled("div")`
  width: 100%;
  margin-top: 50px;
`;

const tags = [
    { "title": "WHAT INFORMATION DO WE COLLECT?", "href": "information-collection" },
    { "title": "WILL YOUR INFORMATION BE SHARED WITH ANYONE?", "href": "information-sharing" },
    { "title": "DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?", "href": "cookies-and-tracking" },
    { "title": "HOW DO WE HANDLE YOUR SOCIAL LOGINS?", "href": "social-logins" },
    { "title": "IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?", "href": "internationally-transferred-information" },
    { "title": "HOW LONG DO WE KEEP YOUR INFORMATION?", "href": "information-storage-time" },
    { "title": "DO WE COLLECT INFORMATION FROM MINORS?", "href": "do-we-collect-information-from-minors" },
    { "title": "WHAT ARE YOUR PRIVACY RIGHTS?", "href": "privacy-rights" },
    { "title": "CONTROLS FOR DO-NOT-TRACK FEATURES", "href": "control-do-not-track" },
    { "title": "DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?", "href": "california-residents" },
    { "title": "DO WE MAKE UPDATES TO THIS NOTICE?", "href": "updates-to-notice" },
    { "title": "HOW CAN YOU REVIEW, UPDATE OR DELETE THE DATA WE COLLECT FROM YOU?", "href": "review-update-or-delete-data" },
    { "title": "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?", "href": "contact-us" }
];

export default function Privacy({}) {

    return (
        <>
            <LegalTitle variant="body1" font={true}>
                <strong>
                    Last updated December 15, 2021
                </strong>
            </LegalTitle>

            <TableOfContents tags={tags} />

            <PrivacyContainer>
                <LegalText variant="body1" font={true}>
                    Thank you for choosing to be part of our community at bloonstl ("we," "us," or "our").
                    We are committed to protecting your personal information and your right to privacy.
                    If you have any questions or concerns about this privacy notice or our practices with regard
                    to your personal information, please contact us at bloonstl@gmail.com.
                </LegalText>
                <LegalText variant="body1" font={true}>
                    This privacy notice describes how we might use your information if you:
                    In this privacy notice, if we refer to:
                    The purpose of this privacy notice is to explain to you in the clearest way possible
                    what information we collect, how we use it, and what rights you have in relation to it.
                    If there are any terms in this privacy notice that you do not agree with, please
                    discontinue use of our Services immediately.
                </LegalText>
                <LegalText variant="body1" font={true}>
                    <strong>
                        Please read this privacy notice carefully, as it will help you understand what we
                        do with the information that we collect.
                    </strong>
                </LegalText>
                <InformationCollection      tag={tags[0]}/>
                <InformationSharing         tag={tags[1]}/>
                <CookiesAndTracking         tag={tags[2]}/>
                <SocialLogins               tag={tags[3]}/>
                <InternationalInfo          tag={tags[4]}/>
                <InfoStorage                tag={tags[5]}/>
                <InfoMinors                 tag={tags[6]}/>
                <PrivacyRights              tag={tags[7]}/>
                <Controls                   tag={tags[8]}/>
                <CaliforniaResidents        tag={tags[9]}/>
                <Updates                    tag={tags[10]}/>
                <ReviewUpdateDeleteData     tag={tags[11]}/>
                <ContactUs                  tag={tags[12]}/>
            </PrivacyContainer>
        </>
    );
}
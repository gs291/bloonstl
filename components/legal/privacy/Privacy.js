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

export const GDPRList = styled.ol`
  counter-reset: item ${props => props.start};
`;

export const GDPRItem = styled.li`
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

const PrivacyContainer = styled.div`
  margin-top: 50px;
`;

const tags = [
    { "title": "WHAT INFORMATION DO WE COLLECT?", "href": "what-information-do-we-collect" },
    { "title": "WILL YOUR INFORMATION BE SHARED WITH ANYONE?", "href": "will-your-information-be-shared-with-anyone" },
    { "title": "DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?", "href": "do-we-use-cookies-and-other-tracking-technologies" },
    { "title": "HOW DO WE HANDLE YOUR SOCIAL LOGINS?", "href": "how-do-we-handle-your-social-logins" },
    { "title": "IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?", "href": "is-your-information-transferred-internationally" },
    { "title": "HOW LONG DO WE KEEP YOUR INFORMATION?", "href": "how-long-do-we-keep-your-information" },
    { "title": "DO WE COLLECT INFORMATION FROM MINORS?", "href": "do-we-collect-information-from-minors" },
    { "title": "WHAT ARE YOUR PRIVACY RIGHTS?", "href": "what-are-your-privacy-rights" },
    { "title": "CONTROLS FOR DO-NOT-TRACK FEATURES", "href": "controls-for-do-not-track-features" },
    { "title": "DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?", "href": "do-california-residents-have-specific-privacy-rights" },
    { "title": "DO WE MAKE UPDATES TO THIS NOTICE?", "href": "do-we-make-updates-to-this-notice" },
    { "title": "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?", "href": "how-can-you-contact-us-about-this-notice" },
    { "title": "HOW CAN YOU REVIEW, UPDATE OR DELETE THE DATA WE COLLECT FROM YOU?", "href": "how-can-you-review-update-or-delete-the-data-we-collect-from-you" }
];

export default function Privacy({}) {

    return (
        <>
            <LegalTitle variant="body1" font={true}>
                <strong>
                    Last updated 12/14/2021
                </strong>
            </LegalTitle>

            <TableOfContents tags={tags} />

            <PrivacyContainer>
                <LegalText variant="body1" font={true}>
                    Thank you for choosing to be part of our community at bloonstl ( "we," "us," or "our").
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
                <ContactUs                  tag={tags[11]}/>
                <ReviewUpdateDeleteData     tag={tags[12]}/>
                <LegalText variant="body2" font={true}>
                    This privacy policy was created using Termly's Privacy Policy Generator.
                </LegalText>
            </PrivacyContainer>
        </>
    );
}
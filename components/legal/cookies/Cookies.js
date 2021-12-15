import styled from "@emotion/styled";


import Tracking from "./Tracking";
import ContactUs from "./ContactUs";
import LegalText from "../LegalText";
import LegalTitle from "../LegalTitle";
import FlashCookies from "./FlashCookies";
import WhatAreCookies from "./WhatAreCookies";
import WhyWeUseCookies from "./WhyWeUseCookies";
import UpdateFrequency from "./UpdateFrequency";
import EssentialCookies from "./EssentialCookies";
import ControllingCookies from "./ControllingCookies";
import TargetedAdvertising from "./TargetedAdvertising";
import TableOfContents from "../../table-of-contents/TableOfContents";

const CookieContainer = styled.div`
  margin-top: 50px;
`;

const tags = [
    { "title": "What are cookies?", "href": "what-are-cookies" },
    { "title": "Why do we use cookies?", "href": "why-do-we-use-cookies" },
    { "title": "How can I control cookies?", "href": "how-can-i-control-cookies" },
    { "title": "Essential website cookies", "href": "essential-website-cookies" },
    { "title": "What about other tracking technologies, like web beacons?", "href": "tracking-technologies" },
    { "title": "Do you use Flash cookies or Local Shared Objects?", "href": "flash-cookies" },
    { "title": "Do you serve targeted advertising?", "href": "targeted-advertising" },
    { "title": "How often will you update this Cookie Policy?", "href": "update-frequency" },
    { "title": "Where can I get further information?", "href": "contact-us" }
];

export default function Cookies({}) {

    return (
        <>
            <LegalTitle variant="body1" font={true}>
                <strong>
                    Last updated December 15, 2021
                </strong>
            </LegalTitle>

            <TableOfContents tags={tags} />

            <CookieContainer>
                <LegalText variant="body1" font={true}>
                    This Cookie Policy explains how bloonstl ("we", "us", and "our")
                    uses cookies and similar technologies to recognize you when you visit our websites
                    at https://bloonstl.netlify.app/, ("Websites"). It explains what these technologies are
                    and why we use them, as well as your rights to control our use of them.
                </LegalText>
                <LegalText variant="body1" font={true}>
                    In some cases we may use cookies to collect personal information, or that becomes
                    personal information if we combine it with other information.
                </LegalText>
                <WhatAreCookies         tag={tags[0]}/>
                <WhyWeUseCookies        tag={tags[1]}/>
                <ControllingCookies     tag={tags[2]}/>
                <EssentialCookies       tag={tags[3]}/>
                <Tracking               tag={tags[4]}/>
                <FlashCookies           tag={tags[5]}/>
                <TargetedAdvertising    tag={tags[6]}/>
                <UpdateFrequency        tag={tags[7]}/>
                <ContactUs              tag={tags[8]}/>
                <LegalText variant="caption" font={true}>
                    This privacy policy was created using Termly's Cookie Consent Generator.
                </LegalText>
            </CookieContainer>
        </>
    );
}
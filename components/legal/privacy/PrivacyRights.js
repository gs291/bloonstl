import styled from "@emotion/styled";

import LegalText from "../LegalText";
import LegalTitle from "../LegalTitle";

const Link = styled("a")`
  text-decoration: underline;
`;

export default function PrivacyRights({tag}) {

    return (
        <>
            <LegalTitle variant="h4" id={tag.href}>
                WHAT ARE YOUR PRIVACY RIGHTS?
            </LegalTitle>
            <LegalText variant="body1" font={true}>
                <strong>In Short:</strong> You may review, change, or terminate your account at any time.
            </LegalText>
            <LegalText variant="body1" font={true}>
                If you are a resident in the EEA or UK and you believe we are unlawfully processing
                your personal information, you also have the right to complain to your local data
                protection supervisory authority. You can find their contact details here:&nbsp;
                <Link
                    href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm"
                    target="_blank"
                >
                    European Commission - National Data Protection Authorities
                </Link>
            </LegalText>
            <LegalText variant="body1" font={true}>
                If you are a resident in Switzerland, the contact details for the data protection
                authorities are available here:&nbsp;
                <Link
                    href="https://www.edoeb.admin.ch/edoeb/en/home.html"
                    target="_blank"
                >
                    Switzerland - Federal Data Protection and Information Commissioner
                </Link>
            </LegalText>
            <LegalTitle variant="h6" font={true}>
                <strong>Account Information</strong>
            </LegalTitle>
            <LegalText variant="body1" font={true}>
                If you would at any time like to review or change the information in your account or
                terminate your account, you can:
                Upon your request to terminate your account, we will deactivate or delete your
                account and information from our active databases. However, we may retain some
                information in our files to prevent fraud, troubleshoot problems, assist with any
                investigations, enforce our Terms of Use and/or comply with applicable legal
                requirements.
            </LegalText>
        </>
    );
}
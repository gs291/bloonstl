import LegalText from "../LegalText";
import LegalTitle from "../LegalTitle";

export default function CaliforniaResidents({tag}) {

    return (
        <>
            <LegalTitle variant="h4" id={tag.href}>
                DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
            </LegalTitle>
            <LegalText variant="body1" font={true}>
                <strong>In Short:</strong> Yes, if you are a resident of California, you are granted specific rights
                regarding access to your personal information.
            </LegalText>
            <LegalText variant="body1" font={true}>
                California Civil Code Section 1798.83, also known as the "Shine The Light" law,
                permits our users who are California residents to request and obtain from us, once a
                year and free of charge, information about categories of personal information (if any)
                we disclosed to third parties for direct marketing purposes and the names and
                addresses of all third parties with which we shared personal information in the
                immediately preceding calendar year. If you are a California resident and would like
                to make such a request, please submit your request in writing to us using the contact
                information provided below.
            </LegalText>
            <LegalText variant="body1" font={true}>
                If you are under 18 years of age, reside in California, and have a registered account
                with the website, you have the right to request removal of unwanted data that you publicly post
                on the website. To request removal of such data, please contact us using the contact
                information provided below, and include the email address associated with your
                account and a statement that you reside in California. We will make sure the data is
                not publicly displayed on the website, but please be aware that the data may not be
                completely or comprehensively removed from all our systems (e.g. backups, etc.).
            </LegalText>
        </>
    );
}
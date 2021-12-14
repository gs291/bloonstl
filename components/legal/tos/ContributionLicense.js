import {ToSText, ToSTitle} from "./TermsOfService";

export default function ContributionLicense({tag}) {

    return (
        <>
            <ToSTitle id={tag.href} variant="h3">
                {tag.title}
            </ToSTitle>
            <ToSText variant="h6" font={true}>
                You and the Site agree that we may access, store, process, and use any information
                and personal data that you provide following the terms of the Privacy Policy and your
                choices (including settings).
            </ToSText>
            <ToSText variant="h6" font={true}>
                By submitting suggestions or other feedback regarding the Site, you agree that we
                can use and share such feedback for any purpose without compensation to you.
            </ToSText>
            <ToSText variant="h6" font={true}>
                We do not assert any ownership over your Contributions. You retain full ownership of
                all of your Contributions and any intellectual property rights or other proprietary rights
                associated with your Contributions. We are not liable for any statements or
                representations in your Contributions provided by you in any area on the Site. You
                are solely responsible for your Contributions to the Site and you expressly agree to
                exonerate us from any and all responsibility and to refrain from any legal action
                against us regarding your Contributions.
            </ToSText>
        </>
    );
}
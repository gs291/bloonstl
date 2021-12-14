import {ToSText, ToSTitle} from "./TermsOfService";

export default function PrivacyPolicyTOS({tag}) {
    return (
        <>
            <ToSTitle id={tag.href} variant="h4">
                {tag.title}
            </ToSTitle>
            <ToSText variant="h6" font={true}>
                We care about data privacy and security. By using the Site, you agree to be bound by
                our Privacy Policy posted on the Site, which is incorporated into these Terms of Service.
                Please be advised the Site is hosted in the United States. If you access the Site from
                any other region of the world with laws or other requirements governing personal
                data collection, use, or disclosure that differ from applicable laws in the United
                States, then through your continued use of the Site, you are transferring your data to
                the United States, and you agree to have your data transferred to and processed in
                the United States.
            </ToSText>
        </>
    );
}
import LegalText from "../LegalText";
import LegalTitle from "../LegalTitle";

export default function CookiesAndTracking({tag}) {

    return (
        <>
            <LegalTitle variant="h4" id={tag.href}>
                DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
            </LegalTitle>
            <LegalText variant="body1" font={true}>
                <strong>In Short:</strong> We may use cookies and other tracking technologies to collect and store
                your information
            </LegalText>
            <LegalText variant="body1" font={true}>
                We may use cookies and similar tracking technologies (like web beacons and pixels)
                to access or store information. Specific information about how we use such
                technologies and how you can refuse certain cookies is set out in our Cookie Notice.
            </LegalText>
        </>
    );
}
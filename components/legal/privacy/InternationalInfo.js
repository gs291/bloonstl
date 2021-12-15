import LegalText from "../LegalText";
import LegalTitle from "../LegalTitle";

export default function InternationalInfo({tag}) {

    return (
        <>
            <LegalTitle variant="h4" id={tag.href}>
                IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?
            </LegalTitle>
            <LegalText variant="body1" font={true}>
                <strong>In Short:</strong> We may transfer, store, and process your information in countries other
                than your own.
            </LegalText>
            <LegalText variant="body1" font={true}>
                Our servers are located in multiple countries around the world. If you are accessing our from outside,
                please be aware that your information may be transferred to, stored, and processed by us in our
                facilities and by those third parties with whom we may share your personal
                information (see "WILL YOUR INFORMATION BE SHARED WITH ANYONE?"
                above), in and other countries.
            </LegalText>
            <LegalText variant="body1" font={true}>
                If you are a resident in the European Economic Area (EEA) or United Kingdom (UK),
                then these countries may not necessarily have data protection laws or other similar
                laws as comprehensive as those in your country. We will however take all necessary
                measures to protect your personal information in accordance with this privacy notice
                and applicable law.
            </LegalText>
        </>
    );
}
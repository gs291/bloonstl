import LegalText from "../LegalText";
import LegalTitle from "../LegalTitle";

export default function InformationCollection({tag}) {

    return (
        <>
            <LegalTitle variant="h4" id={tag.href}>
                WHAT INFORMATION DO WE COLLECT?
            </LegalTitle>
            <LegalTitle variant="h6" font={true}>
                <strong>Personal information you disclose to us</strong>
            </LegalTitle>
            <LegalText variant="body1" font={true}>
                <strong>In Short:</strong> We collect personal information that you provide to us.
            </LegalText>
            <LegalText variant="body1" font={true}>
                We collect personal information that you voluntarily provide to us when you register
                on the express an interest in obtaining information about us or our products and
                Services, when you participate in activities on the (such as by posting messages in
                our online forums or entering competitions, contests or giveaways) or otherwise
                when you contact us.
            </LegalText>
            <LegalText variant="body1" font={true}>
                The personal information that we collect depends on the context of your interactions
                with us and the , the choices you make and the products and features you use. The
                personal information we collect may include the following:
            </LegalText>
            <LegalText variant="body1" font={true}>
                All personal information that you provide to us must be true, complete and accurate,
                and you must notify us of any changes to such personal information.
            </LegalText>

            <LegalTitle variant="h6" font={true}>
                <strong>Information automatically collected</strong>
            </LegalTitle>
            <LegalText variant="body1" font={true}>
                <strong>In Short:</strong> Some information — such as your Internet Protocol (IP) address and/or
                browser and device characteristics — is collected automatically when you visit our .

            </LegalText>
            <LegalText variant="body1" font={true}>
                We automatically collect certain information when you visit, use or navigate the . This
                information does not reveal your specific identity (like your name or contact
                information) but may include device and usage information, such as your IP address,
                browser and device characteristics, operating system, language preferences,
                referring URLs, device name, country, location, information about how and when you
                use our and other technical information. This information is primarily needed to
                maintain the security and operation of our , and for our internal analytics and
                reporting purposes.
            </LegalText>
            <LegalText variant="body1" font={true}>
                Like many businesses, we also collect information through cookies and similar
                technologies.
            </LegalText>
        </>
    );
}
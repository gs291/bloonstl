import LegalText from "../LegalText";
import LegalTitle from "../LegalTitle";


/**
 * Legal privacy "contact us" section
 *
 * @param {Object} props Component props
 * @param {Object<{href: string, title: string}>} props.tag Tag used for table of contents
 */
export default function ContactUs({tag}) {

    return (
        <>
            <LegalTitle variant="h4" id={tag.href}>
                HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
            </LegalTitle>
            <LegalText variant="body1" font={true}>
                If you have questions or comments about this notice,
                you may email us at: bloonstl@gmail.com with the email subject starting with [PRIVACY].
            </LegalText>
        </>
    );
}
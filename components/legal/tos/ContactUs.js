import LegalText from "../LegalText";
import LegalTitle from "../LegalTitle";


/**
 * Legal ToS "contact us" section
 *
 * @param {Object} props Component props
 * @param {Object<{href: string, title: string}>} props.tag Tag used for table of contents
 */
export default function ContactUs({tag}) {

    return (
        <>
            <LegalTitle id={tag.href} variant="h3">
                {tag.title}
            </LegalTitle>
            <LegalText variant="body1" font={true}>
                In order to resolve a complaint regarding the Site or to receive further information
                regarding use of the Site, please contact us at: bloonstl@gmail.com with the email subject starting with [TOS].
            </LegalText>
        </>
    );
}
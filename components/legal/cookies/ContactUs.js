import LegalText from "../LegalText";
import LegalTitle from "../LegalTitle";


/**
 * Legal cookies "contact us" section
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
                If you have any questions about our use of cookies or other technologies, please
                email us at bloonstl@gmail.com with the email subject starting with [COOKIES].
            </LegalText>
        </>
    );
}
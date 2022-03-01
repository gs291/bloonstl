import LegalText from "../LegalText";
import LegalTitle from "../LegalTitle";


/**
 * Legal privacy "updates" section
 *
 * @param {Object} props Component props
 * @param {Object<{href: string, title: string}>} props.tag Tag used for table of contents
 */
export default function Updates({tag}) {

    return (
        <>
            <LegalTitle variant="h4" id={tag.href}>
                DO WE MAKE UPDATES TO THIS NOTICE?
            </LegalTitle>
            <LegalText variant="body1" font={true}>
                <strong>In Short:</strong> Yes, we will update this notice as necessary to stay compliant with
                relevant laws
            </LegalText>
            <LegalText variant="body1" font={true}>
                We may update this privacy notice from time to time. The updated version will be
                indicated by an updated &quot;Revised&quot; date and the updated version will be effective as
                soon as it is accessible. If we make material changes to this privacy notice, we may
                notify you either by prominently posting a notice of such changes or by directly
                sending you a notification. We encourage you to review this privacy notice frequently
                to be informed of how we are protecting your information.
            </LegalText>
        </>
    );
}
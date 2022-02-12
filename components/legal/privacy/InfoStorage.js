import LegalText from "../LegalText";
import LegalTitle from "../LegalTitle";


/**
 * Legal privacy "information on storage" section
 *
 * @param {Object} props Component props
 * @param {Object<{href: string, title: string}>} props.tag Tag used for table of contents
 */
export default function InfoStorage({tag}) {

    return (
        <>
            <LegalTitle variant="h4" id={tag.href}>
                HOW LONG DO WE KEEP YOUR INFORMATION?
            </LegalTitle>
            <LegalText variant="body1" font={true}>
                <strong>In Short:</strong> We keep your information for as long as necessary to fulfill the purposes
                outlined in this privacy notice unless otherwise required by law.
            </LegalText>
            <LegalText variant="body1" font={true}>
                We will only keep your personal information for as long as it is necessary for the
                purposes set out in this privacy notice, unless a longer retention period is required or
                permitted by law (such as tax, accounting or other legal requirements). No purpose in
                this notice will require us keeping your personal information for longer than one (1) year.
            </LegalText>
            <LegalText variant="body1" font={true}>
                When we have no ongoing legitimate business need to process your personal
                information, we will either delete or anonymize such information, or, if this is not
                possible (for example, because your personal information has been stored in backup
                archives), then we will securely store your personal information and isolate it from
                any further processing until deletion is possible.
            </LegalText>
        </>
    );
}
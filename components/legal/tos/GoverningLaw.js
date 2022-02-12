import LegalText from "../LegalText";
import LegalTitle from "../LegalTitle";


/**
 * Legal ToS "governing law" section
 *
 * @param {Object} props Component props
 * @param {Object<{href: string, title: string}>} props.tag Tag used for table of contents
 */
export default function GoverningLaw({tag}) {

    return (
        <>
            <LegalTitle id={tag.href} variant="h3">
                {tag.title}
            </LegalTitle>
            <LegalText variant="body1" font={true}>
                These Terms of Service and your use of the Site are governed by and construed in
                accordance with the laws of the State of Oregon applicable to agreements made and
                to be entirely performed within the State of Oregon, without regard to its conflict of
                law principles.
            </LegalText>
        </>
    );
}
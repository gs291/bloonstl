import LegalText from "../LegalText";
import LegalTitle from "../LegalTitle";


/**
 * Legal ToS "miscellaneous" section
 *
 * @param {Object} props Component props
 * @param {Object<{href: string, title: string}>} props.tag Tag used for table of contents
 */
export default function Miscellaneous({tag}) {

    return (
        <>
            <LegalTitle id={tag.href} variant="h3">
                {tag.title}
            </LegalTitle>
            <LegalText variant="body1" font={true}>
                These Terms of Service and any policies or operating rules posted by us on the Site or in
                respect to the Site constitute the entire agreement and understanding between you
                and us. Our failure to exercise or enforce any right or provision of these Terms of Service
                shall not operate as a waiver of such right or provision. These Terms of Service operate
                to the fullest extent permissible by law. We may assign any or all of our rights and
                obligations to others at any time. We shall not be responsible or liable for any loss,
                damage, delay, or failure to act caused by any cause beyond our reasonable control.
                If any provision or part of a provision of these Terms of Service is determined to be
                unlawful, void, or unenforceable, that provision or part of the provision is deemed
                severable from these Terms of Service and does not affect the validity and enforceability
                of any remaining provisions. There is no joint venture, partnership, employment or
                agency relationship created between you and us as a result of these Terms of Service or
                use of the Site. You agree that these Terms of Service will not be construed against us
                by virtue of having drafted them. You hereby waive any and all defenses you may
                have based on the electronic form of these Terms of Service and the lack of signing by
                the parties hereto to execute these Terms of Service.
            </LegalText>
        </>
    );
}
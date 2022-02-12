import LegalText from "../LegalText";
import LegalTitle from "../LegalTitle";


/**
 * Legal privacy "information on minors" section
 *
 * @param {Object} props Component props
 * @param {Object<{href: string, title: string}>} props.tag Tag used for table of contents
 */
export default function InfoMinors({tag}) {

    return (
        <>
            <LegalTitle variant="h4" id={tag.href}>
                DO WE COLLECT INFORMATION FROM MINORS?
            </LegalTitle>
            <LegalText variant="body1" font={true}>
                <strong>In Short:</strong> We do not knowingly collect data from or market to children under 16
                years of age.
            </LegalText>
            <LegalText variant="body1" font={true}>
                We do not knowingly solicit data from or market to children under 16 years of age. By
                using the website, you represent that you are at least 16 or that you are the parent or
                guardian of such a minor and consent to such minor dependent’s use of the website.
                We may solicit data from or market to children under 18 years of age, but above 16 years of age. If we
                learn that personal information from users less than 16 years of age has been
                collected, we will deactivate the account and take reasonable measures to promptly
                delete such data from our records. If you become aware of any data we may have
                collected from children under age 16, please contact us at bloonstl@gmail.com.
            </LegalText>
        </>
    );
}
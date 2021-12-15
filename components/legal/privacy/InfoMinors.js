import LegalText from "../LegalText";
import LegalTitle from "../LegalTitle";

export default function InfoMinors({tag}) {

    return (
        <>
            <LegalTitle variant="h4" id={tag.href}>
                DO WE COLLECT INFORMATION FROM MINORS?
            </LegalTitle>
            <LegalText variant="body1" font={true}>
                <strong>In Short:</strong> We do not knowingly collect data from or market to children under 18
                years of age.
            </LegalText>
            <LegalText variant="body1" font={true}>
                We do not knowingly solicit data from or market to children under 18 years of age. By
                using the , you represent that you are at least 18 or that you are the parent or
                guardian of such a minor and consent to such minor dependent’s use of the . If we
                learn that personal information from users less than 18 years of age has been
                collected, we will deactivate the account and take reasonable measures to promptly
                delete such data from our records. If you become aware of any data we may have
                collected from children under age 18, please contact us at bloonstl@gmail.com.
            </LegalText>
        </>
    );
}
import LegalText from "../LegalText";
import LegalTitle from "../LegalTitle";


export default function ReviewUpdateDeleteData({tag}) {

    return (
        <>
            <LegalTitle variant="h4" id={tag.href}>
                HOW CAN YOU REVIEW, UPDATE, OR DELETE THE
                DATA WE COLLECT FROM YOU?
            </LegalTitle>
            <LegalText variant="body1" font={true}>
                Based on the applicable laws of your country, you may have the right to request
                access to the personal information we collect from you, change that information, or
                delete it in some circumstances. To request to review, update, or delete your
                personal information, please contact us at bloonstl@gmail.com.
            </LegalText>
        </>
    );
}
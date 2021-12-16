import LegalText from "../LegalText";
import LegalTitle from "../LegalTitle";

export default function UpdateFrequency({tag}) {

    return (
        <>
            <LegalTitle id={tag.href} variant="h3">
                {tag.title}
            </LegalTitle>
            <LegalText variant="body1" font={true}>
                We may update this Cookie Policy from time to time in order to reflect, for example,
                changes to the cookies we use or for other operational, legal or regulatory reasons.
                Please therefore re-visit this Cookie Policy regularly to stay informed about our use of
                cookies and related technologies.
            </LegalText>
            <LegalText variant="body1" font={true}>
                The date at the top of this Cookie Policy indicates when it was last updated.
            </LegalText>
        </>
    );
}
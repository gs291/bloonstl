import LegalText from "../LegalText";
import LegalTitle from "../LegalTitle";

export default function ContactUs({tag}) {

    return (
        <>
            <LegalTitle id={tag.href} variant="h3">
                {tag.title}
            </LegalTitle>
            <LegalText variant="body1" font={true}>
                In order to resolve a complaint regarding the Site or to receive further information
                regarding use of the Site, please contact us at: bloonstl@gmail.com
            </LegalText>
        </>
    );
}
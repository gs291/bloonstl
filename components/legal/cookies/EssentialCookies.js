import LegalText from "../LegalText";
import LegalTitle from "../LegalTitle";

export default function EssentialCookies({tag}) {

    return (
        <>
            <LegalTitle id={tag.href} variant="h3">
                {tag.title}
            </LegalTitle>
            <LegalText variant="body1" font={true}>
                These cookies are strictly necessary to provide you with services available through
                our Websites and to use some of its features, such as access to secure areas.
            </LegalText>
        </>
    );
}
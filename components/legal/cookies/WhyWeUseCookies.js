import LegalText from "../LegalText";
import LegalTitle from "../LegalTitle";

export default function WhyWeUseCookies({tag}) {

    return (
        <>
            <LegalTitle id={tag.href} variant="h3">
                {tag.title}
            </LegalTitle>
            <LegalText variant="body1" font={true}>
                We use first and third party cookies for several reasons. Some cookies are required
                for technical reasons in order for our Websites to operate, and we refer to these as
                "essential" or "strictly necessary" cookies. Other cookies also enable us to track and
                target the interests of our users to enhance the experience on our Online Properties.
                Third parties serve cookies through our Websites for advertising, analytics and other
                purposes. This is described in more detail below.

            </LegalText>
            <LegalText variant="body1" font={true}>
                The specific types of first and third party cookies served through our Websites and
                the purposes they perform are described below (please note that the specific cookies
                served may vary depending on the specific Online Properties you visit):
            </LegalText>
        </>
    );
}
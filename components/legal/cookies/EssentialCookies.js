import LegalText from "../LegalText";
import LegalTitle from "../LegalTitle";

export default function EssentialCookies({tag}) {

    return (
        <>
            <LegalTitle id={tag.href} variant="h3">
                {tag.title}
            </LegalTitle>
            <LegalText variant="body1" font={true}>
                We do not use any first party cookies. However we do provide a set of third party providers that may
                set cookies independent from bloonstl.
            </LegalText>

            <LegalText variant="body1" font={true}>
                Third party providers that use cookies: Google AdSense and Analytics. To view Google AdSense cookie usage you
                can browse them at https://policies.google.com/technologies/ads. To view Google Analytics cookie usage you can
                browse them at https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage.
            </LegalText>
        </>
    );
}
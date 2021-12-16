import LegalText from "../LegalText";
import LegalTitle from "../LegalTitle";

export default function ControllingCookies({tag}) {

    return (
        <>
            <LegalTitle id={tag.href} variant="h3">
                {tag.title}
            </LegalTitle>
            <LegalText variant="body1" font={true}>
                You have the right to decide whether to accept or reject cookies.
                Most browsers provide for ways to control cookie behavior such as the length of time they are stored –
                either through built-in functionality or by utilizing third party plugins.
                If you disable cookies, please be aware that some of the features of our service may not function correctly.
                To find out more on how to manage and delete cookies, visit your web browser's help page or read your web browser's user manual.
                For more details on your choices regarding use of your web browsing activity for
                interest-based advertising visit youronlinechoices.eu (EU based) or optout.aboutads.info (US based).
                On a mobile device, you may also be to adjust your settings to limit ad tracking.
                You can opt out of Google Analytics by installing Google’s opt-out browser add-on.
            </LegalText>
            <LegalText variant="body1" font={true}>
                In addition, most advertising networks offer you a way to opt out of targeted
                advertising. If you would like to find out more information, please
                visit http://www.aboutads.info/choices/ or http://www.youronlinechoices.com.
                The specific types of first and third party cookies served through our Websites and
                the purposes they perform are described in the table below (please note that the
                specific cookies served may vary depending on the specific Online Properties you
                visit):
            </LegalText>
        </>
    );
}
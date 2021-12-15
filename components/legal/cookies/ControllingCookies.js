import LegalText from "../LegalText";
import LegalTitle from "../LegalTitle";

export default function ControllingCookies({tag}) {

    return (
        <>
            <LegalTitle id={tag.href} variant="h3">
                {tag.title}
            </LegalTitle>
            <LegalText variant="body1" font={true}>
                You have the right to decide whether to accept or reject cookies. You can exercise
                your cookie rights by setting your preferences in the Cookie Consent Manager. The
                Cookie Consent Manager allows you to select which categories of cookies you
                accept or reject. Essential cookies cannot be rejected as they are strictly necessary
                to provide you with services.
            </LegalText>
            <LegalText variant="body1" font={true}>
                The Cookie Consent Manager can be found in the notification banner and on our
                website. If you choose to reject cookies, you may still use our website though your
                access to some functionality and areas of our website may be restricted. You may
                also set or amend your web browser controls to accept or refuse cookies. As the
                means by which you can refuse cookies through your web browser controls vary from
                browser-to-browser, you should visit your browser's help menu for more information.
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
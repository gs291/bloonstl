import LegalText from "../LegalText";
import LegalTitle from "../LegalTitle";

export default function FlashCookies({tag}) {

    return (
        <>
            <LegalTitle id={tag.href} variant="h3">
                {tag.title}
            </LegalTitle>
            <LegalText variant="body1" font={true}>
                Websites may also use so-called "Flash Cookies" (also known as Local Shared
                Objects or "LSOs") to, among other things, collect and store information about your
                use of our services, fraud prevention and for other site operations.
            </LegalText>
            <LegalText variant="body1" font={true}>
                If you do not want Flash Cookies stored on your computer, you can adjust the
                settings of your Flash player to block Flash Cookies storage using the tools
                contained in the Website Storage Settings Panel. You can also control Flash Cookies
                by going to the Global Storage Settings Panel and following the instructions (which
                may include instructions that explain, for example, how to delete existing Flash
                Cookies (referred to "information" on the Macromedia site), how to prevent Flash
                LSOs from being placed on your computer without your being asked, and (for Flash
                Player 8 and later) how to block Flash Cookies that are not being delivered by the
                operator of the page you are on at the time).
            </LegalText>
            <LegalText variant="body1" font={true}>
                Please note that setting the Flash Player to restrict or limit acceptance of Flash
                Cookies may reduce or impede the functionality of some Flash applications,
                including, potentially, Flash applications used in connection with our services or
                online content.
            </LegalText>
        </>
    );
}
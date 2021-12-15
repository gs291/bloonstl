import LegalText from "../LegalText";
import LegalTitle from "../LegalTitle";

export default function SocialLogins({tag}) {

    return (
        <>
            <LegalTitle variant="h4" id={tag.href}>
                HOW DO WE HANDLE YOUR SOCIAL LOGINS?
            </LegalTitle>
            <LegalText variant="body1" font={true}>
                <strong>In Short:</strong> If you choose to register or log in to our services using a social media
                account, we may have access to certain information about you.
            </LegalText>
            <LegalText variant="body1" font={true}>
                Our offers you the ability to register and login using your third-party social media
                account details (like your Facebook or Twitter logins). Where you choose to do this,
                we will receive certain profile information about you from your social media provider.
                The profile information we receive may vary depending on the social media provider
                concerned, but will often include your name, email address, friends list, profile picture
                as well as other information you choose to make public on such social media
                platform
            </LegalText>
            <LegalText variant="body1" font={true}>
                We will use the information we receive only for the purposes that are described in this
                privacy notice or that are otherwise made clear to you on the relevant . Please note
                that we do not control, and are not responsible for, other uses of your personal
                information by your third-party social media provider. We recommend that you review
                their privacy notice to understand how they collect, use and share your personal
                information, and how you can set your privacy preferences on their sites and apps.
            </LegalText>
        </>
    );
}
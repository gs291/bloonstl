import LegalText from "../LegalText";
import LegalTitle from "../LegalTitle";

export default function Tracking({tag}) {

    return (
        <>
            <LegalTitle id={tag.href} variant="h3">
                {tag.title}
            </LegalTitle>
            <LegalText variant="body1" font={true}>
                Cookies are not the only way to recognize or track visitors to a website. We may use
                other, similar technologies from time to time, like web beacons (sometimes called
                "tracking pixels" or "clear gifs"). These are tiny graphics files that contain a unique
                identifier that enable us to recognize when someone has visited our Websites or
                opened an e-mail including them. This allows us, for example, to monitor the traffic
                patterns of users from one page within a website to another, to deliver or
                communicate with cookies, to understand whether you have come to the website
                from an online advertisement displayed on a third-party website, to improve site
                performance, and to measure the success of e-mail marketing campaigns. In many
                instances, these technologies are reliant on cookies to function properly, and so
                declining cookies will impair their functioning.
            </LegalText>
        </>
    );
}
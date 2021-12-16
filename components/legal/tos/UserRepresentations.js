import LegalText from "../LegalText";
import LegalTitle from "../LegalTitle";

export default function UserRepresentations({tag}) {

    return (
        <>
            <LegalTitle id={tag.href} variant="h3">
                {tag.title}
            </LegalTitle>
            <LegalText variant="body1" font={true}>
                By using the Site, you represent and warrant that: (1) you have the legal capacity
                and you agree to comply with these Terms of Service; (2) you are not a minor in the
                jurisdiction in which you reside, or if a minor, you have received parental permission
                to use the Site; (3) you will not access the Site through automated or non-human
                means, whether through a bot, script, or otherwise; (4) you will not use the Site for
                any illegal or unauthorized purpose; and (5) your use of the Site will not violate any
                applicable law or regulation.
            </LegalText>
            <LegalText variant="body1" font={true}>
                If you provide any information that is untrue, inaccurate, not current, or incomplete,
                we have the right to suspend or terminate your account and refuse any and all
                current or future use of the Site (or any portion thereof).
            </LegalText>

        </>
    );
}
import LegalText from "../LegalText";
import LegalTitle from "../LegalTitle";


/**
 * Legal privacy "controls" section
 *
 * @param {Object} props Component props
 * @param {Object<{href: string, title: string}>} props.tag Tag used for table of contents
 */
export default function Controls({tag}) {

    return (
        <>
            <LegalTitle variant="h4" id={tag.href}>
                CONTROLS FOR DO-NOT-TRACK FEATURES
            </LegalTitle>
            <LegalText variant="body1" font={true}>
                Most web browsers and some mobile operating systems and mobile applications
                include a Do-Not-Track (&quot;DNT&quot;) feature or setting you can activate to signal your
                privacy preference not to have data about your online browsing activities monitored
                and collected. At this stage no uniform technology standard for recognizing and
                implementing DNT signals has been finalized. As such, we do not currently respond
                to DNT browser signals or any other mechanism that automatically communicates
                your choice not to be tracked online. If a standard for online tracking is adopted that
                we must follow in the future, we will inform you about that practice in a revised
                version of this privacy notice.
            </LegalText>
        </>
    );
}
import {Section, Text, ToSText, ToSTitle} from "./TermsOfService";
import TowerText from "../../tower/TowerText";

export default function ProhibitedActivities({tag}) {

    return (
        <>
            <ToSTitle id={tag.href} variant="h4">
                {tag.title}
            </ToSTitle>
            <ToSText variant="h6" font={true}>
                You may not access or use the Site for any purpose other than that for which we
                make the Site available. The Site may not be used in connection with any
                commercial endeavors except those that are specifically endorsed or approved by us.
            </ToSText>
            <ToSText variant="h6" font={true}>
                As a user of the Site, you agree not to:
            </ToSText>
            <ul>
                <li>
                    <ToSText variant="h6" font={true}>
                        Systematically retrieve data or other content from the Site to create or compile,
                        directly or indirectly, a collection, compilation, database, or directory without
                        written permission from us.
                    </ToSText>
                </li>
                <li>
                    <ToSText variant="h6" font={true}>
                        Trick, defraud, or mislead us and other users, especially in any attempt to learn
                        sensitive account information such as user passwords.
                    </ToSText>
                </li>
                <li>
                    <ToSText variant="h6" font={true}>
                        Circumvent, disable, or otherwise interfere with security-related features of the
                        Site, including features that prevent or restrict the use or copying of any
                        Content or enforce limitations on the use of the Site and/or the Content
                        contained therein.
                    </ToSText>
                </li>
                <li>
                    <ToSText variant="h6" font={true}>
                        Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Site.
                    </ToSText>
                </li>
                <li>
                    <ToSText variant="h6" font={true}>
                        Use any information obtained from the Site in order to harass, abuse, or harm
                        another person.
                    </ToSText>
                </li>
                <li>
                    <ToSText variant="h6" font={true}>
                        Use the Site in a manner inconsistent with any applicable laws or regulations.
                    </ToSText>
                </li>
                <li>
                    <ToSText variant="h6" font={true}>
                        Engage in unauthorized framing of or linking to the Site.
                    </ToSText>
                </li>
                <li>
                    <ToSText variant="h6" font={true}>
                        Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses,
                        or other material, including excessive use of capital letters and spamming
                        (continuous posting of repetitive text), that interferes with any party’s
                        uninterrupted use and enjoyment of the Site or modifies, impairs, disrupts,
                        alters, or interferes with the use, features, functions, operation, or maintenance
                        of the Site.
                    </ToSText>
                </li>
                <li>
                    <ToSText variant="h6" font={true}>
                        Engage in any automated use of the system, such as using scripts to send
                        comments or messages, or using any data mining, robots, or similar data
                        gathering and extraction tools.
                    </ToSText>
                </li>
                <li>
                    <ToSText variant="h6" font={true}>
                        Delete the copyright or other proprietary rights notice from any Content.
                    </ToSText>
                </li>
                <li>
                    <ToSText variant="h6" font={true}>
                        Attempt to impersonate another user or person or use the username of
                        another user.
                    </ToSText>
                </li>
                <li>
                    <ToSText variant="h6" font={true}>
                        Upload or transmit (or attempt to upload or to transmit) any material that acts
                        as a passive or active information collection or transmission mechanism,
                        including without limitation, clear graphics interchange formats (“gifs”), 1×1
                        pixels, web bugs, cookies, or other similar devices (sometimes referred to as
                        “spyware” or “passive collection mechanisms” or “pcms”).
                    </ToSText>
                </li>
                <li>
                    <ToSText variant="h6" font={true}>
                        Interfere with, disrupt, or create an undue burden on the Site or the networks
                        or services connected to the Site.
                    </ToSText>
                </li>
                <li>
                    <ToSText variant="h6" font={true}>
                        Harass, annoy, intimidate, or threaten any of our employees or agents
                        engaged in providing any portion of the Site to you.
                    </ToSText>
                </li>
                <li>
                    <ToSText variant="h6" font={true}>
                        Attempt to bypass any measures of the Site designed to prevent or restrict
                        access to the Site, or any portion of the Site.
                    </ToSText>
                </li>
                <li>
                    <ToSText variant="h6" font={true}>
                        Adapt the Site’s software, including but not limited to Flash, PHP,
                        HTML, JavaScript, or other code.
                    </ToSText>
                </li>
                <li>
                    <ToSText variant="h6" font={true}>
                        Except as may be the result of standard search engine or Internet browser
                        usage, use, launch, develop, or distribute any automated system, including
                        without limitation, any spider, robot, cheat utility, scraper, or offline reader that
                        accesses the Site, or using or launching any unauthorized script or other
                        software.
                    </ToSText>
                </li>
                <li>
                    <ToSText variant="h6" font={true}>
                        Make any unauthorized use of the Site, including collecting usernames and/or
                        email addresses of users by electronic or other means for the purpose of
                        sending unsolicited email, or creating user accounts by automated means or
                        under false pretenses.
                    </ToSText>
                </li>
                <li>
                    <ToSText variant="h6" font={true}>
                        Use the Site as part of any effort to compete with us or otherwise use the Site
                        and/or the Content for any revenue-generating endeavor or commercial
                        enterprise.
                    </ToSText>
                </li>
            </ul>
        </>
    );
}
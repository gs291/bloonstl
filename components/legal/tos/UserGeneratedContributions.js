import TowerText from "../../tower/TowerText";
import {ToSText, ToSTitle} from "./TermsOfService";

export default function UserGeneratedContributions({tag}) {

    return (
        <>
            <ToSTitle id={tag.href} variant="h4">
                {tag.title}
            </ToSTitle>
            <ToSText variant="h6" font={true}>
                The Site does not offer users to submit or post content. We may provide you with the
                opportunity to create, submit, post, display, transmit, perform, publish, distribute, or
                broadcast content and materials to us or on the Site, including but not limited to text,
                writings, video, audio, photographs, graphics, comments, suggestions, or personal
                information or other material (collectively, "Contributions"). Contributions may be
                viewable by other users of the Site and through third-party websites. As such, any
                Contributions you transmit may be treated in accordance with the Site Privacy Policy.
                When you create or make available any Contributions, you thereby represent and warrant that:
            </ToSText>
            <ul>
                <li>
                    <ToSText variant="h6" font={true}>
                        The creation, distribution, transmission, public display, or performance, and the
                        accessing, downloading, or copying of your Contributions do not and will not
                        infringe the proprietary rights, including but not limited to the copyright, patent,
                        trademark, trade secret, or moral rights of any third party.
                    </ToSText>
                </li>
                <li>
                    <ToSText variant="h6" font={true}>
                        You are the creator and owner of or have the necessary licenses, rights,
                        consents, releases, and permissions to use and to authorize us, the Site, and
                        other users of the Site to use your Contributions in any manner contemplated
                        by the Site and these Terms of Service.
                    </ToSText>
                </li>
                <li>
                    <ToSText variant="h6" font={true}>
                        You have the written consent, release, and/or permission of each and every
                        identifiable individual person in your Contributions to use the name or likeness
                        of each and every such identifiable individual person to enable inclusion and
                        use of your Contributions in any manner contemplated by the Site and these Terms of Service.
                    </ToSText>
                </li>
                <li>
                    <ToSText variant="h6" font={true}>
                        Your Contributions are not false, inaccurate, or misleading.
                    </ToSText>
                </li>
                <li>
                    <ToSText variant="h6" font={true}>
                        Your Contributions are not unsolicited or unauthorized advertising, promotional
                        materials, pyramid schemes, chain letters, spam, mass mailings, or other
                        forms of solicitation.
                    </ToSText>
                </li>
                <li>
                    <ToSText variant="h6" font={true}>
                        Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing,
                        libelous, slanderous, or otherwise objectionable (as determined by us).
                    </ToSText>
                </li>
                <li>
                    <ToSText variant="h6" font={true}>
                        Your Contributions do not ridicule, mock, disparage, intimidate, or abuse
                        anyone.
                    </ToSText>
                </li>
                <li>
                    <ToSText variant="h6" font={true}>
                        Your Contributions are not used to harass or threaten (in the legal sense of
                        those terms) any other person and to promote violence against a specific
                        person or class of people.
                    </ToSText>
                </li>
                <li>
                    <ToSText variant="h6" font={true}>
                        Your Contributions do not violate any applicable law, regulation, or rule.
                    </ToSText>
                </li>
                <li>
                    <ToSText variant="h6" font={true}>
                        Your Contributions do not violate the privacy or publicity rights of any third
                        party.
                    </ToSText>
                </li>
                <li>
                    <ToSText variant="h6" font={true}>
                        Your Contributions do not violate any applicable law concerning child
                        pornography, or otherwise intended to protect the health or well-being of minors.
                    </ToSText>
                </li>
                <li>
                    <ToSText variant="h6" font={true}>
                        Your Contributions do not include any offensive comments that are connected
                        to race, national origin, gender, sexual preference, or physical handicap.
                    </ToSText>
                </li>
                <li>
                    <ToSText variant="h6" font={true}>
                        Your Contributions do not otherwise violate, or link to material that violates, any
                        provision of these Terms of Service, or any applicable law or regulation.
                    </ToSText>
                </li>
                <li>
                    <ToSText variant="h6" font={true}>
                        You acknowledge and agree that any questions, comments, suggestions, ideas,
                        feedback, or other information regarding the Site ("Submissions" or "Contributions") provided by you to
                        us are non-confidential and shall become our sole property. We shall own exclusive
                        rights, including all intellectual property rights, and shall be entitled to the unrestricted
                        use and dissemination of these Submissions for any lawful purpose, commercial or
                        otherwise, without acknowledgment or compensation to you. You hereby waive all
                        moral rights to any such Submissions, and you hereby warrant that any such
                        Submissions are original with you or that you have the right to submit such
                        Submissions. You agree there shall be no recourse against us for any alleged or
                        actual infringement or misappropriation of any proprietary right in your Submissions.
                    </ToSText>
                </li>
            </ul>
            <ToSText variant="h6" font={true}>
                Any use of the Site in violation of the foregoing violates these Terms of Service and may
                result in, among other things, termination or suspension of your rights to use the Site.
            </ToSText>

        </>
    );
}
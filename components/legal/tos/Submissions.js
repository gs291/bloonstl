import {ToSText, ToSTitle} from "./TermsOfService";

export default function Submissions({tag}) {

    return (
        <>
            <ToSTitle id={tag.href} variant="h4">
                {tag.title}
            </ToSTitle>
            <ToSText variant="h6" font={true}>
                You acknowledge and agree that any questions, comments, suggestions, ideas,
                feedback, or other information regarding the Site ("Submissions") provided by you to
                us are non-confidential and shall become our sole property. We shall own exclusive
                rights, including all intellectual property rights, and shall be entitled to the unrestricted
                use and dissemination of these Submissions for any lawful purpose, commercial or
                otherwise, without acknowledgment or compensation to you. You hereby waive all
                moral rights to any such Submissions, and you hereby warrant that any such
                Submissions are original with you or that you have the right to submit such
                Submissions. You agree there shall be no recourse against us for any alleged or
                actual infringement or misappropriation of any proprietary right in your Submissions.
            </ToSText>
        </>
    );
}

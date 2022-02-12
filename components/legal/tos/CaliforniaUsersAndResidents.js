import LegalText from "../LegalText";
import LegalTitle from "../LegalTitle";


/**
 * Legal ToS "California users and residents" section
 *
 * @param {Object} props Component props
 * @param {Object<{href: string, title: string}>} props.tag Tag used for table of contents
 */
export default function CaliforniaUsersAndResidents({tag}) {
    return (
        <>
            <LegalTitle id={tag.href} variant="h3">
                {tag.title}
            </LegalTitle>
            <LegalText variant="body1" font={true}>
                If any complaint with us is not satisfactorily resolved, you can contact the Complaint
                Assistance Unit of the Division of Consumer Services of the California Department of
                Consumer Affairs in writing at 1625 North Market Blvd., Suite N 112, Sacramento,
                California 95834 or by telephone at (800) 952-5210 or (916) 445-1254
            </LegalText>
        </>
    );
}
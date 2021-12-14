import {ToSText, ToSTitle} from "./TermsOfService";

export default function CaliforniaUsersAndResidents({tag}) {
    return (
        <>
            <ToSTitle id={tag.href} variant="h3">
                {tag.title}
            </ToSTitle>
            <ToSText variant="body1" font={true}>
                If any complaint with us is not satisfactorily resolved, you can contact the Complaint
                Assistance Unit of the Division of Consumer Services of the California Department of
                Consumer Affairs in writing at 1625 North Market Blvd., Suite N 112, Sacramento,
                California 95834 or by telephone at (800) 952-5210 or (916) 445-1254
            </ToSText>
        </>
    );
}
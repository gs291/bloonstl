import {ToSText, ToSTitle} from "./TermsOfService";

export default function Corrections({tag}) {

    return (
        <>
            <ToSTitle id={tag.href} variant="h4">
                {tag.title}
            </ToSTitle>
            <ToSText variant="h6" font={true}>
                There may be information on the Site that contains typographical errors,
                inaccuracies, or omissions, including descriptions, pricing, availability, and various
                other information. We reserve the right to correct any errors, inaccuracies, or
                omissions and to change or update the information on the Site at any time, without
                prior notice.
            </ToSText>
        </>
    );
}
import {ToSText, ToSTitle} from "./TermsOfService";

export default function GoverningLaw({tag}) {

    return (
        <>
            <ToSTitle id={tag.href} variant="h3">
                {tag.title}
            </ToSTitle>
            <ToSText variant="h6" font={true}>
                These Terms of Service and your use of the Site are governed by and construed in
                accordance with the laws of the State of Oregon applicable to agreements made and
                to be entirely performed within the State of Oregon, without regard to its conflict of
                law principles.
            </ToSText>
        </>
    );
}
import {ToSText, ToSTitle} from "./TermsOfService";

export default function ContactUs({tag}) {

    return (
        <>
            <ToSTitle id={tag.href} variant="h3">
                {tag.title}
            </ToSTitle>
            <ToSText variant="body1" font={true}>
                In order to resolve a complaint regarding the Site or to receive further information
                regarding use of the Site, please contact us at: bloonstl@gmail.com
            </ToSText>
        </>
    );
}
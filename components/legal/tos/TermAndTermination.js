import {ToSText, ToSTitle} from "./TermsOfService";

export default function TermAndTermination({tag}) {

    return (
        <>
            <ToSTitle id={tag.href} variant="h4">
                {tag.title}
            </ToSTitle>
            <ToSText variant="h6" font={true}>
                These Terms of Service shall remain in full force and effect while you use the Site.
                WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS OF SERVICE, WE
                RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE
                OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE (INCLUDING
                BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR
                FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY
                REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE TERMS
                OF SERVICE OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE
                YOUR USE OR PARTICIPATION IN THE SITE OR DELETE ANY CONTENT OR
                INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR
                SOLE DISCRETION.
            </ToSText>
            <ToSText variant="h6" font={true}>
                If we terminate or suspend your account for any reason, you are prohibited from
                registering and creating a new account under your name, a fake or borrowed name,
                or the name of any third party, even if you may be acting on behalf of the third party.
                In addition to terminating or suspending your account, we reserve the right to take
                appropriate legal action, including without limitation pursuing civil, criminal, and
                injunctive redress.
            </ToSText>

        </>
    );
}
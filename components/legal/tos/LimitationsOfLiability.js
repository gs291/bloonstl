import {ToSText, ToSTitle} from "./TermsOfService";

export default function LimitationsOfLiability({tag}) {

    return (
        <>
            <ToSTitle id={tag.href} variant="h3">
                {tag.title}
            </ToSTitle>
            <ToSText variant="body1" font={true}>
                IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE
                LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT,
                CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE
                DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR
                OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF WE HAVE
                BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </ToSText>
        </>
    );
}
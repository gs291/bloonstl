import styled from "@emotion/styled";

import LegalText from "../LegalText";
import LegalTitle from "../LegalTitle";
import LegalTable from "../LegalTable";

const head = [
    "Partner",
    "Cookie Info"
];

const rows = [
    { "name": "Google AdSense", "columns": ["https://policies.google.com/technologies/ads"]},
    { "name": "Google Analytics", "columns": ["https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage"]}
];

const CookieTable = styled(LegalTable)`
  margin-top: 30px;
  margin-bottom: 30px;
`;

export default function ThirdPartyCookies({tag}) {

    return (
        <>
            <LegalTitle id={tag.href} variant="h3">
                {tag.title}
            </LegalTitle>
            <LegalText variant="body1" font={true}>
                We operate our ads program in partnership with third party vendors.
                As part of the operation of our ads program, we use cookies to collect certain information.
                Advertising cookies enable us and our partners to serve ads and to personalize those ads based on
                information like visits to our sites and other sites on the Internet. Below is a representative list
                of our advertising program partners, along with information on the cookies that that each partner sets.
                The partners we work with change from time to time, and this is not an exhaustive list.
                Your choices to control cookies related to our ads program are described below.
            </LegalText>
            <CookieTable head={head} rows={rows}/>
        </>
    );
}
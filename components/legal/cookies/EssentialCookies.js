import {styled} from "@mui/material/styles";

import LegalText from "../LegalText";
import LegalTitle from "../LegalTitle";
import LegalTable from "../LegalTable";


const head = [
    "Cookie",
    "Purpose"
];

const rows = [
    { "name": "cookie_consent", "columns": ["Remembers the state of user acceptance to the cookie banner. Only set when the user clicks Accept, Agree, Ok or close box (X)."]}
];

const CookieTable = styled(LegalTable)`
  margin-top: 30px;
  margin-bottom: 30px;
`;

/**
 * Legal cookies "essential cookies" section
 *
 * @param {Object} props Component props
 * @param {Object<{href: string, title: string}>} props.tag Tag used for table of contents
 */
export default function EssentialCookies({tag}) {

    return (
        <>
            <LegalTitle id={tag.href} variant="h3">
                {tag.title}
            </LegalTitle>
            <LegalText variant="body1" font={true}>
                These cookies are strictly necessary to provide you with services available through our websites
                and to use some of its features, such as access to secure areas.
            </LegalText>
            <CookieTable head={head} rows={rows}/>
        </>
    );
}
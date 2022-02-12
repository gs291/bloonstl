import LegalText from "../LegalText";
import LegalTitle from "../LegalTitle";


/**
 * Legal cookies "what are cookies?" section
 *
 * @param {Object} props Component props
 * @param {Object<{href: string, title: string}>} props.tag Tag used for table of contents
 */
export default function WhatAreCookies({tag}) {

    return (
        <>
            <LegalTitle id={tag.href} variant="h3">
                {tag.title}
            </LegalTitle>
            <LegalText variant="body1" font={true}>
                Cookies are small data files that are placed on your computer or mobile device when
                you visit a website. Cookies are widely used by website owners in order to make their
                websites work, or to work more efficiently, as well as to provide reporting information.
            </LegalText>
            <LegalText variant="body1" font={true}>
                Cookies set by the website owner (in this case, bloonstl) are called "first party
                cookies". Cookies set by parties other than the website owner are called "third party
                cookies". Third party cookies enable third party features or functionality to be
                provided on or through the website (e.g. like advertising, interactive content and
                analytics). The parties that set these third party cookies can recognize your computer
                both when it visits the website in question and also when it visits certain other
                websites.
            </LegalText>
        </>
    );
}
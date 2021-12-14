import {ToSText, ToSTitle} from "./TermsOfService";

export default function ThirdPartWebsiteAndContent({tag}) {

    return (
        <>
            <ToSTitle id={tag.href} variant="h4">
                {tag.title}
            </ToSTitle>
            <ToSText variant="h6" font={true}>
                The Site may contain (or you may be sent via the Site) links to other websites ("ThirdParty Websites") as well as articles, photographs, text, graphics, pictures, designs,
                music, sound, video, information, applications, software, and other content or items
                belonging to or originating from third parties ("Third-Party Content"). Such Third-Party Websites and Third-Party Content are not investigated, monitored, or checked for
                accuracy, appropriateness, or completeness by us, and we are not responsible for
                any Third-Party Websites accessed through the Site or any Third-Party Content
                posted on, available through, or installed from the Site, including the content,
                accuracy, offensiveness, opinions, reliability, privacy practices, or other policies of or
                contained in the Third-Party Websites or the Third-Party Content. Inclusion of, linking
                to, or permitting the use or installation of any Third-Party Websites or any Third-Party
                Content does not imply approval or endorsement thereof by us. If you decide to leave
                the Site and access the Third-Party Websites or to use or install any Third-Party
                Content, you do so at your own risk, and you should be aware these Terms of Service no
                longer govern. You should review the applicable terms and policies, including privacy
                and data gathering practices, of any website to which you navigate from the Site or
                relating to any applications you use or install from the Site. Any purchases you make
                through Third-Party Websites will be through other websites and from other
                companies, and we take no responsibility whatsoever in relation to such purchases
                which are exclusively between you and the applicable third party. You agree and
                acknowledge that we do not endorse the products or services offered on Third-Party Websites and you shall hold us harmless from any harm caused by your purchase of
                such products or services. Additionally, you shall hold us harmless from any losses
                sustained by you or harm caused to you relating to or resulting in any way from any
                Third-Party Content or any contact with Third-Party Websites.
            </ToSText>
        </>
    );
}
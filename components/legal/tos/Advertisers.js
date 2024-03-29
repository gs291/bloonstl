import LegalText from "../LegalText";
import LegalTitle from "../LegalTitle";


/**
 * Legal ToS "advertisers" section
 *
 * @param {Object} props Component props
 * @param {Object<{href: string, title: string}>} props.tag Tag used for table of contents
 */
export default function Advertisers({tag}) {

    return (
        <>
            <LegalTitle id={tag.href} variant="h3">
                {tag.title}
            </LegalTitle>
            <LegalText variant="body1" font={true}>
                We allow advertisers to display their advertisements and other information in certain
                areas of the Site, such as sidebar advertisements or banner advertisements. If you
                are an advertiser, you shall take full responsibility for any advertisements you place
                on the Site and any services provided on the Site or products sold through those
                advertisements. Further, as an advertiser, you warrant and represent that you
                possess all rights and authority to place advertisements on the Site, including, but not
                limited to, intellectual property rights, publicity rights, and contractual rights. We
                simply provide the space to place such advertisements, and we have no other
                relationship with advertisers.
            </LegalText>
        </>
    );
}
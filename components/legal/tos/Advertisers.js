import {ToSText, ToSTitle} from "./TermsOfService";

export default function Advertisers({tag}) {

    return (
        <>
            <ToSTitle id={tag.href} variant="h4">
                {tag.title}
            </ToSTitle>
            <ToSText variant="h6" font={true}>
                We allow advertisers to display their advertisements and other information in certain
                areas of the Site, such as sidebar advertisements or banner advertisements. If you
                are an advertiser, you shall take full responsibility for any advertisements you place
                on the Site and any services provided on the Site or products sold through those
                advertisements. Further, as an advertiser, you warrant and represent that you
                possess all rights and authority to place advertisements on the Site, including, but not
                limited to, intellectual property rights, publicity rights, and contractual rights. We
                simply provide the space to place such advertisements, and we have no other
                relationship with advertisers.
            </ToSText>
        </>
    );
}
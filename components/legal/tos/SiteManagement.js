import {ToSText, ToSTitle} from "./TermsOfService";

export default function SiteManagement({tag}) {

    return (
        <>
            <ToSTitle id={tag.href} variant="h4">
                {tag.title}
            </ToSTitle>
            <ToSText variant="h6" font={true}>
                We reserve the right, but not the obligation, to: (1) monitor the Site for violations of
                these Terms of Service; (2) take appropriate legal action against anyone who, in our sole
                discretion, violates the law or these Terms of Service, including without limitation,
                reporting such user to law enforcement authorities; (3) in our sole discretion and
                without limitation, refuse, restrict access to, limit the availability of, or disable (to the
                extent technologically feasible) any of your Contributions or any portion thereof; (4) in
                our sole discretion and without limitation, notice, or liability, to remove from the Site or
                otherwise disable all files and content that are excessive in size or are in any way
                burdensome to our systems; and (5) otherwise manage the Site in a manner
                designed to protect our rights and property and to facilitate the proper functioning of the Site.
            </ToSText>
        </>
    );
}
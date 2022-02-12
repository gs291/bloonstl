import LegalText from "../LegalText";
import LegalTitle from "../LegalTitle";
import LegalUList from "../LegalUList";


/**
 * Legal privacy "information on sharing" section
 *
 * @param {Object} props Component props
 * @param {Object<{href: string, title: string}>} props.tag Tag used for table of contents
 */
export default function InformationSharing({tag}) {

    return (
        <>
            <LegalTitle variant="h4" id={tag.href}>
                WILL YOUR INFORMATION BE SHARED WITH ANYONE?
            </LegalTitle>
            <LegalText variant="body1" font={true}>
                <strong>In Short:</strong> We only share information with your consent, to comply with laws, to
                provide you with services, to protect your rights, or to fulfill business obligations.
            </LegalText>
            <LegalText variant="body1" font={true}>
                We may process or share your data that we hold based on the following legal basis:
                More specifically, we may need to process your data or share your personal
                information in the following situations:
            </LegalText>
            <LegalUList>
                <li>
                    <LegalText variant="body1" font={true}>
                        <strong>Business Transfers</strong>. We may share or transfer your information in connection
                        with, or during negotiations of, any merger, sale of company assets, financing,
                        or acquisition of all or a portion of our business to another company
                    </LegalText>
                </li>
                <li>
                    <LegalText variant="body1" font={true}>
                        <strong>Affiliates</strong>. We may share your information with our affiliates, in which case we
                        will require those affiliates to honor this privacy notice. Affiliates include our
                        parent company and any subsidiaries, joint venture partners or other
                        companies that we control or that are under common control with us.
                    </LegalText>
                </li>
                <li>
                    <LegalText variant="body1" font={true}>
                        <strong>Business Partners</strong>. We may share your information with our business
                        partners to offer you certain products, services or promotions.
                    </LegalText>
                </li>
                <li>
                    <LegalText variant="body1" font={true}>
                        <strong>Other Users</strong>. When you share personal information or otherwise interact with
                        public areas of the , such personal information may be viewed by all users and
                        may be publicly made available outside the in perpetuity. If you interact with
                        other users of our and register for our through a social network (such as
                        Facebook), your contacts on the social network will see your name, profile
                        photo, and descriptions of your activity. Similarly, other users will be able to
                        view descriptions of your activity, communicate with you within our , and view
                        your profile.
                    </LegalText>
                </li>
            </LegalUList>
        </>
    );
}
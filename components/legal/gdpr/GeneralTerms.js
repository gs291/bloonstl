import LegalOList from "../LegalOList";
import LegalListItem from "../LegalListItem";
import TowerText from "../../tower/TowerText";


/**
 * Legal GDPR "general terms" section
 *
 * @param {Object} props Component props
 * @param {Object<{href: string, title: string}>} props.tag Tag used for table of contents
 */
export default function GeneralTerms({tag}) {

    return (
        <>
            <LegalOList start={11} id={tag.href}>
                <LegalListItem>
                    <TowerText variant="body1" font={true}>
                        <strong>General Terms</strong>
                    </TowerText>
                    <LegalOList start={11}>
                        <LegalListItem>
                            <TowerText variant="body1" font={true}>
                                <strong>Confidentiality</strong>. Each Party must keep this Agreement and information it
                                receives about the other Party and its business in connection with this
                                Agreement (“<strong>Confidential Information</strong>”) confidential and must not use
                                or disclose that Confidential Information without the prior written consent
                                of the other Party except to the extent that:
                            </TowerText>
                            <TowerText variant="body1" font={true}>
                                (a) disclosure is required by law;
                            </TowerText>
                            <TowerText variant="body1" font={true}>
                                (b) the relevant information is already in the public domain.
                            </TowerText>
                        </LegalListItem>
                        <LegalListItem>
                            <TowerText variant="body1" font={true}>
                                <strong>Notices</strong>. All notices and communications given under this Agreement
                                must be in writing and will be delivered personally, sent by post or sent by
                                email to the address or email address set out in the heading of this
                                Agreement at such other address as notified from time to time by the
                                Parties changing address.
                            </TowerText>
                        </LegalListItem>
                    </LegalOList>
                </LegalListItem>
            </LegalOList>

        </>
    );
}
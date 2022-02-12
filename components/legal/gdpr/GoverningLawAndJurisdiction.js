import LegalOList from "../LegalOList";
import LegalListItem from "../LegalListItem";
import TowerText from "../../tower/TowerText";


/**
 * Legal GDPR "governing law and jurisdiction" section
 *
 * @param {Object} props Component props
 * @param {Object<{href: string, title: string}>} props.tag Tag used for table of contents
 */
export default function GoverningLawAndJurisdiction({tag}) {

    return (
        <>
            <LegalOList start={12} id={tag.href}>
                <LegalListItem>
                    <TowerText variant="body1" font={true}>
                        <strong>Governing Law and Jurisdiction</strong>
                    </TowerText>
                    <LegalOList start={12}>
                        <LegalListItem>
                            <TowerText variant="body1" font={true}>
                                Upon receipt of any legally binding order or request for disclosure of Personal Data by a
                                competent government authority or law enforcement authority, bloonstl shall use reasonable
                                efforts to redirect the relevant authority to Customer pursuant to Clause General Terms of the Standard
                                Contractual Clauses. Customer agrees that bloonstl can provide information to such relevant
                                authority as reasonably necessary to redirect the order or request. In the event bloonstl is
                                prohibited by applicable laws from notifying Customer of the relevant authority’s request or
                                order, bloonstl shall use reasonable efforts to challenge such request or order.
                            </TowerText>
                        </LegalListItem>
                    </LegalOList>
                </LegalListItem>
            </LegalOList>

        </>
    );
}
import LegalOList from "../LegalOList";
import LegalListItem from "../LegalListItem";
import TowerText from "../../tower/TowerText";


/**
 * Legal GDPR "audit rights" section
 *
 * @param {Object} props Component props
 * @param {Object<{href: string, title: string}>} props.tag Tag used for table of contents
 */
export default function AuditRights({tag}) {

    return (
        <>
            <LegalOList start={9} id={tag.href}>
                <LegalListItem>
                    <TowerText variant="body1" font={true}>
                        <strong>Audit rights</strong>
                    </TowerText>
                    <LegalOList start={9}>
                        <LegalListItem>
                            <TowerText variant="body1" font={true}>
                                Subject to this section 10, Processor shall make available to the Company
                                on request all information necessary to demonstrate compliance with this
                                Agreement, and shall allow for and contribute to audits, including
                                inspections, by the Company or an auditor mandated by the Company in
                                relation to the Processing of the Company Personal Data by the
                                Contracted Processors.
                            </TowerText>
                        </LegalListItem>
                        <LegalListItem>
                            <TowerText variant="body1" font={true}>
                                Information and audit rights of the Company only arise under section 10.1
                                to the extent that the Agreement does not otherwise give them
                                information and audit rights meeting the relevant requirements of Data
                                Protection Law.
                            </TowerText>
                        </LegalListItem>
                    </LegalOList>
                </LegalListItem>
            </LegalOList>
        </>
    );
}
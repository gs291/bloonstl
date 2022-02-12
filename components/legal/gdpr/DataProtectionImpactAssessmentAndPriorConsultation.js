import LegalOList from "../LegalOList";
import LegalListItem from "../LegalListItem";
import TowerText from "../../tower/TowerText";


/**
 * Legal GDPR "data protection impact assessment and prior consultation" section
 *
 * @param {Object} props Component props
 * @param {Object<{href: string, title: string}>} props.tag Tag used for table of contents
 */
export default function DataProtectionImpactAssessmentAndPriorConsultation({tag}) {

    return (
        <>
            <LegalOList start={7} id={tag.href}>
                <LegalListItem>
                    <TowerText variant="body1" font={true}>
                        <strong>Data Protection Impact Assessment and Prior Consultation</strong>
                    </TowerText>
                    <TowerText variant="body1" font={true}>
                        Processor shall provide reasonable assistance to the Company with any
                        data protection impact assessments, and prior consultations with
                        Supervising Authorities or other competent data privacy authorities, which
                        Company reasonably considers to be required by article 35 or 36 of the
                        GDPR or equivalent provisions of any other Data Protection Law, in each
                        case solely in relation to Processing of Company Personal Data by, and
                        taking into account the nature of the Processing and information available
                        to, the Contracted Processors.
                    </TowerText>
                </LegalListItem>
            </LegalOList>
        </>
    );
}
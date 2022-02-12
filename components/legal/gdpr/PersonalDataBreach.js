import LegalOList from "../LegalOList";
import LegalListItem from "../LegalListItem";
import TowerText from "../../tower/TowerText";


/**
 * Legal GDPR "personal data breach" section
 *
 * @param {Object} props Component props
 * @param {Object<{href: string, title: string}>} props.tag Tag used for table of contents
 */
export default function PersonalDataBreach({tag}) {

    return (
        <>
            <LegalOList start={6} id={tag.href}>
                <LegalListItem>
                    <TowerText variant="body1" font={true}>
                        <strong>Personal Data Breach</strong>
                    </TowerText>
                    <LegalOList start={6}>
                        <LegalListItem>
                            <TowerText variant="body1" font={true}>
                                Processor shall notify Company without undue delay upon Processor
                                becoming aware of a Personal Data Breach affecting Company Personal
                                Data, providing Company with sufficient information to allow the Company
                                to meet any obligations to report or inform Data Subjects of the Personal
                                Data Breach under the Data Protection Laws.
                            </TowerText>
                        </LegalListItem>
                        <LegalListItem>
                            <TowerText variant="body1" font={true}>
                                Processor shall co-operate with the Company and take reasonable
                                commercial steps as are directed by Company to assist in the
                                investigation, mitigation and remediation of each such Personal Data
                                Breach.
                            </TowerText>
                        </LegalListItem>
                    </LegalOList>
                </LegalListItem>
            </LegalOList>

        </>
    );
}
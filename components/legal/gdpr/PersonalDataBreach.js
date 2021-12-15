import TowerText from "../../tower/TowerText";
import {GDPRItem, GDPRList} from "./GDPRDataProcessingAgreement";

export default function PersonalDataBreach({tag}) {

    return (
        <>
            <GDPRList start={6} id={tag.href}>
                <GDPRItem>
                    <TowerText variant="body1" font={true}>
                        <strong>Personal Data Breach</strong>
                    </TowerText>
                    <GDPRList start={6}>
                        <GDPRItem>
                            <TowerText variant="body1" font={true}>
                                Processor shall notify Company without undue delay upon Processor
                                becoming aware of a Personal Data Breach affecting Company Personal
                                Data, providing Company with sufficient information to allow the Company
                                to meet any obligations to report or inform Data Subjects of the Personal
                                Data Breach under the Data Protection Laws.
                            </TowerText>
                        </GDPRItem>
                        <GDPRItem>
                            <TowerText variant="body1" font={true}>
                                Processor shall co-operate with the Company and take reasonable
                                commercial steps as are directed by Company to assist in the
                                investigation, mitigation and remediation of each such Personal Data
                                Breach.
                            </TowerText>
                        </GDPRItem>
                    </GDPRList>
                </GDPRItem>
            </GDPRList>

        </>
    );
}
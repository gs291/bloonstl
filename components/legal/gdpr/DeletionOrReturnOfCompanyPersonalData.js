import TowerText from "../../tower/TowerText";
import {GDPRItem, GDPRList} from "./GDPRDataProcessingAgreement";

export default function DeletionOrReturnOfCompanyPersonalData({tag}) {

    return (
        <>
            <GDPRList start={8} id={tag.href}>
                <GDPRItem>
                    <TowerText variant="body1" font={true}>
                        <strong>Deletion or return of Company Personal Data</strong>
                    </TowerText>
                    <GDPRList start={8}>
                        <GDPRItem>
                            <TowerText variant="body1" font={true}>
                                Subject to this section 9 Processor shall promptly and in any event within
                                10 business days of the date of cessation of any Services involving the
                                Processing of Company Personal Data (the "<strong>Cessation Date</strong>"), delete and
                                procure the deletion of all copies of those Company Personal Data.
                            </TowerText>
                        </GDPRItem>
                        <GDPRItem>
                            <TowerText variant="body1" font={true}>
                                Processor shall provide written certification to Company that it has fully
                                complied with this section 9 within 10 business days of the Cessation
                                Date.
                            </TowerText>
                        </GDPRItem>
                    </GDPRList>
                </GDPRItem>
            </GDPRList>
        </>
    );
}
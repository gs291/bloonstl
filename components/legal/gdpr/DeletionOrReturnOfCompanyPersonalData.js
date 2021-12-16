import LegalOList from "../LegalOList";
import LegalListItem from "../LegalListItem";
import TowerText from "../../tower/TowerText";

export default function DeletionOrReturnOfCompanyPersonalData({tag}) {

    return (
        <>
            <LegalOList start={8} id={tag.href}>
                <LegalListItem>
                    <TowerText variant="body1" font={true}>
                        <strong>Deletion or return of Company Personal Data</strong>
                    </TowerText>
                    <LegalOList start={8}>
                        <LegalListItem>
                            <TowerText variant="body1" font={true}>
                                Subject to this section 9 Processor shall promptly and in any event within
                                10 business days of the date of cessation of any Services involving the
                                Processing of Company Personal Data (the "<strong>Cessation Date</strong>"), delete and
                                procure the deletion of all copies of those Company Personal Data.
                            </TowerText>
                        </LegalListItem>
                        <LegalListItem>
                            <TowerText variant="body1" font={true}>
                                Processor shall provide written certification to Company that it has fully
                                complied with this section 9 within 10 business days of the Cessation
                                Date.
                            </TowerText>
                        </LegalListItem>
                    </LegalOList>
                </LegalListItem>
            </LegalOList>
        </>
    );
}
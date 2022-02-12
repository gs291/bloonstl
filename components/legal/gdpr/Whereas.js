import LegalOList from "../LegalOList";
import LegalListItem from "../LegalListItem";
import TowerText from "../../tower/TowerText";


/**
 * Legal GDPR "whereas" section
 */
export default function Whereas() {

    return (
        <>
            <TowerText variant="body1" font={true}>
                WHEREAS
            </TowerText>
            <LegalOList>
                <LegalListItem>
                    <TowerText variant="body1" font={true}>
                        The Company acts as a Data Controller.
                    </TowerText>
                </LegalListItem>
                <LegalListItem>
                    <TowerText variant="body1" font={true}>
                        The Company wishes to subcontract certain Services, which imply the
                        processing of personal data, to the Data Processor.
                    </TowerText>
                </LegalListItem>
                <LegalListItem>
                    <TowerText variant="body1" font={true}>
                        The Parties seek to implement a data processing agreement that complies
                        with the requirements of the current legal framework in relation to data
                        processing and with the Regulation (EU) 2016/679 of the European
                        Parliament and of the Council of 27 April 2016 on the protection of natural
                        persons with regard to the processing of personal data and on the free
                        movement of such data, and repealing Directive 95/46/EC (General Data
                        Protection Regulation).
                    </TowerText>
                </LegalListItem>
                <LegalListItem>
                    <TowerText variant="body1" font={true}>
                        The Parties wish to lay down their rights and obligations.
                    </TowerText>
                </LegalListItem>
            </LegalOList>

        </>
    );
}
import TowerText from "../../tower/TowerText";
import {GDPRItem, GDPRList} from "./GDPRDataProcessingAgreement";

export default function ProcessingOfCompanyPersonalData({tag}) {

    return (
        <>
            <GDPRList start={1}  id={tag.href}>
                <GDPRItem>
                    <TowerText variant="body1" font={true}>
                        <strong>Processing of Company Personal Data</strong>
                    </TowerText>
                    <GDPRList>
                        <GDPRItem>
                            <TowerText variant="body1" font={true}>
                                Processor shall:
                            </TowerText>
                            <GDPRList>
                                <GDPRItem>
                                    <TowerText variant="body1" font={true}>
                                        comply with all applicable Data Protection Laws in the Processing
                                        of Company Personal Data; and
                                    </TowerText>
                                </GDPRItem>
                                <GDPRItem>
                                    <TowerText variant="body1" font={true}>
                                        not Process Company Personal Data other than on the relevant
                                        Company’s documented instructions.
                                    </TowerText>
                                </GDPRItem>
                            </GDPRList>
                        </GDPRItem>
                        <GDPRItem>
                            <TowerText variant="body1" font={true}>
                                The Company instructs Processor to process Company Personal Data.
                            </TowerText>
                        </GDPRItem>
                    </GDPRList>
                </GDPRItem>
            </GDPRList>

        </>
    );
}
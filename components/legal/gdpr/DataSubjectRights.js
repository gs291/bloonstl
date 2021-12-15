import TowerText from "../../tower/TowerText";
import {GDPRItem, GDPRList} from "./GDPRDataProcessingAgreement";

export default function DataSubjectRights({tag}) {

    return (
        <>
            <GDPRList start={5} id={tag.href}>
                <GDPRItem>
                    <TowerText variant="body1" font={true}>
                        <strong>Data Subject Rights</strong>
                    </TowerText>
                    <GDPRList start={5}>
                        <GDPRItem>
                            <TowerText variant="body1" font={true}>
                                Taking into account the nature of the Processing, Processor shall assist
                                the Company by implementing appropriate technical and organisational
                                measures, insofar as this is possible, for the fulfilment of the Company
                                obligations, as reasonably understood by Company, to respond to
                                requests to exercise Data Subject rights under the Data Protection Laws.
                            </TowerText>
                        </GDPRItem>
                        <GDPRItem>
                            <TowerText variant="body1" font={true}>
                                Processor shall:
                            </TowerText>
                            <GDPRList start={5}>
                                <GDPRItem>
                                    <TowerText variant="body1" font={true}>
                                        promptly notify Company if it receives a request from a Data
                                        Subject under any Data Protection Law in respect of Company
                                        Personal Data; and
                                    </TowerText>
                                </GDPRItem>
                                <GDPRItem>
                                    <TowerText variant="body1" font={true}>
                                        ensure that it does not respond to that request except on the
                                        documented instructions of Company or as required by
                                        Applicable Laws to which the Processor is subject, in which case
                                        Processor shall to the extent permitted by Applicable Laws
                                        inform Company of that legal requirement before the Contracted
                                        Processor responds to the request.
                                    </TowerText>
                                </GDPRItem>
                            </GDPRList>
                        </GDPRItem>
                    </GDPRList>
                </GDPRItem>
            </GDPRList>
        </>
    );
}
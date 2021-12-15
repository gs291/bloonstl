import TowerText from "../../tower/TowerText";
import {GDPRItem, GDPRList} from "./GDPRDataProcessingAgreement";

export default function ProcessorPersonnel({tag}) {

    return (
        <>
            <GDPRList start={2}  id={tag.href}>
                <GDPRItem>
                    <TowerText variant="body1" font={true}>
                        <strong>Processor Personnel</strong>
                    </TowerText>
                    <TowerText variant="body1" font={true}>
                        Processor shall take reasonable steps to ensure the reliability of any
                        employee, agent or contractor of any Contracted Processor who may have
                        access to the Company Personal Data, ensuring in each case that access
                        is strictly limited to those individuals who need to know / access the
                        relevant Company Personal Data, as strictly necessary for the purposes of
                        the Principal Agreement, and to comply with Applicable Laws in the
                        context of that individual's duties to the Contracted Processor, ensuring
                        that all such individuals are subject to confidentiality undertakings or
                        professional or statutory obligations of confidentiality.
                    </TowerText>
                </GDPRItem>
            </GDPRList>

        </>
    );
}
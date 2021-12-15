import TowerText from "../../tower/TowerText";
import {GDPRItem, GDPRList} from "./GDPRDataProcessingAgreement";

export default function Subprocessing({tag}) {

    return (
        <>
            <GDPRList start={4} id={tag.href}>
                <GDPRItem>
                    <TowerText variant="body1" font={true}>
                        <strong>Subprocessing</strong>
                    </TowerText>
                    <GDPRList start={4}>
                        <GDPRItem>
                            <TowerText variant="body1" font={true}>
                                Processor shall not appoint (or disclose any Company Personal Data to)
                                any Subprocessor unless required or authorized by the Company.
                            </TowerText>
                        </GDPRItem>
                    </GDPRList>
                </GDPRItem>
            </GDPRList>

        </>
    );
}
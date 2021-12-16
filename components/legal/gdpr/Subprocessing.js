import LegalOList from "../LegalOList";
import LegalListItem from "../LegalListItem";
import TowerText from "../../tower/TowerText";

export default function Subprocessing({tag}) {

    return (
        <>
            <LegalOList start={4} id={tag.href}>
                <LegalListItem>
                    <TowerText variant="body1" font={true}>
                        <strong>Subprocessing</strong>
                    </TowerText>
                    <LegalOList start={4}>
                        <LegalListItem>
                            <TowerText variant="body1" font={true}>
                                Processor shall not appoint (or disclose any Company Personal Data to)
                                any Subprocessor unless required or authorized by the Company.
                            </TowerText>
                        </LegalListItem>
                    </LegalOList>
                </LegalListItem>
            </LegalOList>

        </>
    );
}
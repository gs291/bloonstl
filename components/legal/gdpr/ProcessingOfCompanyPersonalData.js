import LegalOList from "../LegalOList";
import LegalListItem from "../LegalListItem";
import TowerText from "../../tower/TowerText";

export default function ProcessingOfCompanyPersonalData({tag}) {

    return (
        <>
            <LegalOList start={1}  id={tag.href}>
                <LegalListItem>
                    <TowerText variant="body1" font={true}>
                        <strong>Processing of Company Personal Data</strong>
                    </TowerText>
                    <LegalOList>
                        <LegalListItem>
                            <TowerText variant="body1" font={true}>
                                Processor shall:
                            </TowerText>
                            <LegalOList>
                                <LegalListItem>
                                    <TowerText variant="body1" font={true}>
                                        comply with all applicable Data Protection Laws in the Processing
                                        of Company Personal Data; and
                                    </TowerText>
                                </LegalListItem>
                                <LegalListItem>
                                    <TowerText variant="body1" font={true}>
                                        not Process Company Personal Data other than on the relevant
                                        Company’s documented instructions.
                                    </TowerText>
                                </LegalListItem>
                            </LegalOList>
                        </LegalListItem>
                        <LegalListItem>
                            <TowerText variant="body1" font={true}>
                                The Company instructs Processor to process Company Personal Data.
                            </TowerText>
                        </LegalListItem>
                    </LegalOList>
                </LegalListItem>
            </LegalOList>

        </>
    );
}
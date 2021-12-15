import LegalOList from "../LegalOList";
import LegalListItem from "../LegalListItem";
import TowerText from "../../tower/TowerText";


export default function Security({tag}) {

    return (
        <>
            <LegalOList start={3} id={tag.href}>
                <LegalListItem>
                    <TowerText variant="body1" font={true}>
                        <strong>Security</strong>
                    </TowerText>
                    <LegalOList start={3}>
                        <LegalListItem>
                            <TowerText variant="body1" font={true}>
                                Taking into account the state of the art, the costs of implementation and
                                the nature, scope, context and purposes of Processing as well as the risk
                                of varying likelihood and severity for the rights and freedoms of natural
                                persons, Processor shall in relation to the Company Personal Data
                                implement appropriate technical and organizational measures to ensure a
                                level of security appropriate to that risk, including, as appropriate, the
                                measures referred to in Article 32(1) of the GDPR.
                            </TowerText>
                        </LegalListItem>
                        <LegalListItem start={3}>
                            <TowerText variant="body1" font={true}>
                                In assessing the appropriate level of security, Processor shall take account
                                in particular of the risks that are presented by Processing, in particular
                                from a Personal Data Breach.
                            </TowerText>
                        </LegalListItem>
                    </LegalOList>
                </LegalListItem>
            </LegalOList>
        </>
    );
}
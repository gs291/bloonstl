import LegalOList from "../LegalOList";
import LegalListItem from "../LegalListItem";
import TowerText from "../../tower/TowerText";


/**
 * Legal GDPR "data transfer" section
 *
 * @param {Object} props Component props
 * @param {Object<{href: string, title: string}>} props.tag Tag used for table of contents
 */
export default function DataTransfer({tag}) {

    return (
        <>
            <LegalOList start={10} id={tag.href}>
                <LegalListItem>
                    <TowerText variant="body1" font={true}>
                        <strong>Data Transfer</strong>
                    </TowerText>
                    <LegalOList start={10}>
                        <LegalListItem>
                            <TowerText variant="body1" font={true}>
                                The Processor may not transfer or authorize the transfer of Data to
                                countries outside the EU and/or the European Economic Area (EEA)
                                without the prior written consent of the Company. If personal data
                                processed under this Agreement is transferred from a country within the
                                European Economic Area to a country outside the European Economic
                                Area, the Parties shall ensure that the personal data are adequately
                                protected. To achieve this, the Parties shall, unless agreed otherwise, rely
                                on EU approved standard contractual clauses for the transfer of personal
                                data.
                            </TowerText>
                        </LegalListItem>
                    </LegalOList>
                </LegalListItem>
            </LegalOList>
        </>
    );
}
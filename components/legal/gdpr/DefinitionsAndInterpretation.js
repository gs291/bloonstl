import LegalOList from "../LegalOList";
import LegalListItem from "../LegalListItem";
import TowerText from "../../tower/TowerText";


export default function DefinitionsAndInterpretation({tag}) {

    return (
        <>
            <LegalOList start={0} id={tag.href}>
                <LegalListItem>
                    <TowerText variant="body1" font={true}>
                        <strong>Definitions and Interpretation</strong>
                    </TowerText>
                    <LegalOList start={0}>
                        <LegalListItem>
                            <TowerText variant="body1" font={true}>
                                Unless otherwise defined herein, capitalized terms and expressions used
                                in this Agreement shall have the following meaning:
                            </TowerText>
                            <LegalOList start={0}>
                                <LegalListItem>
                                    <TowerText variant="body1" font={true}>
                                        <strong>"Agreement"</strong> means this Data Processing Agreement and all
                                        Schedules;
                                    </TowerText>
                                </LegalListItem>
                                <LegalListItem>
                                    <TowerText variant="body1" font={true}>
                                        <strong>"Company Personal Data"</strong> means any Personal Data
                                        Processed by a Contracted Processor on behalf of Company
                                        pursuant to or in connection with the Principal Agreement;
                                    </TowerText>
                                </LegalListItem>
                                <LegalListItem>
                                    <TowerText variant="body1" font={true}>
                                        <strong>"Contracted Processor"</strong> means a Subprocessor;
                                    </TowerText>
                                </LegalListItem>
                                <LegalListItem>
                                    <TowerText variant="body1" font={true}>
                                        <strong>"Data Protection Laws"</strong> means EU Data Protection Laws and,
                                        to the extent applicable, the data protection or privacy laws of
                                        any other country;
                                    </TowerText>
                                </LegalListItem>
                                <LegalListItem>
                                    <TowerText variant="body1" font={true}>
                                        <strong>"EEA"</strong> means the European Economic Area;
                                    </TowerText>
                                </LegalListItem>
                                <LegalListItem>
                                    <TowerText variant="body1" font={true}>
                                        <strong>"EU Data Protection Laws"</strong> means EU Directive 95/46/EC, as
                                        transposed into domestic legislation of each Member State and
                                        as amended, replaced or superseded from time to time,
                                        including by the GDPR and laws implementing or supplementing
                                        the GDPR;
                                    </TowerText>
                                </LegalListItem>
                                <LegalListItem>
                                    <TowerText variant="body1" font={true}>
                                        <strong>"GDPR"</strong> means EU General Data Protection Regulation
                                        2016/679;
                                    </TowerText>
                                </LegalListItem>
                                <LegalListItem>
                                    <TowerText variant="body1" font={true}>
                                        <strong>"Data Transfer"</strong> means
                                    </TowerText>
                                    <LegalOList start={0}>
                                        <LegalListItem>
                                            <TowerText variant="body1" font={true}>
                                                a transfer of Company Personal Data from the
                                                Company to a Contracted Processor; or
                                            </TowerText>
                                        </LegalListItem>
                                        <LegalListItem>
                                            <TowerText variant="body1" font={true}>
                                                an onward transfer of Company Personal Data from a
                                                Contracted Processor to a Subcontracted Processor, or
                                                between two establishments of a Contracted
                                                Processor,
                                            </TowerText>
                                        </LegalListItem>
                                    </LegalOList>
                                    <TowerText variant="body1" font={true}>
                                        in each case, where such transfer would be prohibited by Data
                                        Protection Laws (or by the terms of data transfer agreements
                                        put in place to address the data transfer restrictions of Data
                                        Protection Laws);
                                    </TowerText>
                                </LegalListItem>
                                <LegalListItem>
                                    <TowerText variant="body1" font={true}>
                                        <strong>"Services"</strong> means the online services the Company provides.
                                    </TowerText>
                                </LegalListItem>
                                <LegalListItem>
                                    <TowerText variant="body1" font={true}>
                                        <strong>"Subprocessor"</strong> means any person appointed by or on behalf of
                                        Processor to process Personal Data on behalf of the Company in
                                        connection with the Agreement.
                                    </TowerText>
                                </LegalListItem>
                            </LegalOList>
                        </LegalListItem>
                        <LegalListItem>
                            <TowerText variant="body1" font={true}>
                                The terms, "<strong>Commission</strong>", "<strong>Controller</strong>", "<strong>Data Subject</strong>", "
                                <strong>Member State</strong>", "<strong>Personal Data</strong>", "<strong>Personal Data Breach</strong>", "
                                <strong>Processing</strong>" and "<strong>Supervisory Authority</strong>" shall have the same meaning
                                as in the GDPR, and their cognate terms shall be construed accordingly.
                            </TowerText>
                        </LegalListItem>
                    </LegalOList>
                </LegalListItem>
            </LegalOList>
        </>
    );
}
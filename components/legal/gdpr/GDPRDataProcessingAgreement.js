import styled from "@emotion/styled";

import Whereas from "./Whereas";
import Security from "./Security";
import AuditRights from "./AuditRights";
import DataTransfer from "./DataTransfer";
import GeneralTerms from "./GeneralTerms";
import Subprocessing from "./Subprocessing";
import TowerText from "../../tower/TowerText";
import DataSubjectRights from "./DataSubjectRights";
import PersonalDataBreach from "./PersonalDataBreach";
import ProcessorPersonnel from "./ProcessorPersonnel";
import TableOfContents from "../../table-of-contents/TableOfContents";
import GoverningLawAndJurisdiction from "./GoverningLawAndJurisdiction";
import DefinitionsAndInterpretation from "./DefinitionsAndInterpretation";
import ProcessingOfCompanyPersonalData from "./ProcessingOfCompanyPersonalData";
import DeletionOrReturnOfCompanyPersonalData from "./DeletionOrReturnOfCompanyPersonalData";
import DataProtectionImpactAssessmentAndPriorConsultation from "./DataProtectionImpactAssessmentAndPriorConsultation";

export const GDPRList = styled.ol`
  counter-reset: item ${props => props.start};
`;

export const GDPRItem = styled.li`
  display: block;
  
  &:before {
    content: counters(item, ".") " ";
    counter-increment: item
  }
  
  & > p {
    display: inline;
    margin-left: 10px;
  }
`;

const GDPRContainer = styled.div`
  margin-top: 50px;
`;

const tags = [
    { "title": "Definitions and Interpretation", "href": "definitions-and-interpretation" },
    { "title": "Processing of Company Personal Data", "href": "processing-of-company-personal-data" },
    { "title": "Processor Personnel", "href": "processor-personnel" },
    { "title": "Security", "href": "security" },
    { "title": "Subprocessing", "href": "subprocessing" },
    { "title": "Data Subject Rights", "href": "data-subject-rights" },
    { "title": "Personal Data Breach", "href": "personal-data-breach" },
    { "title": "Data Protection Impact Assessment and Prior Consultation", "href": "data-protection-impact-assessment-and-prior-consultation" },
    { "title": "Deletion or return of Company Personal Data", "href": "deletion-or-return-of-company-personal-data" },
    { "title": "Audit rights", "href": "audit-rights" },
    { "title": "Data Transfer", "href": "data-transfer" },
    { "title": "General Terms", "href": "general-terms" },
    { "title": "Governing Law and Jurisdiction", "href": "governing-law-and-jurisdiction" }
];

export default function GDPRDataProcessingAgreement({}) {

    return (
        <>
            <TableOfContents tags={tags} />

            <GDPRContainer>
                <TowerText variant="body1" font={true}>
                    This Data Processing Agreement ("<strong>Agreement</strong>") forms part of the Contract for
                    Services ("<strong>Principal Agreement</strong>") between bloonstl (“we," “us," or “our”)
                    and bloonstl Terms of Service (The "<strong>Data Processor</strong>")
                    (together as the “<strong>Parties</strong>”)
                </TowerText>
                <Whereas />
                <TowerText variant="body1" font={true}>
                    IT IS AGREED AS FOLLOWS:
                </TowerText>
                <DefinitionsAndInterpretation               tag={tags[0]}/>
                <ProcessingOfCompanyPersonalData            tag={tags[1]}/>
                <ProcessorPersonnel                         tag={tags[2]}/>
                <Security                                   tag={tags[3]}/>
                <Subprocessing                              tag={tags[4]}/>
                <DataSubjectRights                          tag={tags[5]}/>
                <PersonalDataBreach                         tag={tags[6]}/>
                <DataProtectionImpactAssessmentAndPriorConsultation tag={tags[7]}/>
                <DeletionOrReturnOfCompanyPersonalData      tag={tags[8]}/>
                <AuditRights                                tag={tags[9]}/>
                <DataTransfer                               tag={tags[10]}/>
                <GeneralTerms                               tag={tags[11]}/>
                <GoverningLawAndJurisdiction                tag={tags[12]}/>
                <TowerText variant="body2" font={true}>
                    If your company requires this DPA signed by ProtonMail or have any questions, please email us at bloonstl@gmail.com.
                </TowerText>
            </GDPRContainer>
        </>
    );
}
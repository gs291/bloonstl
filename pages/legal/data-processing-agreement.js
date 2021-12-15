import Header from "../../components/page/Header";
import PageTitle from "../../components/page/PageTitle";
import MainContainer from "../../components/page/MainContainer";
import GDPRDataProcessingAgreement from "../../components/legal/gdpr/GDPRDataProcessingAgreement";


export default function DataProcessingAgreement({  }) {

    return (
        <>
            <Header title="Data Processing Agreement" />
            <MainContainer>
                <PageTitle title="Data Processing Agreement" />
                <GDPRDataProcessingAgreement />
            </MainContainer>
        </>
    );
}

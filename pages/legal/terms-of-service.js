import Header from "../../components/page/Header";
import PageTitle from "../../components/page/PageTitle";
import MainContainer from "../../components/page/MainContainer";
import TermsOfService from "../../components/legal/tos/TermsOfService";


export default function TOS({  }) {

    return (
        <>
            <Header title="Terms of Service" />
            <MainContainer>
                <PageTitle title="Terms of Service" />
                <TermsOfService />
            </MainContainer>
        </>
    );
}

import Legal from "../components/legal/Legal";
import Header from "../components/page/Header";
import PageTitle from "../components/page/PageTitle";
import MainContainer from "../components/page/MainContainer";

export default function LegalPage({  }) {

    return (
        <>
            <Header title="Legal" />
            <MainContainer>
                <PageTitle title="Legal" />
                <Legal />
            </MainContainer>
        </>
    );
}

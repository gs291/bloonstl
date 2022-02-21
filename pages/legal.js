import Legal from "../components/legal/Legal";
import Header from "../components/page/Header";
import PageTitle from "../components/page/PageTitle";
import MainContainer from "../components/page/MainContainer";
import FixedRightButtons from "../components/fixed/FixedRightButtons";

export default function LegalPage({  }) {

    return (
        <>
            <Header title="Legal" />
            <MainContainer>
                <PageTitle title="Legal" />
                <Legal />
            </MainContainer>
            <FixedRightButtons />
        </>
    );
}

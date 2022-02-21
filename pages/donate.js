import Header from "../components/page/Header";
import PageTitle from "../components/page/PageTitle";
import DonatePage from "../components/donate/DonatePage";
import MainContainer from "../components/page/MainContainer";
import FixedRightButtons from "../components/fixed/FixedRightButtons";


export default function Donate() {

    return (
        <>
            <Header title="Donate" />
            <MainContainer>
                <PageTitle title="Donate" />
                <DonatePage />
            </MainContainer>
            <FixedRightButtons />
        </>
    );
}
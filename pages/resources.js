import Header from "../components/page/Header";
import PageTitle from "../components/page/PageTitle";
import MainContainer from "../components/page/MainContainer";
import ResourcesPage from "../components/resources/ResourcePage";

export default function Resources({ monkeys }) {

    return (
        <>
            <Header title="Monkeys" />
            <MainContainer>
                <PageTitle title="Resources" />
                <ResourcesPage />
            </MainContainer>
        </>
    );
}

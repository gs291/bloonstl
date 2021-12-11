import Header from "../components/page/Header";
import PageTitle from "../components/page/PageTitle";
import apiDescription from "../lib/graphql/apiDescription";
import MainContainer from "../components/page/MainContainer";
import ResourcesPage from "../components/resources/ResourcePage";
import HorizontalAD from "../components/advertisment/HorizontalAD";

export default function Resources({ api }) {
    api = JSON.parse(api);

    return (
        <>
            <Header title="Resources" />
            <MainContainer>
                <PageTitle title="Resources" />
                <HorizontalAD />
                <ResourcesPage api={api}/>
            </MainContainer>
        </>
    );
}

export async function getStaticProps(context) {

    return {
        props: {
            api: JSON.stringify(apiDescription)
        }
    };
}

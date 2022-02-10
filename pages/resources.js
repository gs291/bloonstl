import Header from "../components/page/Header";
import PageTitle from "../components/page/PageTitle";
import Feedback from "../components/feedback/Feedback";
import apiDescription from "../lib/graphql/apiDescription";
import MainContainer from "../components/page/MainContainer";
import ResourcesPage from "../components/resources/ResourcePage";

export default function Resources({ api }) {
    api = JSON.parse(api);

    return (
        <>
            <Header title="Resources" />
            <MainContainer>
                <PageTitle title="Resources" />
                <ResourcesPage api={api}/>
            </MainContainer>
            <Feedback />
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

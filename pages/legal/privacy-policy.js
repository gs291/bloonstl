import Header from "../../components/page/Header";
import PageTitle from "../../components/page/PageTitle";
import Privacy from "../../components/legal/privacy/Privacy";
import MainContainer from "../../components/page/MainContainer";


export default function PrivacyPolicy({  }) {

    return (
        <>
            <Header title="Privacy Policy" />
            <MainContainer>
                <PageTitle title="Privacy Policy" />
                <Privacy />
            </MainContainer>
        </>
    );
}

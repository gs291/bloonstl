import Header from "../../components/page/Header";
import PageTitle from "../../components/page/PageTitle";
import Cookies from "../../components/legal/cookies/Cookies";
import MainContainer from "../../components/page/MainContainer";



export default function CookiePolicy({  }) {

    return (
        <>
            <Header title="Cookie Policy" />
            <MainContainer>
                <PageTitle title="Cookie Policy" />
                <Cookies />
            </MainContainer>
        </>
    );
}

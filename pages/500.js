import Header from "../components/page/Header";
import PageTitle from "../components/page/PageTitle";
import TowerText from "../components/tower/TowerText";
import MainContainer from "../components/page/MainContainer";


export default function Custom500({  }) {

    return (
        <>
            <Header title="Internal Server Error" />
            <MainContainer>
                <TowerText variant="h1">
                    500
                </TowerText>
                <PageTitle title="Server Error" />
                <TowerText variant="h4" font={true}>
                    An internal server error has occurred.
                </TowerText>
            </MainContainer>
        </>
    );
}

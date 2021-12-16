import Header from "../components/page/Header";
import PageTitle from "../components/page/PageTitle";
import TowerText from "../components/tower/TowerText";
import MainContainer from "../components/page/MainContainer";


export default function TOS({  }) {

    return (
        <>
            <Header title="Page Not Found" />
            <MainContainer>
                <TowerText variant="h1">
                    404
                </TowerText>
                <PageTitle title="Page Not Found" />
                <TowerText variant="h4" font={true}>
                    The resource you are looking for does not exist.
                </TowerText>
            </MainContainer>
        </>
    );
}

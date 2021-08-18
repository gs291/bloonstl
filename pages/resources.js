import Header from "../components/page/Header";
import PageTitle from "../components/page/PageTitle";
import MainContainer from "../components/page/MainContainer";

export default function Resources({ monkeys }) {

    return (
        <>
            <Header title="Monkeys" />
            <MainContainer>
                <PageTitle title="Resources" />
                <div>
                    Keybindings, cool things.
                </div>
            </MainContainer>
        </>
    );
}

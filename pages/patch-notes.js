import patches from "../lib/utils/patches";
import Header from "../components/page/Header";
import PageTitle from "../components/page/PageTitle";
import MainContainer from "../components/page/MainContainer";
import HorizontalAD from "../components/advertisment/HorizontalAD";
import PatchNotesPage from "../components/patch-notes/PatchNotesPage";

export default function PatchNotes({ patches }) {
    patches = JSON.parse(patches);

    return (
        <>
            <Header title="Patch Notes" />
            <MainContainer>
                <PageTitle title="Patch Notes" />
                <HorizontalAD />
                <PatchNotesPage patches={patches}/>
            </MainContainer>
        </>
    );
}

export async function getStaticProps(context) {

    return {
        props: {
            patches: JSON.stringify(patches)
        }
    };
}

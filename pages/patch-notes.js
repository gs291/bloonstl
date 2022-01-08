import Header from "../components/page/Header";
import PageTitle from "../components/page/PageTitle";
import patches, {latestMajor} from "../lib/utils/patches";
import MainContainer from "../components/page/MainContainer";
import HorizontalAD from "../components/advertisment/HorizontalAD";
import PatchNotesPage from "../components/patch-notes/PatchNotesPage";

export default function PatchNotes({ latestPatch }) {
    latestPatch = JSON.parse(latestPatch);

    return (
        <>
            <Header title="Patch Notes" />
            <MainContainer>
                <PageTitle title="Patch Notes" />
                <HorizontalAD />
                <PatchNotesPage patch={latestPatch}/>
                <HorizontalAD />
            </MainContainer>
        </>
    );
}

export async function getStaticProps(context) {

    return {
        props: {
            latestPatch: JSON.stringify(patches[latestMajor])
        }
    };
}

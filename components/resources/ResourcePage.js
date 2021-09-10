import Queries from "../api/Queries";


export default function ResourcesPage({ api }) {


    return (
        <>
            <Queries queries={api.queries} />
        </>
    );
}

import Queries from "../api/Queries";
import Objects from "../api/Objects";


export default function ResourcesPage({ api }) {


    return (
        <>
            <Queries queries={api.queries} />
            <Objects objs={api.objects} />
        </>
    );
}

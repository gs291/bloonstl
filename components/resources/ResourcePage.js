import Queries from "../api/Queries";
import Objects from "../api/Objects";
import FixedDivider from "../divider/FixedDivider";


export default function ResourcesPage({ api }) {


    return (
        <>
            <Queries queries={api.queries} />
            <FixedDivider width={100} />
            <Objects objs={api.objects} />
        </>
    );
}

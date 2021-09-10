import Endpoint from "./Endpoint";
import TowerText from "../tower/TowerText";


export default function Queries({ queries }) {

    return (
        <>
            <TowerText variant="h4" font={true}>
                {queries.title}
            </TowerText>
            <TowerText variant="h5" font={true}>
                {queries.description}
            </TowerText>

            {queries.items.map(item => (
                <Endpoint item={item} key={item.name}/>
            ))}
        </>
    );
}
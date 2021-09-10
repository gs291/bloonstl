import FieldTable from "./FieldTable";
import TowerText from "../tower/TowerText";


export default function Objects({ objs }) {

    return (
        <>
            <TowerText variant="h4" font={true}>
                {objs.title}
            </TowerText>
            <TowerText variant="h5" font={true}>
                {objs.description}
            </TowerText>

            {objs.items.map(row => (
                <FieldTable items={row} key={row.name}/>
            ))}
        </>
    );
}
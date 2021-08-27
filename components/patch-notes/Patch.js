import PatchItems from "./PatchItems";
import TowerText from "../tower/TowerText";


export default function Patch({ patch }) {

    console.log(patch);

    return (
        <>
            {patch.map(patchItem => (
                <div key={patchItem.title}>
                    <TowerText variant="h3">
                        {patchItem.title}
                    </TowerText>
                    <PatchItems items={patchItem.items} />
                </div>
            ))}
        </>
    );
}

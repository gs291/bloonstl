import styled from "@emotion/styled";

import PatchItems from "./PatchItems";
import TowerText from "../tower/TowerText";
import FixedDivider from "../divider/FixedDivider";

const PatchTitle = styled(TowerText)`
  margin-top: 30px;
`;

export default function Patch({ patch, tags }) {

    return (
        <>
            {patch.map((patchItem, idx) => (
                <div id={tags[idx] && tags[idx].href} key={patchItem.title}>
                    <PatchTitle variant="h3">
                        {patchItem.title}
                    </PatchTitle>
                    <PatchItems items={patchItem.items} />
                    <FixedDivider width={100}/>
                </div>
            ))}
        </>
    );
}

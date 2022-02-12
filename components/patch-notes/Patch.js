import styled from "@emotion/styled";

import PatchItems from "./PatchItems";
import TowerText from "../tower/TowerText";
import FixedDivider from "../divider/FixedDivider";


const PatchContainer = styled("div")`
  width: 100%;
`;

const PatchTitle = styled(TowerText)`
  margin-top: 30px;
`;

/**
 * An individual patch
 *
 * @param {Object} props Component props
 * @param {Object<{release: string, items: Array<Object>}>} props.patch Object representing an individual patch
 * @param {Array<Object<{href: string, title:string}>>} props.tags Array list of table of contents links
 */
export default function Patch({ patch, tags }) {

    return (
        <>
            {patch.items.map((patchItem, idx) => (
                <PatchContainer id={tags[idx] && tags[idx].href} key={patchItem.title}>
                    <PatchTitle variant="h3">
                        {patchItem.title}
                    </PatchTitle>
                    <PatchItems items={patchItem.items} />
                    <FixedDivider width={100}/>
                </PatchContainer>
            ))}
        </>
    );
}

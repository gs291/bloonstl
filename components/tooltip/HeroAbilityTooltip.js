import styled from "@emotion/styled";

import TowerText from "../tower/TowerText";
import {getHeroActivatedAbilityText} from "../../lib/utils";

export default function HeroAbilityTooltip({ ability }) {
    let name, description;
    if (ability.active) {
        [name, description] = getHeroActivatedAbilityText( ability.description );
    }
    return (
        <>
            { name && description && (
                <>
                    <TowerText variant="h5">
                        { name }
                    </TowerText>
                    <TowerText variant="body1" font={1}>
                        { description }
                    </TowerText>
                </>
            )}
            { !name && !description && (
                <>
                    <TowerText variant="body1" font={1}>
                        { ability.description }
                    </TowerText>
                </>
            )}
        </>
    );
}
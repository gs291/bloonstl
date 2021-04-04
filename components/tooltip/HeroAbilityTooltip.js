import styled from "@emotion/styled";

import TowerText from "../tower/TowerText";

export default function HeroAbilityTooltip({ ability }) {
    return (
        <>
            <TowerText variant="body1" font={1}>
                { ability. description }
            </TowerText>
        </>
    );
}
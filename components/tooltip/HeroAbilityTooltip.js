import TowerText from "../tower/TowerText";
import AbilityModifiersTooltip from "./AbilityModifiersTooltip";

export default function HeroAbilityTooltip({ ability, pathTier }) {

    return (
        <>
            <TowerText variant="h5">
                {ability.name !== "" ? ability.name : `Level ${pathTier + 1}`}
            </TowerText>
            <TowerText variant="body1" font={true}>
                {ability.description}
            </TowerText>
            <AbilityModifiersTooltip modifiers={ability.modifiers} />
        </>
    );
}
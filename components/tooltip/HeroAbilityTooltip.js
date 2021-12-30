import TowerText from "../tower/TowerText";

export default function HeroAbilityTooltip({ ability }) {

    return (
        <>
            { ability.active === 1 && (
                <>
                    <TowerText variant="h5">
                        {ability.name}
                    </TowerText>
                    <TowerText variant="body1" font={true}>
                        {ability.description}
                    </TowerText>
                </>
            )}
            { ability.active === 0 && (
                <>
                    <TowerText variant="body1" font={true}>
                        {ability.description}
                    </TowerText>
                </>
            )}
        </>
    );
}
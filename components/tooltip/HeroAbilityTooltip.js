import TowerText from "../tower/TowerText";
import siteColors from "../../lib/utils/siteColors";

export default function HeroAbilityTooltip({ ability }) {

    return (
        <>
            { ability.active === 1 && (
                <>
                    <TowerText variant="h5" textColor={siteColors.text.dark}>
                        {ability.name}
                    </TowerText>
                    <TowerText variant="body1" textColor={siteColors.text.dark} font={true}>
                        {ability.description}
                    </TowerText>
                </>
            )}
            { ability.active === 0 && (
                <>
                    <TowerText variant="body1" textColor={siteColors.text.dark} font={true}>
                        {ability.description}
                    </TowerText>
                </>
            )}
        </>
    );
}
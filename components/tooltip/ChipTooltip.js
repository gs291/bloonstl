import TowerText from "../tower/TowerText";
import siteColors from "../../lib/utils/siteColors";

export default function ChipTooltip({ className, isPro, title, text}) {
    return (
        <>
            <TowerText variant="h5" textColor={isPro ? siteColors.chip.pros : siteColors.chip.cons}>
                { title }
            </TowerText>
            <TowerText variant="body1" font={1}>
                { text }
            </TowerText>
        </>
    );
}
import TowerText from "../tower/TowerText";
import FixedDivider from "../divider/FixedDivider";

export default function TextWithPreviousTooltip ({text, value, prevValue}) {

    return (
        <>
            <TowerText variant="body1" font={true}>
                {text}
            </TowerText>
            {(typeof value === "number" && typeof prevValue === "number") && ((value - prevValue) !== 0) && (
                <>
                    <FixedDivider />
                    <TowerText variant="body1" font={true}>
                        +&nbsp;{prevValue.toFixed(2)}&nbsp;(Base)
                    </TowerText>
                    <TowerText variant="body1" font={true}>
                        {(value - prevValue) > 0 ? '+' : '-'}
                        &nbsp;
                        {(value - prevValue) > 0 ? (value - prevValue).toFixed(3) : (-1 * (value - prevValue)).toFixed(3) }
                        &nbsp;(Modifiers)
                    </TowerText>
                    <TowerText variant="body1" font={true}>
                        = {value.toFixed(3)}
                    </TowerText>
                </>
            )}
        </>
    );
}
import TowerText from "../tower/TowerText";

export default function TextTooltip({text, variant="h6", ...rest}) {

    return (
        <>
            <TowerText
                variant={variant}
                font={true}
                component="div"
                {...rest}
            >
                {text}
            </TowerText>
        </>
    );
}
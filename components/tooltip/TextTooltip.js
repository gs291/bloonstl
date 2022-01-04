import styled from "@emotion/styled";

import TowerText from "../tower/TowerText";
import FixedDivider from "../divider/FixedDivider";
import StatNumbers from "../statistics/StatNumbers";

const TooltipContainer = styled.div`
  padding: 2em 1em;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TallDivider = styled(FixedDivider)`
  margin-top: 1.5em;
  margin-bottom: 1.5em;
`;

const Text = styled(TowerText)`
  text-align: center;
`;



export default function TextTooltip({text, title, variant="body1", value, prevValue, ...rest}) {

    return (
        <>
            <TooltipContainer>
                <Text variant="h5">
                    {title}
                </Text>
                <TallDivider width={100} />
                <Text
                    variant={variant}
                    font={true}
                    component="div"
                    {...rest}
                >
                    {text}
                </Text>

                {(typeof value === "number" && typeof prevValue === "number") && ((value - prevValue) !== 0) && (
                    <>
                        <TallDivider width={100} />
                        <StatNumbers
                            rows={[
                                {
                                    "title": `Base`,
                                    "text": `+ ${prevValue.toFixed(2)}`
                                },
                                {
                                    "title": `Modifiers`,
                                    "text": `${(value - prevValue) > 0 ? '+' : '-'} ${(value - prevValue) > 0 ? (value - prevValue).toFixed(3) : (-1 * (value - prevValue)).toFixed(3) }`
                                },
                                {
                                    "title": `Total`,
                                    "text": `= ${value.toFixed(3)}`
                                }
                                ]}
                        />
                    </>
                )}
            </TooltipContainer>
        </>
    );
}
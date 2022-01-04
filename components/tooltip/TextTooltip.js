import styled from "@emotion/styled";

import TowerText from "../tower/TowerText";
import FixedDivider from "../divider/FixedDivider";
import StatNumbers from "../statistics/StatNumbers";
import {useSelector} from "react-redux";
import {getMobile} from "../../lib/redux/selectors";

const TooltipContainer = styled.div`
  padding: ${props => props["data-m"] ? 1 : 2}em 1em;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TallDivider = styled(FixedDivider)`
  margin-top: ${props => props["data-m"] ? 1 : 1.5}em;
  margin-bottom: ${props => props["data-m"] ? 1 : 1.5}em;
`;

const Text = styled(TowerText)`
  text-align: center;
`;



export default function TextTooltip({text, title, variant="body1", value, prevValue, ...rest}) {
    const mobile = useSelector(getMobile);

    return (
        <>
            <TooltipContainer data-m={mobile}>
                <Text variant="h5">
                    {title}
                </Text>
                <TallDivider width={100} data-m={mobile}/>
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
                        <TallDivider width={100} data-m={mobile} />
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
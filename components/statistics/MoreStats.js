import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import StatItem from "./StatItem";
import StatsContainer from "./StatsContainer";
import {getMobile} from "../../lib/redux/selectors";
import TowerText from "../tower/TowerText";

const ItemsContainer = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  width: ${props => props["data-m"] ? 33 : 50}%;
  
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 5px;
`;

const TextTooltip = ({text}) => (
    <>
        <TowerText variant="body1" font={true}>
            {text}
        </TowerText>
    </>
);

const critOccurrenceToText = (critOccurrence) => {
    if (critOccurrence === "0~0") {
        return 'Critical damage never occurs.'
    }

    const co = critOccurrence.match(/(\d*)~(\d*)/);
    if (co) {
        return `Critical damage occurs every ${co[1]} to ${co[2]} shots`
    } else {
        return `Critical damage occurs every ${critOccurrence} shots`;
    }
}


export default function MoreStats({stats, defaults, ...rest}) {
    const mobile = useSelector(getMobile);

    return (
        <>
            <StatsContainer title="More Stats">
                {mobile ? (
                    <>
                        <ItemsContainer data-m={mobile}>
                            <StatItem text="Hotkey" value={stats.hotkey} counter={false} tooltip={<TextTooltip text={`Default keyboard hotkey keybind: ${stats.hotkey}`} />} />
                            <StatItem text="Duration" value={stats.duration} prevValue={defaults.duration} suffix="&nbsp;s" tooltip={<TextTooltip text={`Duration the tower base attack lasts: ${stats.duration} seconds. (e.g. Banana Farm passive bananas)`} />} />
                        </ItemsContainer>
                        <ItemsContainer data-m={mobile}>
                            <StatItem text="Footprint" value={stats.footprint} counter={false} tooltip={<TextTooltip text={`Size the tower takes up on the map: ${stats.footprint}`} />} />
                            <StatItem text="Delay" value={stats.delay} prevValue={defaults.delay} suffix="&nbsp;s" tooltip={<TextTooltip text={`Delay until the attack occurs: ${stats.delay} seconds.`} />} />
                        </ItemsContainer>
                        <ItemsContainer data-m={mobile}>
                            <StatItem text="Income" value={stats.income} prevValue={defaults.income} prefix="+&nbsp;$" tooltip={<TextTooltip text={`Money generated per round: +$${stats.income}`} />} />
                            <StatItem text="Crit Rate" value={stats.crit_occurance} counter={false} tooltip={<TextTooltip text={critOccurrenceToText(stats.crit_occurance)} />} />
                        </ItemsContainer>
                    </>
                ) : (
                    <>
                        <ItemsContainer data-m={mobile}>
                            <StatItem text="Hotkey" value={stats.hotkey} counter={false} tooltip={<TextTooltip text={`Default keyboard hotkey keybind: ${stats.hotkey}`} />} />
                            <StatItem text="Income" value={stats.income} prevValue={defaults.income} prefix="+&nbsp;$" tooltip={<TextTooltip text={`Money generated per round: +$${stats.income}`} />} />
                            <StatItem text="Delay" value={stats.delay} prevValue={defaults.delay} suffix="&nbsp;s" tooltip={<TextTooltip text={`Delay until the attack occurs: ${stats.delay} seconds.`} />} />
                        </ItemsContainer>
                        <ItemsContainer data-m={mobile}>
                            <StatItem text="Footprint" value={stats.footprint} counter={false} tooltip={<TextTooltip text={`Size the tower takes up on the map: ${stats.footprint}`} />}/>
                            <StatItem text="Duration" value={stats.duration} prevValue={defaults.duration} suffix="&nbsp;s" tooltip={<TextTooltip text={`Duration the tower base attack lasts: ${stats.duration} seconds. (e.g. Banana Farm passive bananas)`} />} />
                            <StatItem text="Crit Rate" value={stats.crit_occurance} counter={false} tooltip={<TextTooltip text={critOccurrenceToText(stats.crit_occurance)} />} />
                        </ItemsContainer>
                    </>
                )}
            </StatsContainer>
        </>
    );
}

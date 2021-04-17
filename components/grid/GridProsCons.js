import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Chip, Grid} from "@material-ui/core";

import Tooltip from "../tooltip/Tooltip";
import TowerText from "../tower/TowerText";
import ChipTooltip from "../tooltip/ChipTooltip";
import siteColors from "../../lib/utils/siteColors";
import {getMobile} from "../../lib/redux/selectors";

const ChipContainer = styled(Grid)`
  margin: 0;
  width: 350px;
  min-height: 50px;
`;

const Title = styled(TowerText)`
  text-align: center;
  margin-bottom: 5px;
`;

const StyledChip = styled(Chip)`
  @keyframes popup {
    0% {
      opacity: 0;
      width: 0;
    }
    100% {
      opacity: 1;
      width: 100px;
    }
  }
  
  animation-name: popup;
  animation-duration: 200ms;
  animation-timing-function: linear;
  
  width: 100px;
  background-color: ${props => props["data-pro"] ? siteColors.chip.pros: siteColors.chip.cons};

  &:hover {
    cursor: pointer;
  }
`;

export default function GridProsCons({ className, isPro, proCons}) {
    const mobile = useSelector(getMobile);

    return (
        <>
            <Grid container
                  spacing={1}
                  direction="column"
            >
                <Grid item>
                    <Title variant="h5">
                        {isPro ? "Pros" : "Cons"}
                    </Title>
                </Grid>
                <Grid item>
                    { proCons.length > 0 && (
                        <ChipContainer container spacing={2}>
                            { proCons.map(pc => ( pc &&
                                (
                                    <Grid item xs={4} key={pc.title}>
                                        <Tooltip
                                            title={
                                                <ChipTooltip isPro={isPro}
                                                             title={pc.title}
                                                             text={isPro ? pc.pro : pc.con}
                                                />}
                                        >
                                            <StyledChip label={pc.title} data-pro={isPro} />
                                        </Tooltip>
                                    </Grid>
                                )
                            ))}
                        </ChipContainer>
                    )}
                </Grid>
            </Grid>
        </>
    );
}
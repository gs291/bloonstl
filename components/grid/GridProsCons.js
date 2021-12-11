import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Chip, Grid} from "@mui/material";

import Tooltip from "../tooltip/Tooltip";
import TowerText from "../tower/TowerText";
import ChipTooltip from "../tooltip/ChipTooltip";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode, getMobile} from "../../lib/redux/selectors";

const GridContainer = styled(Grid)`
  width: 100%;
`;

const ChipContainer = styled(Grid)`
  min-height: 50px;
`;

const ChipItem = styled(Grid)`
  display: flex;
  justify-content: center;
`;

const Title = styled(TowerText)`
  text-align: center;
  margin-bottom: 5px;
`;

const StyledChip = styled(Chip)`
  @keyframes popup {
    0% {
      transform: scale(0);
      opacity: 0.0;
    }
    60% {
      transform: scale(1.1);
    }
    80% {
      transform: scale(0.9);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  opacity: 1;
  animation-name: popup;
  animation-duration: 200ms;
  animation-timing-function: ease-in-out;
  
  width: 100px;
  background-color: ${props => props["data-pro"]
          ? props["data-dm"] ? siteColors.pros.dark : siteColors.pros.light
          : props["data-dm"] ? siteColors.cons.dark : siteColors.cons.light};

  &:hover {
    cursor: pointer;
  }
`;

export default function GridProsCons({ className, isPro, proCons}) {
    const mobile = useSelector(getMobile);
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <Grid container
                  spacing={1}
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  alignContent="center"
            >
                <GridContainer item>
                    <Title variant="h5">
                        {isPro ? "Pros" : "Cons"}
                    </Title>
                </GridContainer>
                <GridContainer item>
                    { proCons.length > 0 && (
                        <ChipContainer container spacing={2}>
                            { proCons.map((pc, idx) => ( pc &&
                                (
                                    <ChipItem item xs={proCons.length > 1 ? mobile ? 6 : 4 : 12} key={idx}>
                                        <Tooltip
                                            title={
                                                <ChipTooltip isPro={isPro}
                                                             title={pc.title}
                                                             text={isPro ? pc.pro : pc.con}
                                                             data-dm={darkMode}
                                                />}
                                        >
                                            <StyledChip label={pc.title} data-pro={isPro} />
                                        </Tooltip>
                                    </ChipItem>
                                )
                            ))}
                        </ChipContainer>
                    )}
                </GridContainer>
            </Grid>
        </>
    );
}
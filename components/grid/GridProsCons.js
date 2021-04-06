import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Chip, Grid} from "@material-ui/core";

import Tooltip from "../tooltip/Tooltip";
import TowerText from "../tower/TowerText";
import ChipTooltip from "../tooltip/ChipTooltip";
import siteColors from "../../lib/utils/siteColors";
import {getMobile} from "../../lib/redux/selectors";
import {rankColors} from "../../lib/utils/utils";

const ChipContainer = styled(Grid)`
  margin: 0;
  width: 350px;
  min-height: 50px;
`;

const Title = styled(TowerText)`
  text-align: center;
  margin-bottom: 5px;
`;

export default function GridProsCons({ className, isPro, proCons}) {
    const mobile = useSelector(getMobile);

    const StyledChip = styled(Chip)`
      width: ${mobile ? "75px" : "100px"};
      background-color: ${props => props.pros === 1 ? siteColors.chip.pros: siteColors.chip.cons};
    
      &:hover {
        cursor: pointer;
      }
    `;

    return (
        <>
            <Grid container
                  spacing={1}
                  direction="column"
            >
                <Grid item>
                    <Title variant="h5">
                        { isPro === 1 ? "Pros" : "Cons"}
                    </Title>
                </Grid>
                <Grid item>
                    { proCons.length > 0 && (
                        <ChipContainer container spacing={2}>
                            { proCons.map(pc => ( pc &&
                                (
                                    <Grid item xs={4} key={pc.title}>
                                        <Tooltip
                                            title={<ChipTooltip isPro={isPro} title={pc.title} text={isPro === 1 ? pc.pro : pc.con} />}
                                            upgradeTier={2}
                                        >
                                            <StyledChip label={pc.title} pros={isPro} />
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
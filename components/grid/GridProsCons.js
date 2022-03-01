import {Grid} from "@mui/material";
import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import TowerText from "../tower/TowerText";
import ProConChip from "../tower/ProConChip";
import {getMobile} from "../../lib/redux/selectors";


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

/**
 * Grid of pros or cons
 *
 * @param {Object} props Component props
 * @param {string} [props.className] class to apply to the component
 * @param {boolean} props.isPro Shows if the grid will be pros or cons
 * @param {Array<{title: string, pro: string, con: string}>} props.proCons Array list of the pros or cons
 */
export default function GridProsCons({ className, isPro, proCons}) {
    const mobile = useSelector(getMobile);

    return (
        <>
            <Grid container
                  spacing={1}
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  alignContent="center"
                  className={className}
            >
                <GridContainer item>
                    <Title variant={mobile ? "h5" : "h4"}>
                        {isPro ? "Pros" : "Cons"}
                    </Title>
                </GridContainer>
                <GridContainer item>
                    { proCons.length > 0 && (
                        <ChipContainer container spacing={2}>
                            { proCons.map((pc, idx) => ( pc &&
                                (
                                    <ChipItem item xs={proCons.length > 1 ? mobile ? 6 : 4 : 12} key={idx}>
                                        <ProConChip
                                            isPro={isPro}
                                            title={pc.title}
                                            text={isPro ? pc.pro : pc.con}
                                            chipType="main"
                                        />
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
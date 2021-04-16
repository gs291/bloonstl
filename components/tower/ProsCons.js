import styled from "@emotion/styled";
import {Grid} from "@material-ui/core";
import {useSelector} from "react-redux";

import GridProsCons from "../grid/GridProsCons";
import FixedDivider from "../divider/FixedDivider";
import {parseProsCons} from "../../lib/utils/utils";
import {getMobile} from "../../lib/redux/selectors";
import VerticalDivider from "../divider/VerticalDivider";

const ProsConsContainer = styled(Grid)`
  min-height: ${props => props["data-m"] ? "250px" : "125px"};
  margin-top: 10px;
  margin-bottom: 10px;
`;

export default function ProsCons({ className, pros, cons, backgroundColor }) {
    const mobile = useSelector(getMobile);
    pros = parseProsCons(pros);
    cons = parseProsCons(cons);

    return (
        <>
            <ProsConsContainer container
                               spacing={2}
                               justify="center"
                               direction={mobile ? "column" : "row"}
                               alignItems={mobile ? "center" : "stretch"}
                               data-m={mobile}
            >
                <Grid item>
                    <GridProsCons isPro={true} proCons={pros}/>
                </Grid>
                { mobile ? (
                    <FixedDivider width={80} backgroundColor={backgroundColor}/>
                ) : (
                    <VerticalDivider backgroundColor={backgroundColor} />
                )}
                <Grid item>
                    <GridProsCons isPro={false} proCons={cons}/>
                </Grid>
            </ProsConsContainer>
        </>
    );
}
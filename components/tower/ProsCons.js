import styled from "@emotion/styled";
import {Grid} from "@material-ui/core";
import {useSelector} from "react-redux";

import GridProsCons from "../grid/GridProsCons";
import {parseProsCons} from "../../lib/utils/utils";
import {getMobile} from "../../lib/redux/selectors";


export default function ProsCons({ className, pros, cons }) {
    const mobile = useSelector(getMobile);
    pros = parseProsCons(pros);
    cons = parseProsCons(cons);

    const ProsConsContainer = styled(Grid)`
      min-height: ${mobile ? "250px" : "125px"};
      margin-top: 10px;
      margin-bottom: 10px;
    `;

    return (
        <>
            <ProsConsContainer container
                               spacing={2}
                               justify="center"
                               direction={mobile ? "column" : "row"}
                               alignItems={mobile ? "center" : "stretch"}
            >
                <Grid item>
                    <GridProsCons isPro={1} proCons={pros}/>
                </Grid>

                <Grid item>
                    <GridProsCons isPro={0} proCons={cons}/>
                </Grid>
            </ProsConsContainer>
        </>
    );
}
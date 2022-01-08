import {Grid} from "@mui/material";
import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import GridProsCons from "../grid/GridProsCons";
import FixedDivider from "../divider/FixedDivider";
import {parseProsCons} from "../../lib/utils/utils";
import {getMobile} from "../../lib/redux/selectors";
import VerticalDivider from "../divider/VerticalDivider";
import {globalOptions} from "../../lib/utils/emotionStyled";

const ProsConsContainer = styled(Grid, globalOptions)`
  min-height: ${props => props["data-m"] ? "250px" : "125px"};
  margin-top: 10px;
  margin-bottom: 50px;
`;

const SpacedGrid = styled(Grid, globalOptions)`
  flex: ${props => props["data-m"] ? 1 : 0.5};
  width: ${props => props["data-m"] ? 100 : 90}%;
`;

export default function ProsCons({ className, pros, cons, backgroundColor }) {
    const mobile = useSelector(getMobile);
    if (!pros) { pros = ""; }
    if (!cons) { cons = ""; }
    pros = parseProsCons(pros);
    cons = parseProsCons(cons);

    return (
        <>
            <ProsConsContainer container
                               spacing={2}
                               justifyContent="center"
                               direction={mobile ? "column" : "row"}
                               alignItems={mobile ? "center" : "stretch"}
                               data-m={mobile}
            >
                <SpacedGrid data-m={mobile} item>
                    <GridProsCons isPro={true} proCons={pros}/>
                </SpacedGrid>
                { mobile ? (
                    <FixedDivider width={80} backgroundColor={backgroundColor}/>
                ) : (
                    <VerticalDivider backgroundColor={backgroundColor} />
                )}
                <SpacedGrid data-m={mobile} item>
                    <GridProsCons isPro={false} proCons={cons}/>
                </SpacedGrid>
            </ProsConsContainer>
        </>
    );
}
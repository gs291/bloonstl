import {styled, useTheme} from "@mui/material/styles";

import BloonImgInfo from "./BloonImgInfo";
import BloonStats from "../statistics/BloonStats";
import FixedDivider from "../divider/FixedDivider";

const Border = styled(FixedDivider)`
  margin-top: 50px;
  margin-bottom: 50px;
`;

export default function BloonPage({bloon, type}) {
    const theme = useTheme();

    const dividerBackgroundColor = theme.palette.tier.s.color;

    return (
        <>
            <BloonImgInfo bloon={bloon} />
            <Border width={100} backgroundColor={dividerBackgroundColor}/>
            <BloonStats bloon={bloon} />
        </>
    );
}
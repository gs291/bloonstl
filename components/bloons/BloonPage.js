import {useState} from "react";
import {styled, useTheme} from "@mui/material/styles";

import BossSpecial from "./BossSpecial";
import BloonImgInfo from "./BloonImgInfo";
import BloonHierarchy from "./BloonHierarchy";
import BloonStats from "../statistics/BloonStats";
import FixedDivider from "../divider/FixedDivider";


const Border = styled(FixedDivider)`
  margin-top: 50px;
  margin-bottom: 50px;
`;

/**
 * The '/bloon/[varName]' page component
 *
 * @param {Object} props Component props
 * @param {Object} props.bloon Object containing the bloon
 */
export default function BloonPage({bloon, type}) {
    const theme = useTheme();
    const [tier, setTier] = useState(0);

    const dividerBackgroundColor = theme.palette.bloon[bloon.varName].color;

    return (
        <>
            <BloonImgInfo bloon={bloon} />
            <Border width={100} backgroundColor={dividerBackgroundColor}/>
            <BloonStats bloon={bloon} tier={tier}/>
            <Border width={100} backgroundColor={dividerBackgroundColor}/>
            <BloonHierarchy bloon={bloon} />
            {typeof bloon.type === "number" && (
                <>
                    <Border width={100} backgroundColor={dividerBackgroundColor}/>
                    <BossSpecial bloon={bloon} />
                </>
            )}
        </>
    );
}
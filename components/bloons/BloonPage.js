import {useState} from "react";
import {styled, useTheme} from "@mui/material/styles";

import BossSpecial from "./BossSpecial";
import BloonImgInfo from "./BloonImgInfo";
import BossTier from "../button/BossTier";
import BossElite from "../button/BossElite";
import BloonHierarchy from "./BloonHierarchy";
import BloonStats from "../statistics/BloonStats";
import FixedDivider from "../divider/FixedDivider";


const Border = styled(FixedDivider)`
  margin-top: 50px;
  margin-bottom: 50px;
`;

const BossFilters = styled("div")`
  display: flex;
  flex-direction: row;
  gap: 15px;
  width: 100%;
  margin-top: 35px;
`;

/**
 * The '/bloon/[varName]' page component
 *
 * @param {Object} props Component props
 * @param {Object} props.bloon Object containing the bloon
 */
export default function BloonPage({bloon}) {
    const theme = useTheme();
    const [tier, setTier] = useState(0);
    const [elite, setElite] = useState(false);

    const currBloon = elite ? bloon.elite : bloon;

    const dividerBackgroundColor = theme.palette.bloon[currBloon.varName].color;

    const handleTier = (e) => {
        setTier(e.target.value)
    };

    const handleElite = () => {
        setElite(prevElite => !prevElite)

    }

    return (
        <>
            <BloonImgInfo bloon={currBloon} />
            {typeof currBloon.type === "number" && (
                <BossFilters>
                    <BossElite elite={elite} handleElite={handleElite} />
                    <BossTier tier={tier} handleTier={handleTier}/>
                </BossFilters>
            )}
            <Border width={100} backgroundColor={dividerBackgroundColor}/>
            <BloonStats bloon={currBloon} tier={tier}/>
            {typeof currBloon.type === "number" && (
                <>
                    <Border width={75} backgroundColor={dividerBackgroundColor}/>
                    <BossSpecial special={currBloon.special} tier={tier}/>
                </>
            )}
            <Border width={100} backgroundColor={dividerBackgroundColor}/>
            <BloonHierarchy bloon={bloon} />
        </>
    );
}
import {useState} from "react";
import {styled, useTheme} from "@mui/material/styles";

import EnemyImgInfo from "./EnemyImgInfo";
import BossTier from "../button/BossTier";
import BossElite from "../button/BossElite";
import BossSpecial from "../bloons/BossSpecial";
import EnemyStats from "../statistics/EnemyStats";
import FixedDivider from "../divider/FixedDivider";
import BloonHierarchy from "../bloons/BloonHierarchy";


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
 * The '/enemy/[varName]' page component
 *
 * @param {Object} props Component props
 * @param {Object} props.enemy Object containing the enemy
 */
export default function EnemyPage({enemy}) {
    const theme = useTheme();
    const [tier, setTier] = useState(0);
    const [elite, setElite] = useState(false);

    const currEnemy = elite ? enemy.elite : enemy;

    const dividerBackgroundColor = theme.palette.bloon[currEnemy.varName].color;

    const handleTier = (e) => {
        setTier(e.target.value)
    };

    const handleElite = () => {
        setElite(prevElite => !prevElite)

    }

    return (
        <>
            <EnemyImgInfo enemy={currEnemy} />
            {typeof currEnemy.type === "number" && (
                <BossFilters>
                    <BossElite elite={elite} handleElite={handleElite} color={dividerBackgroundColor} />
                    <BossTier tier={tier} handleTier={handleTier} color={dividerBackgroundColor} />
                </BossFilters>
            )}
            <Border width={100} backgroundColor={dividerBackgroundColor}/>
            <EnemyStats enemy={currEnemy} tier={tier}/>
            {typeof currEnemy.type === "number" && (
                <>
                    <Border width={75} backgroundColor={dividerBackgroundColor}/>
                    <BossSpecial special={currEnemy.special} tier={tier}/>
                </>
            )}
            <Border width={100} backgroundColor={dividerBackgroundColor}/>
            <BloonHierarchy bloon={currEnemy} />
        </>
    );
}
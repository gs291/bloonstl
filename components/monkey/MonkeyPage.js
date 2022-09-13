import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {styled} from "@mui/material/styles";
import {useTheme} from "@mui/material/styles";

import Counter from "../tower/Counter";
import Stats from "../statistics/Stats";
import ProsCons from "../tower/ProsCons";
import TowerText from "../tower/TowerText";
import SandboxMode from "../filters/SandboxMode";
import TowerImgInfo from "../tower/TowerImgInfo";
import TierPathText from "../tower/TierPathText";
import FixedDivider from "../divider/FixedDivider";
import {getMobile} from "../../lib/redux/selectors";
import FilterDifficulty from "../filters/FilterDifficulty";
import MonkeyAbilities from "../abilities/MonkeyAbilities";
import FilterPagination from "../filters/FilterPagination";
import TowerPatchUpdates from "../patch-notes/TowerPatchUpdates";
import ConsecutiveSnackbars from "../snackbar/ConsecutiveSnackbars";
import StatAbilitiesWrapper from "../statistics/StatAbilitiesWrapper";
import {checkIfValidPath, getInitialTowerStats, getMonkeyColor} from "../../lib/utils/utils";


const AbilitiesText = styled(TowerText)`
  margin-top: 10px;
  margin-bottom: 20px;
  cursor: default;
  text-align: center;
`;

const PathCost = styled(TowerText)`
  margin-bottom: 20px;
`;

const FilterDiff = styled(FilterDifficulty)`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Title = styled(TowerText)`
  margin-top: 10px;
  margin-bottom: 30px;
  text-align: center;
  cursor: default;
`;

const PatchText = styled(TowerText)`
  margin-top: 20px;
  text-align: center;
  cursor: default;
`;

const Sandbox = styled(SandboxMode)`
  margin-bottom: 15px;
`;

// In order to fix an infinite re-rendering issue from path being set back and forth components
// this function had to be placed outside the component so its never "re-rendered"
// This unfortunately forces having to pass state sets into the function down the component tree
const handlePathChange = (changes, {setPath, setSnackPack}) => {
    setPath(prevPath => {
        const tempStats = {...prevPath, ...changes};

        const err = checkIfValidPath({...tempStats});
        if (err) {
            setSnackPack((prev) => [...prev, { message: err.err, variant: "error", key: new Date().getTime() }])
            return {
                ...prevPath,
            }
        }

        return {
            ...prevPath,
            ...changes
        }
    })
};

/**
 * Individual monkey Page
 *
 * @param {Object} props Component props
 * @param {Object} props.monkey Object containing all the monkey data
 */
export default function MonkeyPage({monkey}) {
    const theme = useTheme();
    const mobile = useSelector(getMobile);
    const [ page, setPage ] = useState(1);
    const [ tier, setTier ] = useState("s");
    const [ path, setPath ] = useState(monkey.tiers[tier][page-1]);
    const [ sandbox, setSandbox ] = useState(false);
    const [ pauseSandbox, setPauseSandbox ] = useState(false);
    const [ stats, setStats ] = useState(getInitialTowerStats(monkey.stats, {pros: path.pros, cons: path.cons}));

    const [ snackPack, setSnackPack ] = useState([]);
    const [ openSnackbar, setOpenSnackbar ] = useState(false);
    const [ messageInfo, setMessageInfo ] = useState(undefined);

    const handleTier = (_, r) => {
        setPage(1);
        setTier(r);
    };
    const handlePage = (_, p) => {
        setPage(p);
    }

    const handlePathReset = () => {
        setPath({
            "top_path": 0,
            "middle_path": 0,
            "bottom_path": 0,
            "pros": "",
            "cons": ""
        });
    }

    const dividerBackgroundColor = getMonkeyColor(monkey.type, theme);

    useEffect(() => {
        setPath(monkey.tiers[tier][page-1]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tier, page]);

    useEffect(() => {
        if (sandbox) {
            setPath({
                    "top_path": 0,
                    "middle_path": 0,
                    "bottom_path": 0,
                    "pros": "",
                    "cons": ""
                });
        } else {
            setPath(monkey.tiers[tier][page-1]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sandbox]);

    return (
        <>
            <TowerImgInfo tower={monkey} towerType="monkey"/>
            <Stats stats={stats} path={path} type={monkey.type} />
            <FixedDivider width={100} backgroundColor={dividerBackgroundColor}/>
            <FilterDiff color={dividerBackgroundColor}/>
            <FixedDivider width={100} backgroundColor={dividerBackgroundColor}/>
            <AbilitiesText variant={mobile ? "h4" : "h3"}>
                Monkey Abilities
            </AbilitiesText>
            <TierPathText tiers={path} textColor={dividerBackgroundColor}/>
            <PathCost variant={mobile ? "h6" : "h4"} textColor={dividerBackgroundColor}>
                Path Cost: $<Counter cost={stats.cost} />
            </PathCost>
            <Sandbox
                sandbox={sandbox} setSnackPack={setSnackPack}
                setSandbox={setSandbox} pauseSandbox={pauseSandbox} setPauseSandbox={setPauseSandbox}
                tier={sandbox ? monkey.tier : tier} handleReset={handlePathReset} towerType="monkey"
            />
            <MonkeyAbilities
                abilities={monkey.abilities}
                monkeyName={monkey.name} monkeyFile={monkey.filename}
                tier={sandbox ? monkey.tier : tier}
                path={path} setPath={setPath} handlePathChange={sandbox && !pauseSandbox && handlePathChange}
                stats={monkey.stats} setStats={setStats} setSnackPack={setSnackPack}
            />
            {!sandbox && (<FilterPagination pageCount={monkey.tiers[tier].length} page={page} handlePage={handlePage} />)}
            <StatAbilitiesWrapper stats={stats} dividerBackgroundColor={dividerBackgroundColor} towerType="monkey" type={monkey.type}/>
            <FixedDivider width={100} backgroundColor={dividerBackgroundColor}/>
            <Title variant={mobile ? "h4" : "h3"}>
                Tower Pros / Cons
            </Title>
            <ProsCons pros={stats.pros} cons={stats.cons} backgroundColor={dividerBackgroundColor}/>
            <FixedDivider width={100} backgroundColor={dividerBackgroundColor}/>
            <PatchText variant={mobile ? "h4" : "h3"}>
                Latest
            </PatchText>
            <Title variant={mobile ? "h4" : "h3"}>
                Patch Updates
            </Title>
            <TowerPatchUpdates name={monkey.name} borderColor={dividerBackgroundColor} />
            <ConsecutiveSnackbars
                snackPack={snackPack} setSnackPack={setSnackPack}
                open={openSnackbar} setOpen={setOpenSnackbar}
                messageInfo={messageInfo} setMessageInfo={setMessageInfo}
            />
        </>
    );
}

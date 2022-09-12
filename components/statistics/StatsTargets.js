import {styled} from "@mui/material/styles";

import ProConChip from "../tower/ProConChip";
import siteProsCons from "../../lib/utils/siteProsCons";


const TargetsContainer = styled("div")`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 5px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  
  gap: 10px 20px;
`;

const conversion = {
    "bloon": "bln",
    "purple": "purp",
    "ceramic": "cm"
}

/**
 * The small use case stat wrapper for specific statistics
 *
 * @param {Object} props Component props
 * @param {Array<Object<{isPro: boolean, code: string}>>} targets The targets applicable to the statistics
 * @param {string} props.statType Shows what card/stat it is
 */
export default function StatsTargets({targets, statType}) {

    return (
        <>
            {targets.length > 0 && (
                <TargetsContainer>
                    {targets.map(({isPro, code}, idx) => {
                        if (conversion[code]) {
                            code = conversion[code];
                        }
                        const proConChipInfo = siteProsCons[code];

                        if (proConChipInfo) {
                            return (
                                <ProConChip
                                    key={`${code}-${isPro}-${proConChipInfo.pro}-${idx}`}
                                    isPro={isPro}
                                    text={isPro ? proConChipInfo.pro : proConChipInfo.con}
                                    title={proConChipInfo.title}
                                    chipType={statType}
                                />
                            )
                        } else {
                            return <div key={`${code}-${isPro}`}>{code}</div>;
                        }
                    })}
                </TargetsContainer>
            )}
        </>
    );
}
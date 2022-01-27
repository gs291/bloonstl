import styled from "@emotion/styled";

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
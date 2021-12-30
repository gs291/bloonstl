import {Tooltip} from "@mui/material";

import TowerText from "../tower/TowerText";
import siteColors from "../../lib/utils/siteColors";

export default function TextTooltip({children, className, tooltip, ...rest}) {

    return (
        <>
            <Tooltip
                arrow
                placement="top"
                className={className}
                {...rest}
                title={(
                    <TowerText
                        variant="h6"
                        font={true}
                    >
                        {tooltip}
                    </TowerText>
                )}
            >
                <div>
                    {children}
                </div>
            </Tooltip>
        </>
    );
}
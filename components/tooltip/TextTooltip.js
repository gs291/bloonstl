import {Tooltip} from "@material-ui/core";

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
                        textColor={siteColors.text.dark}
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
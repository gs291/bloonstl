import {Tooltip} from "@material-ui/core";

import TowerText from "../tower/TowerText";
import siteColors from "../../lib/utils/siteColors";

export default function TextTooltip({children, tooltip}) {

    return (
        <>
            <Tooltip
                arrow
                placement="top"
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
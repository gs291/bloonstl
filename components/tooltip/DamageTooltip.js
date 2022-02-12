import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import TowerText from "../tower/TowerText";
import FixedDivider from "../divider/FixedDivider";
import StatNumbers from "../statistics/StatNumbers";
import {getMobile} from "../../lib/redux/selectors";
import {globalOptions} from "../../lib/utils/emotionStyled";


const TooltipContainer = styled("div", globalOptions)`
  padding: ${props => props["data-m"] ? 1 : 2}em 1em;
`;

const TitleText = styled(TowerText)`
  text-align: center;
`;

const TallDivider = styled(FixedDivider)`
  margin-top: ${props => props["data-m"] ? 1 : 1.5}em;
  margin-bottom: ${props => props["data-m"] ? 1 : 1.5}em;
`;

/**
 * Damage tooltip component
 *
 * @param {Object} props Component props
 * @param {string} props.type The damage type
 * @param {number} props.typeDamage The initial damage done by the statistic
 * @param {number} props.baseDamage The base damage done by the statistic
 * @param {number} [props.extraDamage=0] The extra damage done by the statistic
 */
export default function DamageTooltip({type, typeDamage, baseDamage, extraDamage = 0} ) {
    const mobile = useSelector(getMobile);

    const totalDamage = typeDamage + baseDamage + extraDamage;

    let extraDamageText = "Extra DMG";
    const extraType = type.match(/Fortified\s(\w*)/);
    if (extraType) {
        extraDamageText = `${extraType[1]} DMG`;
    }

    return (
        <>
            <TooltipContainer data-m={mobile}>
                <TitleText variant="h5">
                    {type} Damage
                </TitleText>
                <TallDivider width={100} data-m={mobile} />
                <StatNumbers
                    widthLeft={mobile ? 60 : 50}
                    widthRight={mobile ? 40 : 50}
                    rows={[
                        {
                            "title": `${type} DMG`,
                            "text": `+ ${typeDamage}`
                        },
                        {
                            "title": `${extraDamageText}`,
                            "text": `+ ${extraDamage}`
                        },
                        {
                            "title": `Base DMG`,
                            "text": `+ ${baseDamage}`
                        },
                        {
                            "title": `Total`,
                            "text": `= ${totalDamage}`
                        }
                    ]}
                />
            </TooltipContainer>
        </>
    );
};
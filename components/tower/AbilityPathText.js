import {Typography} from "@mui/material";
import {styled} from "@mui/material/styles";


const Tier = styled(Typography)`
  color: ${props => props["data-tc"] ? props["data-tc"] : props.theme.palette.text.primary};
  cursor: default;
  ${props => !(props.theme.palette.mode === "dark") && `text-shadow: 5px 5px 10px ${props.theme.palette.text.primary}`};
`;

const TierContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;


/**
 * Ability Path or Level text
 *
 * @param {Object} props Component props
 * @param {string} [props.className] class to apply to the component
 * @param {Object} props.path The object containing the ability path
 * @param {string} props.towerType Shows if the tower is a monkey or hero
 * @param {string} props.textColor Color to set the text
 */
export default function AbilityPathText ({ className,path, towerType, textColor}) {

    return (
        <>
            <TierContainer className={className}>
                {towerType === "hero" ? (
                    <Tier variant="h3" component="h2" data-tc={textColor}>
                        Level {path.top_path}
                    </Tier>
                ) : (
                    <Tier variant="h3" component="h2" data-tc={textColor}>
                        { path.top_path }
                        &nbsp;-&nbsp;
                        { path.middle_path }
                        &nbsp;-&nbsp;
                        { path.bottom_path }
                    </Tier>
                )}

            </TierContainer>
        </>
    );
}
import {styled} from "@mui/material/styles";
import {useTheme} from "@mui/material/styles";

import TowerText from "../tower/TowerText";


const ErrorContainer = styled("div")`
  margin-top: 30px;
  margin-bottom: 30px;
`;


/**
 * GraphQL API Item
 *
 * @param {Object} props Component props
 * @param {Array<{message: string}>|null} props.errorMessages Array list containing potential error messages
 */
export default function FetchErrors({errorMessages}) {
    const theme = useTheme();

    return (
        <>
            <ErrorContainer>
                <TowerText
                    variant="h4"
                    textColor={theme.palette.informational.error}
                >
                    {errorMessages && errorMessages.length > 1 ? (
                        "Errors have Occurred"
                    ) : (
                        "An Error Has Occurred"
                    )}
                </TowerText>
                {errorMessages && errorMessages.map(err => (
                    <TowerText
                        variant="h6"
                        font={true}
                        key={err.message}
                    >
                        {err.message}
                    </TowerText>
                ))}
            </ErrorContainer>
        </>
    );
}
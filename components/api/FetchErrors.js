import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import TowerText from "../tower/TowerText";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";


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
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <ErrorContainer>
                <TowerText
                    variant="h4"
                    textColor={darkMode ? siteColors.error.dark : siteColors.error.light }
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
import {styled} from "@mui/material/styles";

import TowerText from "../tower/TowerText";


export const Text = styled(TowerText)`
  margin-bottom: 20px;
`;

/**
 * Legal text
 *
 * @param {Object} props Component props
 * @param {any} props.children Children supplied to the text
 */
export default function LegalText({children, ...rest}) {

    return (
        <>
            <Text
                { ...rest }
            >
                {children}
            </Text>
        </>
    );
}
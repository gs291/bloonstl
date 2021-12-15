import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";

export const List = styled.ul`
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
`;

export default function LegalUList({children, ...rest}) {
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <List
                data-dm={darkMode}
                { ...rest }
            >
                {children}
            </List>
        </>
    );
}
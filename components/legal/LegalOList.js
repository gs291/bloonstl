import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";

export const List = styled.ol`
  counter-reset: item ${props => props.start};
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
`;

export default function LegalOList({children, ...rest}) {
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